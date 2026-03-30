from __future__ import annotations

import argparse
from dataclasses import asdict
import json
import sys
from pathlib import Path
from typing import Any

from .approvals import LiveMutationNotAllowed, require_live_mutation_approval
from .campaigns import build_campaign_creation_plan, plan_to_dict
from .cleanup import build_cleanup_plan, cleanup_plan_to_dict, load_cleanup_config
from .client import load_google_ads_environment
from .config import load_campaign_config
from .models import CampaignConfig
from .mutations import execute_campaign_config, execute_cleanup_plan
from .snapshot import fetch_account_snapshot, summarize_account_snapshot
from .reporting import summarize_report
from .validators import ValidationError


def _dump_json(payload: Any) -> None:
    json.dump(payload, sys.stdout, indent=2, sort_keys=True, default=str)
    sys.stdout.write("\n")


def _load_rows(path: Path) -> list[dict[str, Any]]:
    with path.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)
    if not isinstance(payload, list):
        raise ValidationError("report input must be a JSON list of rows")
    if not all(isinstance(item, dict) for item in payload):
        raise ValidationError("report input rows must be JSON objects")
    return payload


def _load_config(path: str) -> CampaignConfig:
    return load_campaign_config(path)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="ads", description="Google Ads automation helpers")
    subparsers = parser.add_subparsers(dest="command", required=True)

    validate = subparsers.add_parser("validate", help="Validate a campaign config")
    validate.add_argument("--config", required=True, help="Path to JSON or YAML campaign config")

    plan = subparsers.add_parser("plan", help="Build a dry-run plan from a campaign config")
    plan.add_argument("--config", required=True, help="Path to JSON or YAML campaign config")

    snapshot = subparsers.add_parser("snapshot", help="Fetch a live account snapshot")
    snapshot.add_argument(
        "--customer-id",
        help="Optional customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID from the environment.",
    )
    snapshot.add_argument(
        "--insecure-ssl",
        action="store_true",
        help="Disable TLS certificate verification for local development only.",
    )

    cleanup = subparsers.add_parser(
        "cleanup-plan",
        help="Build a grant-aware cleanup plan from the live account snapshot and config",
    )
    cleanup.add_argument("--config", required=True, help="Path to JSON or YAML cleanup config")
    cleanup.add_argument(
        "--insecure-ssl",
        action="store_true",
        help="Disable TLS certificate verification for local development only.",
    )

    cleanup_apply = subparsers.add_parser(
        "cleanup-apply",
        help="Apply a cleanup plan to the live account after explicit approval",
    )
    cleanup_apply.add_argument("--config", required=True, help="Path to JSON or YAML cleanup config")
    cleanup_apply.add_argument(
        "--confirm-live",
        action="store_true",
        help="Explicitly confirm live mutation after inspecting the cleanup plan",
    )
    cleanup_apply.add_argument(
        "--pause-legacy",
        action="store_true",
        help="Pause the legacy campaigns listed in the cleanup plan after replacement campaigns are created",
    )
    cleanup_apply.add_argument(
        "--insecure-ssl",
        action="store_true",
        help="Disable TLS certificate verification for local development only.",
    )

    apply_parser = subparsers.add_parser("apply", help="Prepare a live mutation request")
    apply_parser.add_argument("--config", required=True, help="Path to JSON or YAML campaign config")
    apply_parser.add_argument(
        "--confirm-live",
        action="store_true",
        help="Explicitly confirm live mutation after inspecting the dry-run plan",
    )

    report = subparsers.add_parser("report", help="Summarize report rows from JSON")
    report.add_argument("--input", required=True, help="Path to a JSON file containing report rows")
    report.add_argument(
        "--cpa-threshold",
        type=float,
        default=100.0,
        help="CPA threshold used to flag outliers",
    )

    return parser


def command_validate(config_path: str) -> int:
    config = _load_config(config_path)
    _dump_json(
        {
            "status": "ok",
            "campaign_name": config.campaign_name,
            "account_id": config.account_id,
            "dry_run": config.dry_run,
            "status_value": config.status,
            "geo_targets": config.geo_targets,
        }
    )
    return 0


