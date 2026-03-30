from __future__ import annotations

from typing import Any, Callable, Mapping

from .approvals import require_live_mutation_gate
from .client import (
    GoogleAdsEnvironment,
    exchange_access_token,
    google_ads_mutate,
    google_ads_search,
    load_google_ads_environment,
)
from .models import (
    CampaignConfig,
    CleanupCampaignConfig,
    CleanupPlan,
    LiveMutationResult,
    MutationRecord,
)
from .validators import ValidationError, normalize_geo_target


SUPPORTED_LIVE_BIDDING_STRATEGIES = {"MAXIMIZE_CONVERSIONS"}


def _gaql_quote(value: str) -> str:
    return "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"


def _gaql_in(values: list[str]) -> str:
    return ", ".join(_gaql_quote(value) for value in values)


def _resource_name(response: Mapping[str, Any], service_path: str) -> str:
    results = response.get("results", [])
    if not isinstance(results, list) or not results:
        raise RuntimeError(f"{service_path} did not return any results")
    first = results[0]
    if not isinstance(first, Mapping):
        raise RuntimeError(f"{service_path} response was malformed")
    resource_name = first.get("resourceName")
    if not isinstance(resource_name, str) or not resource_name:
        raise RuntimeError(f"{service_path} did not return a resourceName")
    return resource_name


def _record(
    *,
    service_path: str,
    summary: str,
    request: dict[str, Any],
    response: dict[str, Any],
) -> MutationRecord:
    return MutationRecord(
        service_path=service_path,
        summary=summary,
        request=request,
        response=response,
    )


def _rsa_text_assets(values: list[str]) -> list[dict[str, str]]:
    return [{"text": value} for value in values]


def _normalize_rsa_keyword(keyword: str) -> str:
    cleaned = keyword.strip()
    if cleaned.startswith('"') and cleaned.endswith('"'):
        return cleaned[1:-1]
    if cleaned.startswith("[") and cleaned.endswith("]"):
        return cleaned[1:-1]
    return cleaned


def _existing_campaign_names(
    customer_id: str,
    campaign_names: list[str],
    env: GoogleAdsEnvironment,
    *,
    login_customer_id: str | None,
    api_version: str | None,
    insecure_ssl: bool,
    search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
) -> dict[str, str]:
    if not campaign_names:
        return {}
    query = """
SELECT campaign.resource_name, campaign.name
FROM campaign
WHERE campaign.name IN ({names})
  AND campaign.status != 'REMOVED'
""".strip().format(names=_gaql_in(campaign_names))
    rows = search_fn(
        customer_id,
        query,
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
    )
    existing: dict[str, str] = {}
    for row in rows:
        campaign = row.get("campaign", {})
        name = campaign.get("name")
        resource_name = campaign.get("resourceName")
        if isinstance(name, str) and isinstance(resource_name, str):
            existing[name] = resource_name
    return existing


def _geo_target_query(country: str, targets: list[str]) -> str:
    return """
SELECT geo_target_constant.resource_name, geo_target_constant.name
FROM geo_target_constant
WHERE geo_target_constant.country_code = '{country}'
  AND geo_target_constant.name IN ({names})
""".strip().format(country=country, names=_gaql_in(targets))


def _resolve_geo_targets(
    customer_id: str,
    country: str,
    targets: list[str],
    env: GoogleAdsEnvironment,
    *,
    login_customer_id: str | None,
    api_version: str | None,
    insecure_ssl: bool,
    search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
) -> dict[str, str]:
    normalized_targets = [normalize_geo_target(country, target) for target in targets]
    rows = search_fn(
        customer_id,
        _geo_target_query(country, normalized_targets),
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
    )
    resolved: dict[str, str] = {}
    for row in rows:
        geo_target = row.get("geoTargetConstant", {})
        name = geo_target.get("name")
        resource_name = geo_target.get("resourceName")
        if isinstance(name, str) and isinstance(resource_name, str):
            resolved[name] = resource_name
    missing = [target for target in normalized_targets if target not in resolved]
    if missing:
        raise ValidationError(
            "could not resolve geo target constants for: " + ", ".join(sorted(missing))
        )
    return resolved


