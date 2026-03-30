"""Google Ads automation subsystem."""

from .campaigns import build_campaign_creation_plan, plan_to_dict
from .cleanup import build_cleanup_plan, cleanup_plan_to_dict, load_cleanup_config, parse_cleanup_config
from .client import (
    build_google_ads_client,
    exchange_access_token,
    google_ads_search,
    google_ads_mutate,
    google_ads_request,
    load_google_ads_environment,
)
from .config import load_campaign_config, parse_campaign_config
from .models import (
    AccountSnapshot,
    AdConfig,
    AdGroupConfig,
    AssetGroupSnapshot,
    BudgetSnapshot,
    CampaignConfig,
    CampaignSnapshot,
    CleanupCampaignConfig,
    CleanupConfig,
    CleanupPlan,
    DryRunPlan,
    GeoTargetSnapshot,
    LiveMutationResult,
    MutationRecord,
    PlanAction,
)
from .mutations import (
    GoogleAdsLiveMutator,
    execute_campaign_config,
    execute_cleanup_plan,
)
from .snapshot import fetch_account_snapshot, summarize_account_snapshot
from .validators import ValidationError

__all__ = [
    "AccountSnapshot",
    "AdConfig",
    "AdGroupConfig",
    "AssetGroupSnapshot",
    "BudgetSnapshot",
    "CampaignConfig",
    "CampaignSnapshot",
    "CleanupCampaignConfig",
    "CleanupConfig",
    "CleanupPlan",
    "DryRunPlan",
    "GeoTargetSnapshot",
    "LiveMutationResult",
    "MutationRecord",
    "PlanAction",
    "ValidationError",
    "build_cleanup_plan",
    "build_campaign_creation_plan",
    "build_google_ads_client",
    "execute_campaign_config",
    "execute_cleanup_plan",
    "GoogleAdsLiveMutator",
    "cleanup_plan_to_dict",
    "exchange_access_token",
    "fetch_account_snapshot",
    "google_ads_search",
    "google_ads_mutate",
    "google_ads_request",
    "load_cleanup_config",
    "load_google_ads_environment",
    "load_campaign_config",
    "parse_campaign_config",
    "parse_cleanup_config",
    "plan_to_dict",
    "summarize_account_snapshot",
]
