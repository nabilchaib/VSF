from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Mapping

from .models import AdConfig, AdGroupConfig, CampaignConfig
from .validators import (
    ValidationError,
    ensure_string_list,
    normalize_account_id,
    normalize_campaign_name,
    normalize_geo_targets,
    normalize_language_code,
    validate_budget_daily,
    validate_date_range,
)


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


def load_campaign_config(path: str | Path) -> CampaignConfig:
    config_path = Path(path)
    if not config_path.exists():
        raise ValidationError(f"config file does not exist: {config_path}")

    suffix = config_path.suffix.lower()
    if suffix == ".json":
        raw = _load_json(config_path)
    elif suffix in {".yaml", ".yml"}:
        raw = _load_yaml(config_path)
    else:
        raise ValidationError("config file must be JSON or YAML")

    return parse_campaign_config(raw)


def _parse_ad_config(raw: Mapping[str, Any], source: str) -> AdConfig:
    headlines = ensure_string_list(_require_field(raw, "headlines", source), f"{source}.headlines")
    descriptions = ensure_string_list(
        _require_field(raw, "descriptions", source), f"{source}.descriptions"
    )
    final_url = _require_field(raw, "final_url", source)
    if not isinstance(final_url, str) or not final_url.strip():
        raise ValidationError(f"{source}.final_url must be a non-empty string")

    path1 = raw.get("path1")
    path2 = raw.get("path2")
    if path1 is not None and (not isinstance(path1, str) or not path1.strip()):
        raise ValidationError(f"{source}.path1 must be a non-empty string when provided")
    if path2 is not None and (not isinstance(path2, str) or not path2.strip()):
        raise ValidationError(f"{source}.path2 must be a non-empty string when provided")

    return AdConfig(
        headlines=headlines,
        descriptions=descriptions,
        final_url=final_url.strip(),
        path1=path1.strip() if isinstance(path1, str) else None,
        path2=path2.strip() if isinstance(path2, str) else None,
    )


def _parse_ad_group(raw: Mapping[str, Any], index: int) -> AdGroupConfig:
    source = f"ad_groups[{index}]"
    name = _require_field(raw, "name", source)
    if not isinstance(name, str) or not name.strip():
        raise ValidationError(f"{source}.name must be a non-empty string")

    keywords_raw = raw.get("keywords", [])
    ads_raw = raw.get("ads", [])
    if not isinstance(keywords_raw, list):
        raise ValidationError(f"{source}.keywords must be a list")
    if not isinstance(ads_raw, list):
        raise ValidationError(f"{source}.ads must be a list")

    keywords = ensure_string_list(keywords_raw, f"{source}.keywords")
    ads = [_parse_ad_config(_require_mapping(ad, f"{source}.ads[{ad_index}]"), f"{source}.ads[{ad_index}]")
        for ad_index, ad in enumerate(ads_raw)]

    return AdGroupConfig(name=name.strip(), keywords=keywords, ads=ads)


def parse_campaign_config(raw: Mapping[str, Any]) -> CampaignConfig:
    source = "campaign config"
    data = _require_mapping(raw, source)

    account_id = normalize_account_id(str(_require_field(data, "account_id", source)))
    campaign_name = normalize_campaign_name(str(_require_field(data, "campaign_name", source)))
    channel = str(_require_field(data, "channel", source)).strip().upper()
    country = str(_require_field(data, "country", source)).strip().upper()
    language = normalize_language_code(str(_require_field(data, "language", source)))
    goal = str(_require_field(data, "goal", source)).strip().upper()
    budget_daily = validate_budget_daily(_require_field(data, "budget_daily", source))
    bidding_strategy = str(_require_field(data, "bidding_strategy", source)).strip().upper()
    start_date, end_date = validate_date_range(
        str(_require_field(data, "start_date", source)),
        str(_require_field(data, "end_date", source)),
    )

    geo_targets_raw = _require_field(data, "geo_targets", source)
    if not isinstance(geo_targets_raw, list):
        raise ValidationError("geo_targets must be a list")
    geo_targets = normalize_geo_targets(country, ensure_string_list(geo_targets_raw, "geo_targets"))

    negative_keywords_raw = data.get("negative_keywords", [])
    if not isinstance(negative_keywords_raw, list):
        raise ValidationError("negative_keywords must be a list")
    negative_keywords = ensure_string_list(negative_keywords_raw, "negative_keywords")

    ad_groups_raw = _require_field(data, "ad_groups", source)
    if not isinstance(ad_groups_raw, list):
        raise ValidationError("ad_groups must be a list")
    ad_groups = [
        _parse_ad_group(_require_mapping(group, f"ad_groups[{index}]"), index)
        for index, group in enumerate(ad_groups_raw)
    ]

    labels_raw = _require_field(data, "labels", source)
    if not isinstance(labels_raw, list):
        raise ValidationError("labels must be a list")
    labels = ensure_string_list(labels_raw, "labels")

    dry_run_value = _require_field(data, "dry_run", source)
    if not isinstance(dry_run_value, bool):
        raise ValidationError("dry_run must be a boolean")

    status = str(data.get("status", "PAUSED")).strip().upper()
    if status not in {"PAUSED", "ENABLED"}:
        raise ValidationError("status must be PAUSED or ENABLED")

    return CampaignConfig(
        account_id=account_id,
        campaign_name=campaign_name,
        channel=channel,
        country=country,
        language=language,
        goal=goal,
        budget_daily=budget_daily,
        bidding_strategy=bidding_strategy,
        start_date=start_date,
        end_date=end_date,
        geo_targets=geo_targets,
        negative_keywords=negative_keywords,
        ad_groups=ad_groups,
        labels=labels,
        dry_run=dry_run_value,
        status=status,
    )