def _create_budget_operation(campaign_name: str, budget_daily: float) -> dict[str, Any]:
    return {
        "create": {
            "name": f"{campaign_name} budget",
            "amountMicros": int(round(budget_daily * 1_000_000)),
            "deliveryMethod": "STANDARD",
            "explicitlyShared": False,
        }
    }


def _create_campaign_operation(
    config: CampaignConfig | CleanupCampaignConfig,
    budget_resource_name: str,
) -> dict[str, Any]:
    body: dict[str, Any] = {
        "create": {
            "name": config.campaign_name,
            "advertisingChannelType": config.channel,
            "status": "PAUSED",
            "campaignBudget": budget_resource_name,
            "startDate": config.start_date.strftime("%Y%m%d"),
            "endDate": config.end_date.strftime("%Y%m%d"),
            "networkSettings": {
                "targetGoogleSearch": True,
                "targetSearchNetwork": False,
                "targetContentNetwork": False,
                "targetPartnerSearchNetwork": False,
            },
            "geoTargetTypeSetting": {
                "positiveGeoTargetType": "PRESENCE",
                "negativeGeoTargetType": "PRESENCE",
            },
            "maximizeConversions": {},
        }
    }
    return body


def _create_campaign_criterion_operation(
    campaign_resource_name: str,
    geo_resource_name: str,
) -> dict[str, Any]:
    return {
        "create": {
            "campaign": campaign_resource_name,
            "status": "ENABLED",
            "location": {"geoTargetConstant": geo_resource_name},
        }
    }


def _create_ad_group_operation(
    campaign_resource_name: str,
    ad_group_name: str,
) -> dict[str, Any]:
    return {
        "create": {
            "campaign": campaign_resource_name,
            "name": ad_group_name,
            "status": "PAUSED",
            "type": "SEARCH_STANDARD",
        }
    }


def _create_keyword_operation(
    ad_group_resource_name: str,
    keyword: str,
) -> dict[str, Any]:
    return {
        "create": {
            "adGroup": ad_group_resource_name,
            "status": "ENABLED",
            "keyword": {
                "text": _normalize_rsa_keyword(keyword),
                "matchType": "PHRASE",
            },
        }
    }


def _create_negative_keyword_operation(
    campaign_resource_name: str,
    keyword: str,
) -> dict[str, Any]:
    return {
        "create": {
            "campaign": campaign_resource_name,
            "status": "ENABLED",
            "negative": True,
            "keyword": {
                "text": keyword.strip(),
                "matchType": "PHRASE",
            },
        }
    }


def _create_ad_operation(
    ad_group_resource_name: str,
    ad: Any,
) -> dict[str, Any]:
    return {
        "create": {
            "adGroup": ad_group_resource_name,
            "status": "PAUSED",
            "ad": {
                "finalUrls": [ad.final_url],
                "responsiveSearchAd": {
                    "headlines": _rsa_text_assets(list(ad.headlines)),
                    "descriptions": _rsa_text_assets(list(ad.descriptions)),
                    **({"path1": ad.path1} if ad.path1 else {}),
                    **({"path2": ad.path2} if ad.path2 else {}),
                },
            },
        }
    }


def _pause_campaign_operation(resource_name: str) -> dict[str, Any]:
    return {
        "update": {
            "resourceName": resource_name,
            "status": "PAUSED",
        },
        "updateMask": "status",
    }


def _validate_responsive_search_ad(ad: Any, source: str) -> None:
    if len(ad.headlines) < 3:
        raise ValidationError(f"{source}.headlines must contain at least 3 items for a responsive search ad")
    if len(ad.descriptions) < 2:
        raise ValidationError(
            f"{source}.descriptions must contain at least 2 items for a responsive search ad"
        )


