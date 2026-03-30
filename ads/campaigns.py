from __future__ import annotations

from dataclasses import asdict
from typing import Any

from .models import CampaignConfig, DryRunPlan, PlanAction


def build_campaign_creation_plan(config: CampaignConfig) -> DryRunPlan:
    actions: list[PlanAction] = [
        PlanAction(
            action="create_campaign",
            resource="campaign",
            summary=f"Create campaign {config.campaign_name}",
            payload={
                "account_id": config.account_id,
                "campaign_name": config.campaign_name,
                "channel": config.channel,
                "country": config.country,
                "language": config.language,
                "goal": config.goal,
                "budget_daily": config.budget_daily,
                "bidding_strategy": config.bidding_strategy,
                "start_date": config.start_date.isoformat(),
                "end_date": config.end_date.isoformat(),
                "geo_targets": list(config.geo_targets),
                "labels": list(config.labels),
                "status": config.status,
                "dry_run": config.dry_run,
            },
        ),
        PlanAction(
            action="set_budget",
            resource="campaign_budget",
            summary=f"Set daily budget to {config.budget_daily}",
            payload={"budget_daily": config.budget_daily},
        ),
        PlanAction(
            action="set_geo_targets",
            resource="campaign_location",
            summary=f"Attach {len(config.geo_targets)} geo targets",
            payload={"geo_targets": list(config.geo_targets)},
        ),
    ]

    for group_index, group in enumerate(config.ad_groups):
        actions.append(
            PlanAction(
                action="create_ad_group",
                resource="ad_group",
                summary=f"Create ad group {group.name}",
                payload={
                    "index": group_index,
                    "name": group.name,
                    "keywords": list(group.keywords),
                },
            )
        )

        for keyword_index, keyword in enumerate(group.keywords):
            actions.append(
                PlanAction(
                    action="add_keyword",
                    resource="keyword",
                    summary=f"Add keyword {keyword}",
                    payload={
                        "ad_group": group.name,
                        "index": keyword_index,
                        "keyword": keyword,
                    },
                )
            )

        for ad_index, ad in enumerate(group.ads):
            actions.append(
                PlanAction(
                    action="create_ad",
                    resource="ad",
                    summary=f"Create ad in {group.name}",
                    payload={
                        "ad_group": group.name,
                        "index": ad_index,
                        "headlines": list(ad.headlines),
                        "descriptions": list(ad.descriptions),
                        "final_url": ad.final_url,
                        "path1": ad.path1,
                        "path2": ad.path2,
                    },
                )
            )

    if config.negative_keywords:
        actions.append(
            PlanAction(
                action="set_negative_keywords",
                resource="campaign_criterion",
                summary=f"Add {len(config.negative_keywords)} negative keywords",
                payload={"negative_keywords": list(config.negative_keywords)},
            )
        )

    warnings: list[str] = []
    if config.status != "PAUSED":
        warnings.append("New campaigns should start paused unless explicitly approved.")
    if not config.dry_run:
        warnings.append("Config is not marked as dry-run. Live apply still requires approval.")

    return DryRunPlan(campaign_name=config.campaign_name, actions=actions, warnings=warnings)


def plan_to_dict(plan: DryRunPlan) -> dict[str, Any]:
    return asdict(plan)