def command_plan(config_path: str) -> int:
    config = _load_config(config_path)
    plan = build_campaign_creation_plan(config)
    _dump_json(plan_to_dict(plan))
    return 0


def command_snapshot(customer_id: str | None, insecure_ssl: bool) -> int:
    env = load_google_ads_environment()
    resolved_customer_id = customer_id or env.customer_id
    if not resolved_customer_id:
        raise ValidationError(
            "customer_id must be provided either via --customer-id or GOOGLE_ADS_CUSTOMER_ID"
        )

    snapshot = fetch_account_snapshot(
        resolved_customer_id,
        env,
        login_customer_id=env.login_customer_id,
        insecure_ssl=insecure_ssl,
    )
    _dump_json(summarize_account_snapshot(snapshot))
    return 0


def command_cleanup_plan(config_path: str, insecure_ssl: bool) -> int:
    config = load_cleanup_config(config_path)
    env = load_google_ads_environment()
    snapshot = fetch_account_snapshot(
        config.account_id,
        env,
        login_customer_id=env.login_customer_id,
        insecure_ssl=insecure_ssl,
    )
    plan = build_cleanup_plan(config, snapshot)
    _dump_json(
        {
            "snapshot_summary": summarize_account_snapshot(snapshot),
            "cleanup_plan": cleanup_plan_to_dict(plan),
        }
    )
    return 0


def command_apply(config_path: str, confirm_live: bool) -> int:
    config = _load_config(config_path)
    plan = build_campaign_creation_plan(config)
    require_live_mutation_approval(config, confirm_live)
    result = execute_campaign_config(config, confirm_live=confirm_live)
    _dump_json({"dry_run_plan": plan_to_dict(plan), "live_result": asdict(result)})
    return 0


def command_cleanup_apply(config_path: str, confirm_live: bool, pause_legacy: bool, insecure_ssl: bool) -> int:
    config = load_cleanup_config(config_path)
    env = load_google_ads_environment()
    snapshot = fetch_account_snapshot(
        config.account_id,
        env,
        login_customer_id=env.login_customer_id,
        insecure_ssl=insecure_ssl,
    )
    plan = build_cleanup_plan(config, snapshot)
    _dump_json({"snapshot_summary": summarize_account_snapshot(snapshot), "cleanup_plan": cleanup_plan_to_dict(plan)})
    result = execute_cleanup_plan(
        plan,
        confirm_live=confirm_live,
        pause_legacy=pause_legacy,
        insecure_ssl=insecure_ssl,
    )
    _dump_json(
        {
            "snapshot_summary": summarize_account_snapshot(snapshot),
            "cleanup_plan": cleanup_plan_to_dict(plan),
            "live_result": asdict(result),
        }
    )
    return 0


def command_report(input_path: str, cpa_threshold: float) -> int:
    rows = _load_rows(Path(input_path))
    _dump_json(summarize_report(rows, cpa_outlier_threshold=cpa_threshold))
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    try:
        if args.command == "validate":
            return command_validate(args.config)
        if args.command == "plan":
            return command_plan(args.config)
        if args.command == "snapshot":
            return command_snapshot(args.customer_id, args.insecure_ssl)
        if args.command == "cleanup-plan":
            return command_cleanup_plan(args.config, args.insecure_ssl)
        if args.command == "cleanup-apply":
            return command_cleanup_apply(args.config, args.confirm_live, args.pause_legacy, args.insecure_ssl)
        if args.command == "apply":
            return command_apply(args.config, args.confirm_live)
        if args.command == "report":
            return command_report(args.input, args.cpa_threshold)
    except (ValidationError, LiveMutationNotAllowed) as exc:
        parser.exit(status=2, message=f"error: {exc}\n")
    except NotImplementedError as exc:
        parser.exit(status=3, message=f"error: {exc}\n")

    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