def _validate_live_campaign_config(config: CampaignConfig) -> None:
    if config.dry_run:
        raise ValidationError("live mutation requires dry_run=false in the campaign config")
    if config.status != "PAUSED":
        raise ValidationError("live mutation campaigns must start PAUSED unless explicitly approved")
    if config.channel != "SEARCH":
        raise ValidationError("live mutation layer currently supports SEARCH campaigns only")
    if config.bidding_strategy not in SUPPORTED_LIVE_BIDDING_STRATEGIES:
        raise ValidationError(
            "live mutation layer currently supports MAXIMIZE_CONVERSIONS campaigns only"
        )
    for index, group in enumerate(config.ad_groups):
        if not group.keywords:
            raise ValidationError(f"ad_groups[{index}].keywords must not be empty")
        if not group.ads:
            raise ValidationError(f"ad_groups[{index}].ads must not be empty")
        for ad_index, ad in enumerate(group.ads):
            _validate_responsive_search_ad(ad, f"ad_groups[{index}].ads[{ad_index}]")


def _execute_mutation(
    customer_id: str,
    service_path: str,
    operation: dict[str, Any],
    env: GoogleAdsEnvironment,
    *,
    access_token: str,
    login_customer_id: str | None,
    api_version: str | None,
    insecure_ssl: bool,
    request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
) -> dict[str, Any]:
    return request_fn(
        customer_id,
        service_path,
        [operation],
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        access_token=access_token,
    )


