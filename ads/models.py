from __future__ import annotations

from dataclasses import dataclass, field
from datetime import date
from typing import Any


@dataclass(frozen=True)
class AdConfig:
    headlines: list[str]
    descriptions: list[str]
    final_url: str
    path1: str | None = None
    path2: str | None = None


@dataclass(frozen=True)
class AdGroupConfig:
    name: str
    keywords: list[str] = field(default_factory=list)
    ads: list[AdConfig] = field(default_factory=list)


@dataclass(frozen=True)
class CampaignConfig:
    account_id: str
    campaign_name: str
    channel: str
    country: str
    language: str
    goal: str
    budget_daily: float
    bidding_strategy: str
    start_date: date
    end_date: date
    geo_targets: list[str]
    negative_keywords: list[str] = field(default_factory=list)
    ad_groups: list[AdGroupConfig] = field(default_factory=list)
    labels: list[str] = field(default_factory=list)
    dry_run: bool = True
    status: str = "PAUSED"


@dataclass(frozen=True)
class CampaignDraftResult:
    account_id: str
    base_campaign: str
    draft_name: str
    resource_name: str
    request: dict[str, Any] = field(default_factory=dict)
    response: dict[str, Any] = field(default_factory=dict)
    warnings: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class PlanAction:
    action: str
    resource: str
    summary: str
    payload: dict[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class DryRunPlan:
    campaign_name: str
    actions: list[PlanAction]
    warnings: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class CampaignSnapshot:
    id: str
    name: str
    status: str
    channel: str
    subtype: str | None = None
    bidding_strategy: str | None = None
    start_date: str | None = None
    end_date: str | None = None
    budget_resource_name: str | None = None
    impressions: int = 0
    clicks: int = 0
    cost_micros: int = 0
    conversions: float = 0.0
    conversions_value: float = 0.0


@dataclass(frozen=True)
class BudgetSnapshot:
    resource_name: str
    name: str
    amount_micros: int
    delivery_method: str | None = None
    status: str | None = None


@dataclass(frozen=True)
class GeoTargetSnapshot:
    resource_name: str
    name: str
    country_code: str | None = None
    target_type: str | None = None


@dataclass(frozen=True)
class AssetGroupSnapshot:
    campaign_id: str
    campaign_name: str
    asset_group_id: str
    asset_group_name: str
    status: str | None = None


@dataclass(frozen=True)
class AccountSnapshot:
    customer_id: str
    campaigns: list[CampaignSnapshot] = field(default_factory=list)
    budgets: list[BudgetSnapshot] = field(default_factory=list)
    geo_targets: list[GeoTargetSnapshot] = field(default_factory=list)
    asset_groups: list[AssetGroupSnapshot] = field(default_factory=list)


@dataclass(frozen=True)
class CleanupCampaignConfig:
    campaign_name: str
    channel: str
    country: str
    language: str
    goal: str
    launch_budget_daily: float
    target_budget_daily: float
    bidding_strategy: str
    start_date: date
    end_date: date
    geo_targets: list[str] = field(default_factory=list)
    landing_pages: list[str] = field(default_factory=list)
    negative_keywords: list[str] = field(default_factory=list)
    ad_groups: list[AdGroupConfig] = field(default_factory=list)
    labels: list[str] = field(default_factory=list)
    status: str = "PAUSED"
    notes: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class CleanupConfig:
    account_id: str
    budget_cap_daily: float = 329.0
    budget_cap_monthly: float = 10000.0
    include_us_campaign: bool = False
    pause_existing_campaigns: list[str] = field(default_factory=list)
    conversion_checks: list[str] = field(default_factory=list)
    excluded_geo_targets: list[str] = field(default_factory=list)
    site_base_url: str = "https://vetiversansfrontieres.org"
    donate_url: str = ""
    campaigns: list[CleanupCampaignConfig] = field(default_factory=list)


@dataclass(frozen=True)
class CleanupPlan:
    account_id: str
    snapshot: AccountSnapshot
    campaigns: list[CleanupCampaignConfig]
    pause_actions: list[PlanAction]
    warnings: list[str] = field(default_factory=list)
    validation_checks: list[str] = field(default_factory=list)
    budget_summary: dict[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class MutationRecord:
    service_path: str
    summary: str
    request: dict[str, Any]
    response: dict[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class LiveMutationResult:
    account_id: str
    records: list[MutationRecord] = field(default_factory=list)
    skipped_campaigns: list[str] = field(default_factory=list)
    paused_campaigns: list[str] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)
