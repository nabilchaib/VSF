from __future__ import annotations

import json
from dataclasses import asdict
from pathlib import Path
from typing import Any, Mapping

from .models import (
    AdConfig,
    AdGroupConfig,
    AccountSnapshot,
    CleanupCampaignConfig,
    CleanupConfig,
    CleanupPlan,
    PlanAction,
)
from .snapshot import summarize_account_snapshot
from .validators import (
    ValidationError,
    ensure_string_list,
    normalize_account_id,
    normalize_campaign_name,
    normalize_geo_targets,
    normalize_positive_search_keywords,
    normalize_url_list,
    parse_iso_date,
    validate_budget_allocation,
    validate_budget_daily,
)


DEFAULT_BUDGET_CAP_DAILY = 329.0
DEFAULT_BUDGET_CAP_MONTHLY = 10000.0
DEFAULT_SITE_BASE_URL = "https://vetiversansfrontieres.org"
DEFAULT_DONATE_URL = "https://www.zeffy.com/en-CA/donation-form/cbac2a62-15cb-4f94-866c-c860b1cfa606"
DEFAULT_CONVERSION_CHECKS = [
    "donations",
    "newsletter",
    "contact",
    "volunteer",
]
ALLOWED_GOALS = {"DONATE", "CONTACT", "AWARENESS", "VOLUNTEER"}
ALLOWED_BIDDING_STRATEGIES = {"MAXIMIZE_CONVERSIONS", "TARGET_CPA", "TARGET_ROAS"}
ALLOWED_CHANNELS = {"SEARCH"}


def _require_mapping(raw: Any, source: str) -> Mapping[str, Any]:
    if not isinstance(raw, Mapping):
        raise ValidationError(f"{source} must contain a JSON object")
    return raw


def _require_field(raw: Mapping[str, Any], field_name: str, source: str) -> Any:
    if field_name not in raw:
        raise ValidationError(f"{source} is missing required field: {field_name}")
    return raw[field_name]