def _apply_campaign_config(
    config: CampaignConfig,
    env: GoogleAdsEnvironment,
    *,
    access_token: str,
    login_customer_id: str | None,
    api_version: str | None,
    insecure_ssl: bool,
    request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
    search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
) -> LiveMutationResult:
    _validate_live_campaign_config(config)
    if env.customer_id and env.customer_id != config.account_id:
        raise ValidationError(
            "GOOGLE_ADS_CUSTOMER_ID does not match the campaign config account_id"
        )
    warnings: list[str] = []
    if config.labels:
        warnings.append(
            "campaign labels are not yet applied by the live mutation layer: "
            + ", ".join(config.labels)
        )

    existing = _existing_campaign_names(
        config.account_id,
        [config.campaign_name],
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        search_fn=search_fn,
    )
    if config.campaign_name in existing:
        raise ValidationError(f"campaign already exists and will not be duplicated: {config.campaign_name}")

    records: list[MutationRecord] = []

    budget_request = {"operations": [_create_budget_operation(config.campaign_name, config.budget_daily)]}
    budget_response = _execute_mutation(
        config.account_id,
        "campaignBudgets:mutate",
        budget_request["operations"][0],
        env,
        access_token=access_token,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        request_fn=request_fn,
    )
    budget_resource_name = _resource_name(budget_response, "campaignBudgets:mutate")
    records.append(
        _record(
            service_path="campaignBudgets:mutate",
            summary=f"Create budget for {config.campaign_name}",
            request=budget_request,
            response=budget_response,
        )
    )

    campaign_request = {"operations": [_create_campaign_operation(config, budget_resource_name)]}
    campaign_response = _execute_mutation(
        config.account_id,
        "campaigns:mutate",
        campaign_request["operations"][0],
        env,
        access_token=access_token,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        request_fn=request_fn,
    )
    campaign_resource_name = _resource_name(campaign_response, "campaigns:mutate")
    records.append(
        _record(
            service_path="campaigns:mutate",
            summary=f"Create campaign {config.campaign_name}",
            request=campaign_request,
            response=campaign_response,
        )
    )

    resolved_geo_targets = _resolve_geo_targets(
        config.account_id,
        config.country,
        list(config.geo_targets),
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        search_fn=search_fn,
    )
    for geo_target in config.geo_targets:
        geo_resource_name = resolved_geo_targets[normalize_geo_target(config.country, geo_target)]
        geo_request = {"operations": [_create_campaign_criterion_operation(campaign_resource_name, geo_resource_name)]}
        geo_response = _execute_mutation(
            config.account_id,
            "campaignCriteria:mutate",
            geo_request["operations"][0],
            env,
            access_token=access_token,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
            request_fn=request_fn,
        )
        records.append(
            _record(
                service_path="campaignCriteria:mutate",
                summary=f"Attach geo target {geo_target} to {config.campaign_name}",
                request=geo_request,
                response=geo_response,
            )
        )

    for group in config.ad_groups:
        ad_group_request = {"operations": [_create_ad_group_operation(campaign_resource_name, group.name)]}
        ad_group_response = _execute_mutation(
            config.account_id,
            "adGroups:mutate",
            ad_group_request["operations"][0],
            env,
            access_token=access_token,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
            request_fn=request_fn,
        )
        ad_group_resource_name = _resource_name(ad_group_response, "adGroups:mutate")
        records.append(
            _record(
                service_path="adGroups:mutate",
                summary=f"Create ad group {group.name}",
                request=ad_group_request,
                response=ad_group_response,
            )
        )

        for keyword in group.keywords:
            keyword_request = {"operations": [_create_keyword_operation(ad_group_resource_name, keyword)]}
            keyword_response = _execute_mutation(
                config.account_id,
                "adGroupCriteria:mutate",
                keyword_request["operations"][0],
                env,
                access_token=access_token,
                login_customer_id=login_customer_id,
                api_version=api_version,
                insecure_ssl=insecure_ssl,
                request_fn=request_fn,
            )
            records.append(
                _record(
                    service_path="adGroupCriteria:mutate",
                    summary=f"Add keyword {keyword} to {group.name}",
                    request=keyword_request,
                    response=keyword_response,
                )
            )

        for ad in group.ads:
            ad_request = {"operations": [_create_ad_operation(ad_group_resource_name, ad)]}
            ad_response = _execute_mutation(
                config.account_id,
                "adGroupAds:mutate",
                ad_request["operations"][0],
                env,
                access_token=access_token,
                login_customer_id=login_customer_id,
                api_version=api_version,
                insecure_ssl=insecure_ssl,
                request_fn=request_fn,
            )
            records.append(
                _record(
                    service_path="adGroupAds:mutate",
                    summary=f"Create responsive search ad in {group.name}",
                    request=ad_request,
                    response=ad_response,
                )
            )

    for keyword in config.negative_keywords:
        negative_request = {"operations": [_create_negative_keyword_operation(campaign_resource_name, keyword)]}
        negative_response = _execute_mutation(
            config.account_id,
            "campaignCriteria:mutate",
            negative_request["operations"][0],
            env,
            access_token=access_token,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
            request_fn=request_fn,
        )
        records.append(
            _record(
                service_path="campaignCriteria:mutate",
                summary=f"Add negative keyword {keyword} to {config.campaign_name}",
                request=negative_request,
                response=negative_response,
            )
        )

    return LiveMutationResult(account_id=config.account_id, records=records, warnings=warnings)


