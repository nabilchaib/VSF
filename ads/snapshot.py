from __future__ import annotations

from collections.abc import Mapping
from dataclasses import replace
from typing import Any

from .client import GoogleAdsEnvironment, google_ads_search
from .models import AccountSnapshot, AssetGroupSnapshot, BudgetSnapshot, CampaignSnapshot, GeoTargetSnapshot
from .validators import ValidationError


CAMPAIGN_QUERY = """
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.advertising_channel_sub_type,
  campaign.bidding_strategy_type,
  campaign.start_date,
  campaign.end_date,
  campaign.campaign_budget,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign
WHERE campaign.status != 'REMOVED'
ORDER BY campaign.name
""".strip()

BUDGET_QUERY = """
SELECT
  campaign_budget.resource_name,
  campaign_budget.name,
  campaign_budget.amount_micros,
  campaign_budget.delivery_method,
  campaign_budget.status
FROM campaign_budget
WHERE campaign_budget.status != 'REMOVED'
ORDER BY campaign_budget.name
""".strip()

GEO_QUERY = """
SELECT
  campaign.id,
  campaign.name,
  campaign_criterion.type,
  campaign_criterion.location.geo_target_constant
FROM campaign_criterion
WHERE campaign_criterion.type = 'LOCATION'
  AND campaign.status != 'REMOVED'
ORDER BY campaign.name
""".strip()

ASSET_GROUP_QUERY = """
SELECT
  campaign.id,
  campaign.name,
  asset_group.id,
  asset_group.name,
  asset_group.status
FROM asset_group
WHERE campaign.status != 'REMOVED'
ORDER BY campaign.name, asset_group.name
""".strip()

GEO_TARGET_QUERY_TEMPLATE = """
SELECT
  geo_target_constant.resource_name,
  geo_target_constant.name,
  geo_target_constant.country_code,
  geo_target_constant.target_type
FROM geo_target_constant
WHERE geo_target_constant.resource_name IN ({resource_names})
""".strip()


def _as_int(value: Any) -> int:
    if value in (None, ""):
        return 0
    return int(value)


def _as_float(value: Any) -> float:
    if value in (None, ""):
        return 0.0
    return float(value)


def parse_campaign_rows(rows: list[Mapping[str, Any]]) -> list[CampaignSnapshot]:
    campaigns: list[CampaignSnapshot] = []
    for row in rows:
        campaign = row.get("campaign", {})
        metrics = row.get("metrics", {})
        campaigns.append(
            CampaignSnapshot(
                id=str(campaign.get("id") or ""),
                name=str(campaign.get("name") or ""),
                status=str(campaign.get("status") or ""),
                channel=str(campaign.get("advertisingChannelType") or ""),
                subtype=campaign.get("advertisingChannelSubType"),
                bidding_strategy=campaign.get("biddingStrategyType"),
                start_date=campaign.get("startDate"),
                end_date=campaign.get("endDate"),
                budget_resource_name=campaign.get("campaignBudget"),
                impressions=_as_int(metrics.get("impressions")),
                clicks=_as_int(metrics.get("clicks")),
                cost_micros=_as_int(metrics.get("costMicros")),
                conversions=_as_float(metrics.get("conversions")),
                conversions_value=_as_float(metrics.get("conversionsValue")),
            )
        )
    return campaigns


def parse_budget_rows(rows: list[Mapping[str, Any]]) -> list[BudgetSnapshot]:
    budgets: list[BudgetSnapshot] = []
    for row in rows:
        budget = row.get("campaignBudget", {})
        budgets.append(
            BudgetSnapshot(
                resource_name=str(budget.get("resourceName") or ""),
                name=str(budget.get("name") or ""),
                amount_micros=_as_int(budget.get("amountMicros")),
                delivery_method=budget.get("deliveryMethod"),
                status=budget.get("status"),
            )
        )
    return budgets


def parse_geo_rows(rows: list[Mapping[str, Any]]) -> list[GeoTargetSnapshot]:
    targets: list[GeoTargetSnapshot] = []
    for row in rows:
        criterion = row.get("campaignCriterion", {})
        location = criterion.get("location", {})
        resource_name = location.get("geoTargetConstant")
        if not resource_name:
            continue
        targets.append(
            GeoTargetSnapshot(
                resource_name=str(resource_name),
                name=str(location.get("name") or ""),
                country_code=location.get("countryCode"),
                target_type=location.get("targetType"),
            )
        )
    return targets