def _load_json(path: Path) -> Mapping[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return _require_mapping(json.load(handle), str(path))


def _load_yaml(path: Path) -> Mapping[str, Any]:
    try:
        import yaml  # type: ignore
    except ImportError as exc:
        raise ValidationError(
            f"{path} is YAML, but PyYAML is not installed. Use JSON or install PyYAML."
        ) from exc

    with path.open("r", encoding="utf-8") as handle:
        return _require_mapping(yaml.safe_load(handle), str(path))


def _normalize_url(value: str, field_name: str) -> str:
    normalized = value.strip().rstrip("/")
    if not normalized.startswith("http://") and not normalized.startswith("https://"):
        raise ValidationError(f"{field_name} must be an absolute http or https URL")
    return normalized


def _parse_ad_config(raw: Mapping[str, Any], source: str) -> AdConfig:
    headlines = ensure_string_list(_require_field(raw, "headlines", source), f"{source}.headlines")
    descriptions = ensure_string_list(
        _require_field(raw, "descriptions", source), f"{source}.descriptions"
    )
    final_url = _normalize_url(str(_require_field(raw, "final_url", source)), f"{source}.final_url")
    path1 = raw.get("path1")
    path2 = raw.get("path2")
    if path1 is not None and (not isinstance(path1, str) or not path1.strip()):
        raise ValidationError(f"{source}.path1 must be a non-empty string when provided")
    if path2 is not None and (not isinstance(path2, str) or not path2.strip()):
        raise ValidationError(f"{source}.path2 must be a non-empty string when provided")

    return AdConfig(
        headlines=headlines,
        descriptions=descriptions,
        final_url=final_url,
        path1=path1.strip() if isinstance(path1, str) else None,
        path2=path2.strip() if isinstance(path2, str) else None,
    )


def _parse_ad_group(raw: Mapping[str, Any], index: int) -> AdGroupConfig:
    source = f"campaigns[{index}].ad_groups[{index}]"
    name = _require_field(raw, "name", source)
    if not isinstance(name, str) or not name.strip():
        raise ValidationError(f"{source}.name must be a non-empty string")

    keywords_raw = _require_field(raw, "keywords", source)
    ads_raw = _require_field(raw, "ads", source)
    if not isinstance(keywords_raw, list):
        raise ValidationError(f"{source}.keywords must be a list")
    if not isinstance(ads_raw, list):
        raise ValidationError(f"{source}.ads must be a list")

    keywords = normalize_positive_search_keywords(keywords_raw)
    ads = [
        _parse_ad_config(_require_mapping(ad, f"{source}.ads[{ad_index}]"), f"{source}.ads[{ad_index}]")
        for ad_index, ad in enumerate(ads_raw)
    ]

    return AdGroupConfig(name=name.strip(), keywords=keywords, ads=ads)


def _parse_cleanup_campaign(raw: Mapping[str, Any], index: int) -> CleanupCampaignConfig:
    source = f"campaigns[{index}]"
    campaign_name = normalize_campaign_name(str(_require_field(raw, "campaign_name", source)))
    channel = str(_require_field(raw, "channel", source)).strip().upper()
    country = str(_require_field(raw, "country", source)).strip().upper()
    language = str(_require_field(raw, "language", source)).strip().upper()
    goal = str(_require_field(raw, "goal", source)).strip().upper()
    if channel not in ALLOWED_CHANNELS:
        raise ValidationError(f"{source}.channel must be SEARCH")
    if goal not in ALLOWED_GOALS:
        raise ValidationError(f"{source}.goal must be one of: {', '.join(sorted(ALLOWED_GOALS))}")
    if language not in {"EN", "FR"}:
        raise ValidationError(f"{source}.language must be EN or FR")
    if country not in {"CA", "US"}:
        raise ValidationError(f"{source}.country must be CA or US")

    launch_budget_daily = validate_budget_daily(_require_field(raw, "launch_budget_daily", source))
    target_budget_daily = validate_budget_daily(_require_field(raw, "target_budget_daily", source))
    bidding_strategy = str(_require_field(raw, "bidding_strategy", source)).strip().upper()
    if bidding_strategy not in ALLOWED_BIDDING_STRATEGIES:
        raise ValidationError(
            f"{source}.bidding_strategy must be one of: {', '.join(sorted(ALLOWED_BIDDING_STRATEGIES))}"
        )

    start_date, end_date = (
        parse_iso_date(str(_require_field(raw, "start_date", source))),
        parse_iso_date(str(_require_field(raw, "end_date", source))),
    )
    if end_date < start_date:
        raise ValidationError(f"{source}.end_date must be on or after start_date")

    geo_targets_raw = _require_field(raw, "geo_targets", source)
    if not isinstance(geo_targets_raw, list):
        raise ValidationError(f"{source}.geo_targets must be a list")
    geo_targets = normalize_geo_targets(country, ensure_string_list(geo_targets_raw, f"{source}.geo_targets"))

    landing_pages_raw = _require_field(raw, "landing_pages", source)
    if not isinstance(landing_pages_raw, list):
        raise ValidationError(f"{source}.landing_pages must be a list")
    landing_pages = normalize_url_list(landing_pages_raw, f"{source}.landing_pages")

    negative_keywords_raw = raw.get("negative_keywords", [])
    if not isinstance(negative_keywords_raw, list):
        raise ValidationError(f"{source}.negative_keywords must be a list")
    negative_keywords = ensure_string_list(negative_keywords_raw, f"{source}.negative_keywords")

    ad_groups_raw = _require_field(raw, "ad_groups", source)
    if not isinstance(ad_groups_raw, list):
        raise ValidationError(f"{source}.ad_groups must be a list")
    ad_groups = [
        _parse_ad_group(_require_mapping(group, f"{source}.ad_groups[{ad_index}]"), ad_index)
        for ad_index, group in enumerate(ad_groups_raw)
    ]

    labels_raw = raw.get("labels", [])
    if not isinstance(labels_raw, list):
        raise ValidationError(f"{source}.labels must be a list")
    labels = ensure_string_list(labels_raw, f"{source}.labels")

    status = str(raw.get("status", "PAUSED")).strip().upper()
    if status != "PAUSED":
        raise ValidationError(f"{source}.status must be PAUSED for launch campaigns")

    notes_raw = raw.get("notes", [])
    if not isinstance(notes_raw, list):
        raise ValidationError(f"{source}.notes must be a list")
    notes = ensure_string_list(notes_raw, f"{source}.notes")

    return CleanupCampaignConfig(
        campaign_name=campaign_name,
        channel=channel,
        country=country,
        language=language,
        goal=goal,
        launch_budget_daily=launch_budget_daily,
        target_budget_daily=target_budget_daily,
        bidding_strategy=bidding_strategy,
        start_date=start_date,
        end_date=end_date,
        geo_targets=geo_targets,
        landing_pages=landing_pages,
        negative_keywords=negative_keywords,
        ad_groups=ad_groups,
        labels=labels,
        status=status,
        notes=notes,
    )


def load_cleanup_config(path: str | Path) -> CleanupConfig:
    config_path = Path(path)
    if not config_path.exists():
        raise ValidationError(f"cleanup config file does not exist: {config_path}")

    suffix = config_path.suffix.lower()
    if suffix == ".json":
        raw = _load_json(config_path)
    elif suffix in {".yaml", ".yml"}:
        raw = _load_yaml(config_path)
    else:
        raise ValidationError("cleanup config file must be JSON or YAML")

    return parse_cleanup_config(raw)


def parse_cleanup_config(raw: Mapping[str, Any]) -> CleanupConfig:
    source = "cleanup config"
    data = _require_mapping(raw, source)

    account_id = normalize_account_id(str(_require_field(data, "account_id", source)))
    budget_cap_daily = validate_budget_daily(data.get("budget_cap_daily", DEFAULT_BUDGET_CAP_DAILY))
    budget_cap_monthly = validate_budget_daily(data.get("budget_cap_monthly", DEFAULT_BUDGET_CAP_MONTHLY))
    include_us_campaign = bool(data.get("include_us_campaign", False))

    pause_existing_campaigns_raw = data.get("pause_existing_campaigns", [])
    if not isinstance(pause_existing_campaigns_raw, list):
        raise ValidationError("pause_existing_campaigns must be a list")
    pause_existing_campaigns = ensure_string_list(pause_existing_campaigns_raw, "pause_existing_campaigns")

    conversion_checks_raw = data.get("conversion_checks", DEFAULT_CONVERSION_CHECKS)
    if not isinstance(conversion_checks_raw, list):
        raise ValidationError("conversion_checks must be a list")
    conversion_checks = ensure_string_list(conversion_checks_raw, "conversion_checks")

    excluded_geo_targets_raw = data.get("excluded_geo_targets", [])
    if not isinstance(excluded_geo_targets_raw, list):
        raise ValidationError("excluded_geo_targets must be a list")
    excluded_geo_targets = ensure_string_list(excluded_geo_targets_raw, "excluded_geo_targets")

    site_base_url = _normalize_url(
        str(data.get("site_base_url", DEFAULT_SITE_BASE_URL)),
        "site_base_url",
    )
    donate_url = _normalize_url(str(data.get("donate_url", DEFAULT_DONATE_URL)), "donate_url")

    campaigns_raw = _require_field(data, "campaigns", source)
    if not isinstance(campaigns_raw, list):
        raise ValidationError("campaigns must be a list")
    campaigns = [
        _parse_cleanup_campaign(_require_mapping(campaign, f"campaigns[{index}]"), index)
        for index, campaign in enumerate(campaigns_raw)
    ]

    if len(campaigns) < 2 or len(campaigns) > 4:
        raise ValidationError("cleanup config must define between 2 and 4 campaigns")

    names = [campaign.campaign_name for campaign in campaigns]
    if len(set(names)) != len(names):
        raise ValidationError("cleanup campaign names must be unique")

    if any(campaign.country == "US" for campaign in campaigns) and not include_us_campaign:
        raise ValidationError("US campaigns require include_us_campaign=true")

    launch_total = sum(campaign.launch_budget_daily for campaign in campaigns)
    target_total = sum(campaign.target_budget_daily for campaign in campaigns)
    validate_budget_allocation(
        launch_total=launch_total,
        target_total=target_total,
        cap_daily=budget_cap_daily,
    )

    if target_total < budget_cap_daily * 0.9:
        # Preserve room for caution, but make the warning visible in the plan output.
        pass

    return CleanupConfig(
        account_id=account_id,
        budget_cap_daily=budget_cap_daily,
        budget_cap_monthly=budget_cap_monthly,
        include_us_campaign=include_us_campaign,
        pause_existing_campaigns=pause_existing_campaigns,
        conversion_checks=conversion_checks,
        excluded_geo_targets=excluded_geo_targets,
        site_base_url=site_base_url,
        donate_url=donate_url,
        campaigns=campaigns,
    )


def build_cleanup_plan(config: CleanupConfig, snapshot: AccountSnapshot) -> CleanupPlan:
    snapshot_summary = summarize_account_snapshot(snapshot)
    launch_total = sum(campaign.launch_budget_daily for campaign in config.campaigns)
    target_total = sum(campaign.target_budget_daily for campaign in config.campaigns)
    existing_budget_total = sum(budget.amount_micros for budget in snapshot.budgets) / 1_000_000.0

    pause_actions = [
        PlanAction(
            action="pause_campaign",
            resource="campaign",
            summary=f"Pause legacy campaign {campaign_name} after replacement validation",
            payload={"campaign_name": campaign_name, "phase": "post_validation"},
        )
        for campaign_name in config.pause_existing_campaigns
    ]

    warnings: list[str] = []
    if snapshot_summary["zero_traffic_campaign_count"] == snapshot_summary["campaign_count"]:
        warnings.append("All current campaigns have zero traffic over the last 30 days.")
    if snapshot_summary["performance_max_campaign_count"] > 0:
        warnings.append("Current campaigns are Performance Max; the cleanup plan replaces them with Search-first campaigns.")
    if any(target == "10014" for target in config.excluded_geo_targets):
        warnings.append("The US ZIP 10014 is excluded from the new search structure unless later confirmed as a real service area.")
    if target_total < config.budget_cap_daily * 0.9:
        warnings.append("Planned target budgets do not yet use most of the Ad Grants daily cap.")
    if existing_budget_total and existing_budget_total < launch_total:
        warnings.append("Legacy budgets are smaller than the launch budgets in the cleanup plan; pause them only after the new campaigns are validated.")

    missing_pause_targets = [
        campaign_name
        for campaign_name in config.pause_existing_campaigns
        if campaign_name not in {campaign.name for campaign in snapshot.campaigns}
    ]
    if missing_pause_targets:
        warnings.append(
            "These configured legacy campaigns were not found in the live snapshot: "
            + ", ".join(missing_pause_targets)
        )

    validation_checks = [
        "Confirm donation, contact, newsletter, and volunteer conversion tracking before scaling beyond launch budgets.",
        "Confirm all positive keywords are phrase-match, multi-word, and mission-specific.",
        "Confirm landing pages resolve and map directly to campaign intent.",
        "Confirm presence-based location targeting only includes real service areas.",
        "Review search terms within 24 to 48 hours and add negatives immediately for irrelevant traffic.",
        "Keep the legacy Performance Max campaigns paused only after the replacement Search structure is validated.",
    ]

    budget_summary = {
        "budget_cap_daily": config.budget_cap_daily,
        "budget_cap_monthly": config.budget_cap_monthly,
        "launch_budget_total_daily": launch_total,
        "target_budget_total_daily": target_total,
        "existing_budget_total_daily": existing_budget_total,
        "grant_utilization_target_pct": round((target_total / config.budget_cap_daily) * 100.0, 2)
        if config.budget_cap_daily
        else 0.0,
        "launch_utilization_pct": round((launch_total / config.budget_cap_daily) * 100.0, 2)
        if config.budget_cap_daily
        else 0.0,
    }

    return CleanupPlan(
        account_id=config.account_id,
        snapshot=snapshot,
        campaigns=config.campaigns,
        pause_actions=pause_actions,
        warnings=warnings,
        validation_checks=validation_checks,
        budget_summary=budget_summary,
    )


def cleanup_plan_to_dict(plan: CleanupPlan) -> dict[str, Any]:
    return asdict(plan)