def _apply_cleanup_campaign(
    account_id: str,
    plan_campaign: CleanupCampaignConfig,
    env: GoogleAdsEnvironment,
    *,
    access_token: str,
    login_customer_id: str | None,
    api_version: str | None,
    insecure_ssl: bool,
    request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
    search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
) -> tuple[list[MutationRecord], str]:
    if env.customer_id and env.customer_id != account_id:
        raise ValidationError(
            "GOOGLE_ADS_CUSTOMER_ID does not match the cleanup plan account_id"
        )
    if plan_campaign.status != "PAUSED":
        raise ValidationError(
            f"cleanup campaigns must be paused before launch: {plan_campaign.campaign_name}"
        )
    if plan_campaign.channel != "SEARCH":
        raise ValidationError("cleanup live mutation currently supports SEARCH campaigns only")
    if plan_campaign.bidding_strategy not in SUPPORTED_LIVE_BIDDING_STRATEGIES:
        raise ValidationError("cleanup live mutation currently supports MAXIMIZE_CONVERSIONS only")
    for index, group in enumerate(plan_campaign.ad_groups):
        if not group.keywords:
            raise ValidationError(f"campaigns[{index}].ad_groups[{index}].keywords must not be empty")
        if not group.ads:
            raise ValidationError(f"campaigns[{index}].ad_groups[{index}].ads must not be empty")
        for ad_index, ad in enumerate(group.ads):
            _validate_responsive_search_ad(ad, f"campaigns[{index}].ad_groups[{index}].ads[{ad_index}]")

    existing = _existing_campaign_names(
        account_id,
        [plan_campaign.campaign_name],
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        search_fn=search_fn,
    )
    if plan_campaign.campaign_name in existing:
        raise ValidationError(f"campaign already exists and will not be duplicated: {plan_campaign.campaign_name}")

    records: list[MutationRecord] = []

    budget_request = {
        "operations": [_create_budget_operation(plan_campaign.campaign_name, plan_campaign.launch_budget_daily)]
    }
    budget_response = _execute_mutation(
        account_id,
        "campaignBudgets:mutate",
        budget_request["operations"][0],
        env,
        access_token=access_token,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        request_fn=request_fn,
    )
    budget_resource_name = _resource_name(budget_response, "campaignBudgets:mutate")
    records.append(
        _record(
            service_path="campaignBudgets:mutate",
            summary=f"Create budget for {plan_campaign.campaign_name}",
            request=budget_request,
            response=budget_response,
        )
    )

    campaign_request = {
        "operations": [_create_campaign_operation(plan_campaign, budget_resource_name)]
    }
    campaign_response = _execute_mutation(
        account_id,
        "campaigns:mutate",
        campaign_request["operations"][0],
        env,
        access_token=access_token,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        request_fn=request_fn,
    )
    campaign_resource_name = _resource_name(campaign_response, "campaigns:mutate")
    records.append(
        _record(
            service_path="campaigns:mutate",
            summary=f"Create campaign {plan_campaign.campaign_name}",
            request=campaign_request,
            response=campaign_response,
        )
    )

    resolved_geo_targets = _resolve_geo_targets(
        account_id,
        plan_campaign.country,
        list(plan_campaign.geo_targets),
        env,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        search_fn=search_fn,
    )
    for geo_target in plan_campaign.geo_targets:
        geo_resource_name = resolved_geo_targets[normalize_geo_target(plan_campaign.country, geo_target)]
        geo_request = {"operations": [_create_campaign_criterion_operation(campaign_resource_name, geo_resource_name)]}
        geo_response = _execute_mutation(
            account_id,
            "campaignCriteria:mutate",
            geo_request["operations"][0],
            env,
            access_token=access_token,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
            request_fn=request_fn,
        )
        records.append(
            _record(
                service_path="campaignCriteria:mutate",
                summary=f"Attach geo target {geo_target} to {plan_campaign.campaign_name}",
                request=geo_request,
                response=geo_response,
            )
        )

    for group in plan_campaign.ad_groups:
        ad_group_request = {"operations": [_create_ad_group_operation(campaign_resource_name, group.name)]}
        ad_group_response = _execute_mutation(
            account_id,
            "adGroups:mutate",
            ad_group_request["operations"][0],
            env,
            access_token=access_token,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
            request_fn=request_fn,
        )
        ad_group_resource_name = _resource_name(ad_group_response, "adGroups:mutate")
        records.append(
            _record(
                service_path="adGroups:mutate",
                summary=f"Create ad group {group.name}",
                request=ad_group_request,
                response=ad_group_response,
            )
        )

        for keyword in group.keywords:
            keyword_request = {"operations": [_create_keyword_operation(ad_group_resource_name, keyword)]}
            keyword_response = _execute_mutation(
                account_id,
                "adGroupCriteria:mutate",
                keyword_request["operations"][0],
                env,
                access_token=access_token,
                login_customer_id=login_customer_id,
                api_version=api_version,
                insecure_ssl=insecure_ssl,
                request_fn=request_fn,
            )
            records.append(
                _record(
                    service_path="adGroupCriteria:mutate",
                    summary=f"Add keyword {keyword} to {group.name}",
                    request=keyword_request,
                    response=keyword_response,
                )
            )

        for ad in group.ads:
            ad_request = {"operations": [_create_ad_operation(ad_group_resource_name, ad)]}
            ad_response = _execute_mutation(
                account_id,
                "adGroupAds:mutate",
                ad_request["operations"][0],
                env,
                access_token=access_token,
                login_customer_id=login_customer_id,
                api_version=api_version,
                insecure_ssl=insecure_ssl,
                request_fn=request_fn,
            )
            records.append(
                _record(
                    service_path="adGroupAds:mutate",
                    summary=f"Create responsive search ad in {group.name}",
                    request=ad_request,
                    response=ad_response,
                )
            )

    for keyword in plan_campaign.negative_keywords:
        negative_request = {"operations": [_create_negative_keyword_operation(campaign_resource_name, keyword)]}
        negative_response = _execute_mutation(
            account_id,
            "campaignCriteria:mutate",
            negative_request["operations"][0],
            env,
            access_token=access_token,
            login_customer_id=login_customer_id,
            api_version=api_version,
            insecure_ssl=insecure_ssl,
            request_fn=request_fn,
        )
        records.append(
            _record(
                service_path="campaignCriteria:mutate",
                summary=f"Add negative keyword {keyword} to {plan_campaign.campaign_name}",
                request=negative_request,
                response=negative_response,
            )
        )

    return records, campaign_resource_name