def parse_asset_group_rows(rows: list[Mapping[str, Any]]) -> list[AssetGroupSnapshot]:
    asset_groups: list[AssetGroupSnapshot] = []
    for row in rows:
        campaign = row.get("campaign", {})
        asset_group = row.get("assetGroup", {})
        asset_groups.append(
            AssetGroupSnapshot(
                campaign_id=str(campaign.get("id") or ""),
                campaign_name=str(campaign.get("name") or ""),
                asset_group_id=str(asset_group.get("id") or ""),
                asset_group_name=str(asset_group.get("name") or ""),
                status=asset_group.get("status"),
            )
        )
    return asset_groups


def _chunk(values: list[str], size: int) -> list[list[str]]:
    return [values[index : index + size] for index in range(0, len(values), size)]


def resolve_geo_targets(
    customer_id: str,
    env: GoogleAdsEnvironment,
    resource_names: list[str],
    *,
    login_customer_id: str | None = None,
    api_version: str | None = None,
    insecure_ssl: bool = False,
) -> dict[str, GeoTargetSnapshot]:
    resolved: dict[str, GeoTargetSnapshot] = {}
    for chunk in _chunk(resource_names, 10):
        quoted = ", ".join(f"'{resource_name}'" for resource_name in chunk)
        query = GEO_TARGET_QUERY_TEMPLATE.format(resource_names=quoted)
        rows = google_ads_search(
            customer_id,
            query,
            env,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
        )
        for row in rows:
            geo_target = row.get("geoTargetConstant", {})
            resource_name = geo_target.get("resourceName")
            if not resource_name:
                continue
            resolved[str(resource_name)] = GeoTargetSnapshot(
                resource_name=str(resource_name),
                name=str(geo_target.get("name") or ""),
                country_code=geo_target.get("countryCode"),
                target_type=geo_target.get("targetType"),
            )
    return resolved


def fetch_account_snapshot(
    customer_id: str,
    env: GoogleAdsEnvironment,
    *,
    login_customer_id: str | None = None,
    api_version: str | None = None,
    insecure_ssl: bool = False,
) -> AccountSnapshot:
    campaigns = parse_campaign_rows(
        google_ads_search(
            customer_id,
            CAMPAIGN_QUERY,
            env,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
        )
    )
    budgets = parse_budget_rows(
        google_ads_search(
            customer_id,
            BUDGET_QUERY,
            env,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
        )
    )
    geo_targets = parse_geo_rows(
        google_ads_search(
            customer_id,
            GEO_QUERY,
            env,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
        )
    )
    if geo_targets:
        resolved_geo_targets = resolve_geo_targets(
            customer_id,
            env,
            [target.resource_name for target in geo_targets],
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
        )
        geo_targets = [
            replace(
                target,
                name=resolved_geo_targets.get(target.resource_name, target).name,
                country_code=resolved_geo_targets.get(target.resource_name, target).country_code,
                target_type=resolved_geo_targets.get(target.resource_name, target).target_type,
            )
            for target in geo_targets
        ]
    asset_groups = parse_asset_group_rows(
        google_ads_search(
            customer_id,
            ASSET_GROUP_QUERY,
            env,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
        )
    )

    return AccountSnapshot(
        customer_id=customer_id,
        campaigns=campaigns,
        budgets=budgets,
        geo_targets=geo_targets,
        asset_groups=asset_groups,
    )


def summarize_account_snapshot(snapshot: AccountSnapshot) -> dict[str, Any]:
    enabled = [campaign for campaign in snapshot.campaigns if campaign.status == "ENABLED"]
    zero_traffic = [
        campaign
        for campaign in snapshot.campaigns
        if campaign.impressions == 0 and campaign.clicks == 0 and campaign.cost_micros == 0
    ]
    performance_max = [
        campaign for campaign in snapshot.campaigns if campaign.channel == "PERFORMANCE_MAX"
    ]
    budget_total_micros = sum(budget.amount_micros for budget in snapshot.budgets)

    return {
        "customer_id": snapshot.customer_id,
        "campaign_count": len(snapshot.campaigns),
        "enabled_campaign_count": len(enabled),
        "performance_max_campaign_count": len(performance_max),
        "zero_traffic_campaign_count": len(zero_traffic),
        "budget_count": len(snapshot.budgets),
        "budget_total_micros": budget_total_micros,
        "geo_target_count": len(snapshot.geo_targets),
        "asset_group_count": len(snapshot.asset_groups),
        "campaigns": [campaign.__dict__ for campaign in snapshot.campaigns],
        "budgets": [budget.__dict__ for budget in snapshot.budgets],
        "geo_targets": [target.__dict__ for target in snapshot.geo_targets],
        "asset_groups": [group.__dict__ for group in snapshot.asset_groups],
    }