class GoogleAdsLiveMutator:
    def __init__(
        self,
        env: GoogleAdsEnvironment,
        *,
        access_token: str,
        request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
        search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
        insecure_ssl: bool = False,
    ) -> None:
        self.env = env
        self.access_token = access_token
        self.request_fn = request_fn
        self.search_fn = search_fn
        self.insecure_ssl = insecure_ssl

    @classmethod
    def from_environment(
        cls,
        environ: Mapping[str, str] | None = None,
        *,
        insecure_ssl: bool = False,
        request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
        search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
    ) -> "GoogleAdsLiveMutator":
        env = load_google_ads_environment(environ)
        access_token = exchange_access_token(env, insecure_ssl=insecure_ssl)
        return cls(
            env,
            access_token=access_token,
            request_fn=request_fn,
            search_fn=search_fn,
            insecure_ssl=insecure_ssl,
        )

    def execute_campaign_config(self, config: CampaignConfig) -> LiveMutationResult:
        result = _apply_campaign_config(
            config,
            self.env,
            access_token=self.access_token,
            login_customer_id=self.env.login_customer_id,
            api_version=self.env.api_version,
            insecure_ssl=self.insecure_ssl,
            request_fn=self.request_fn,
            search_fn=self.search_fn,
        )
        return result

    def execute_cleanup_plan(self, plan: CleanupPlan, *, pause_legacy: bool = False) -> LiveMutationResult:
        records: list[MutationRecord] = []
        warnings = list(plan.warnings)
        skipped_campaigns: list[str] = []
        paused_campaigns: list[str] = []

        for campaign in plan.campaigns:
            if campaign.labels:
                warnings.append(
                    "cleanup campaign labels are not yet applied by the live mutation layer: "
                    + ", ".join(campaign.labels)
                )
            campaign_records, _ = _apply_cleanup_campaign(
                plan.account_id,
                campaign,
                self.env,
                access_token=self.access_token,
                login_customer_id=self.env.login_customer_id,
                api_version=self.env.api_version,
                insecure_ssl=self.insecure_ssl,
                request_fn=self.request_fn,
                search_fn=self.search_fn,
            )
            records.extend(campaign_records)

        if pause_legacy:
            legacy_names = [
                action.payload.get("campaign_name")
                for action in plan.pause_actions
                if isinstance(action.payload, Mapping)
            ]
            legacy_names = [name for name in legacy_names if isinstance(name, str) and name.strip()]
            if legacy_names:
                query = """
SELECT campaign.resource_name, campaign.name, campaign.status
FROM campaign
WHERE campaign.name IN ({names})
  AND campaign.status != 'REMOVED'
""".strip().format(names=_gaql_in(legacy_names))
                rows = self.search_fn(
                    plan.account_id,
                    query,
                    self.env,
                    login_customer_id=self.env.login_customer_id,
                    api_version=self.env.api_version,
                    insecure_ssl=self.insecure_ssl,
                )
                campaign_resources: dict[str, str] = {}
                for row in rows:
                    campaign = row.get("campaign", {})
                    name = campaign.get("name")
                    resource_name = campaign.get("resourceName")
                    if isinstance(name, str) and isinstance(resource_name, str):
                        campaign_resources[name] = resource_name
                missing = [name for name in legacy_names if name not in campaign_resources]
                if missing:
                    warnings.append(
                        "These legacy campaigns were not found for pausing: " + ", ".join(missing)
                    )
                for name in legacy_names:
                    resource_name = campaign_resources.get(name)
                    if not resource_name:
                        continue
                    pause_request = {"operations": [_pause_campaign_operation(resource_name)]}
                    pause_response = _execute_mutation(
                        plan.account_id,
                        "campaigns:mutate",
                        pause_request["operations"][0],
                        self.env,
                        access_token=self.access_token,
                        login_customer_id=self.env.login_customer_id,
                        api_version=self.env.api_version,
                        insecure_ssl=self.insecure_ssl,
                        request_fn=self.request_fn,
                    )
                    paused_campaigns.append(name)
                    records.append(
                        _record(
                            service_path="campaigns:mutate",
                            summary=f"Pause legacy campaign {name}",
                            request=pause_request,
                            response=pause_response,
                        )
                    )

        return LiveMutationResult(
            account_id=plan.account_id,
            records=records,
            skipped_campaigns=skipped_campaigns,
            paused_campaigns=paused_campaigns,
            warnings=warnings,
        )


def execute_campaign_config(
    config: CampaignConfig,
    *,
    confirm_live: bool,
    environ: Mapping[str, str] | None = None,
    insecure_ssl: bool = False,
    request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
    search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
) -> LiveMutationResult:
    require_live_mutation_gate(confirm_live, environ=environ)
    mutator = GoogleAdsLiveMutator.from_environment(
        environ,
        insecure_ssl=insecure_ssl,
        request_fn=request_fn,
        search_fn=search_fn,
    )
    return mutator.execute_campaign_config(config)


def execute_cleanup_plan(
    plan: CleanupPlan,
    *,
    confirm_live: bool,
    environ: Mapping[str, str] | None = None,
    insecure_ssl: bool = False,
    pause_legacy: bool = False,
    request_fn: Callable[..., dict[str, Any]] = google_ads_mutate,
    search_fn: Callable[..., list[dict[str, Any]]] = google_ads_search,
) -> LiveMutationResult:
    require_live_mutation_gate(confirm_live, environ=environ)
    mutator = GoogleAdsLiveMutator.from_environment(
        environ,
        insecure_ssl=insecure_ssl,
        request_fn=request_fn,
        search_fn=search_fn,
    )
    return mutator.execute_cleanup_plan(plan, pause_legacy=pause_legacy)
