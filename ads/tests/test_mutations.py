from __future__ import annotations

import re
import unittest
from pathlib import Path

from ads.client import GoogleAdsEnvironment
from ads.cleanup import build_cleanup_plan, load_cleanup_config
from ads.config import parse_campaign_config
from ads.mutations import GoogleAdsLiveMutator
from ads.models import (
    AccountSnapshot,
    AssetGroupSnapshot,
    BudgetSnapshot,
    CampaignSnapshot,
    GeoTargetSnapshot,
)


def _campaign_config() -> dict[str, object]:
    return {
        "account_id": "1234567890",
        "campaign_name": "SEARCH_CA_H3Y_DONATE_FR_202603",
        "channel": "SEARCH",
        "country": "CA",
        "language": "FR",
        "goal": "DONATE",
        "budget_daily": 25,
        "bidding_strategy": "MAXIMIZE_CONVERSIONS",
        "start_date": "2026-03-01",
        "end_date": "2026-03-31",
        "geo_targets": ["H3Y"],
        "negative_keywords": ["jobs"],
        "ad_groups": [
            {
                "name": "Core Donation Terms",
                "keywords": ["donate vetiver"],
                "ads": [
                    {
                        "headlines": [
                            "Support Regeneration",
                            "Donate to Restore Land",
                            "Help Communities Thrive",
                        ],
                        "descriptions": [
                            "Help communities restore land.",
                            "Support a practical nonprofit project.",
                        ],
                        "final_url": "https://example.org/donate",
                    }
                ],
            }
        ],
        "labels": ["nonprofit"],
        "dry_run": False,
        "status": "PAUSED",
    }


def _cleanup_snapshot() -> AccountSnapshot:
    return AccountSnapshot(
        customer_id="9071089180",
        campaigns=[
            CampaignSnapshot(
                id="23696589819",
                name="Campaign #1",
                status="ENABLED",
                channel="PERFORMANCE_MAX",
                start_date="2026-03-28",
                end_date="2037-12-30",
            ),
            CampaignSnapshot(
                id="23701929560",
                name="Vetiver 1",
                status="ENABLED",
                channel="PERFORMANCE_MAX",
                start_date="2026-03-28",
                end_date="2037-12-30",
            ),
        ],
        budgets=[
            BudgetSnapshot(
                resource_name="customers/9071089180/campaignBudgets/15461019977",
                name="Campaign #1",
                amount_micros=50780000,
                delivery_method="STANDARD",
                status="ENABLED",
            ),
            BudgetSnapshot(
                resource_name="customers/9071089180/campaignBudgets/15470972284",
                name="Vetiver 1",
                amount_micros=6520000,
                delivery_method="STANDARD",
                status="ENABLED",
            ),
        ],
        geo_targets=[
            GeoTargetSnapshot(
                resource_name="geoTargetConstants/9000427",
                name="H3Y",
                country_code="CA",
                target_type="Postal Code",
            )
        ],
        asset_groups=[
            AssetGroupSnapshot(
                campaign_id="23696589819",
                campaign_name="Campaign #1",
                asset_group_id="6694082938",
                asset_group_name="Asset Group 1",
                status="ENABLED",
            ),
            AssetGroupSnapshot(
                campaign_id="23701929560",
                campaign_name="Vetiver 1",
                asset_group_id="6693970772",
                asset_group_name="Asset Group 1",
                status="ENABLED",
            ),
        ],
    )


class LiveMutationTest(unittest.TestCase):
    def test_campaign_config_executes_requests(self) -> None:
        config = parse_campaign_config(_campaign_config())
        env = GoogleAdsEnvironment(
            developer_token="developer-token",
            client_id="client-id",
            client_secret="client-secret",
            refresh_token="refresh-token",
            login_customer_id="5248173049",
            customer_id="1234567890",
            api_version="v22",
        )
        calls: list[tuple[str, str, list[dict[str, object]]]] = []

        def fake_search(customer_id: str, query: str, *_args: object, **_kwargs: object) -> list[dict[str, object]]:
            if "FROM geo_target_constant" in query:
                names = [name for name in re.findall(r"'([^']+)'", query) if name != "CA"]
                return [
                    {
                        "geoTargetConstant": {
                            "resourceName": f"geoTargetConstants/{name}",
                            "name": name,
                        }
                    }
                    for name in names
                ]
            return []

        def fake_request(
            customer_id: str,
            service_path: str,
            operations: list[dict[str, object]],
            _env: GoogleAdsEnvironment,
            **_kwargs: object,
        ) -> dict[str, object]:
            calls.append((customer_id, service_path, operations))
            return {"results": [{"resourceName": f"{service_path}/result/{len(calls)}"}]}

        mutator = GoogleAdsLiveMutator(
            env,
            access_token="access-token",
            request_fn=fake_request,
            search_fn=fake_search,
        )
        result = mutator.execute_campaign_config(config)

        self.assertEqual(result.account_id, "1234567890")
        self.assertEqual(len(result.records), 7)
        self.assertEqual([call[1] for call in calls[:2]], ["campaignBudgets:mutate", "campaigns:mutate"])
        campaign_request = calls[1][2][0]["create"]
        self.assertEqual(campaign_request["advertisingChannelType"], "SEARCH")
        self.assertEqual(campaign_request["status"], "PAUSED")
        self.assertEqual(campaign_request["geoTargetTypeSetting"]["positiveGeoTargetType"], "PRESENCE")
        self.assertTrue(any("labels are not yet applied" in warning for warning in result.warnings))

    def test_cleanup_plan_executes_replacements_and_pauses_legacy(self) -> None:
        cleanup_config = load_cleanup_config(
            Path(__file__).resolve().parents[1] / "examples" / "adgrants.cleanup.sample.json"
        )
        plan = build_cleanup_plan(cleanup_config, _cleanup_snapshot())
        env = GoogleAdsEnvironment(
            developer_token="developer-token",
            client_id="client-id",
            client_secret="client-secret",
            refresh_token="refresh-token",
            login_customer_id="5248173049",
            customer_id="9071089180",
            api_version="v22",
        )
        calls: list[tuple[str, str, list[dict[str, object]]]] = []
        legacy_map = {
            "Campaign #1": "customers/9071089180/campaigns/23696589819",
            "Vetiver 1": "customers/9071089180/campaigns/23701929560",
        }

        def fake_search(customer_id: str, query: str, *_args: object, **_kwargs: object) -> list[dict[str, object]]:
            if "FROM geo_target_constant" in query:
                names = [name for name in re.findall(r"'([^']+)'", query) if name != "CA"]
                return [
                    {
                        "geoTargetConstant": {
                            "resourceName": f"geoTargetConstants/{name}",
                            "name": name,
                        }
                    }
                    for name in names
                ]
            if "FROM campaign" in query:
                names = re.findall(r"'([^']+)'", query)
                rows: list[dict[str, object]] = []
                for name in names:
                    resource_name = legacy_map.get(name)
                    if resource_name:
                        rows.append(
                            {
                                "campaign": {
                                    "resourceName": resource_name,
                                    "name": name,
                                    "status": "ENABLED",
                                }
                            }
                        )
                return rows
            return []

        def fake_request(
            customer_id: str,
            service_path: str,
            operations: list[dict[str, object]],
            _env: GoogleAdsEnvironment,
            **_kwargs: object,
        ) -> dict[str, object]:
            calls.append((customer_id, service_path, operations))
            return {"results": [{"resourceName": f"{service_path}/result/{len(calls)}"}]}

        mutator = GoogleAdsLiveMutator(
            env,
            access_token="access-token",
            request_fn=fake_request,
            search_fn=fake_search,
        )
        result = mutator.execute_cleanup_plan(plan, pause_legacy=True)

        self.assertEqual(result.account_id, "9071089180")
        self.assertEqual(result.paused_campaigns, ["Campaign #1", "Vetiver 1"])
        self.assertGreater(len(result.records), 0)
        self.assertTrue(any("cleanup campaign labels are not yet applied" in warning for warning in result.warnings))

    def test_campaign_draft_requests_campaign_drafts_mutate(self) -> None:
        env = GoogleAdsEnvironment(
            developer_token="developer-token",
            client_id="client-id",
            client_secret="client-secret",
            refresh_token="refresh-token",
            login_customer_id="5248173049",
            customer_id="9071089180",
            api_version="v22",
        )
        calls: list[tuple[str, str, list[dict[str, object]]]] = []

        def fake_request(
            customer_id: str,
            service_path: str,
            operations: list[dict[str, object]],
            _env: GoogleAdsEnvironment,
            **_kwargs: object,
        ) -> dict[str, object]:
            calls.append((customer_id, service_path, operations))
            return {"results": [{"resourceName": "customers/9071089180/campaignDrafts/123~456"}]}

        mutator = GoogleAdsLiveMutator(
            env,
            access_token="access-token",
            request_fn=fake_request,
        )
        result = mutator.create_campaign_draft(
            "9071089180",
            "customers/9071089180/campaigns/12345678901",
            "VSF Draft 2026-04-10",
        )

        self.assertEqual(result.account_id, "9071089180")
        self.assertEqual(result.base_campaign, "customers/9071089180/campaigns/12345678901")
        self.assertEqual(result.draft_name, "VSF Draft 2026-04-10")
        self.assertEqual(result.resource_name, "customers/9071089180/campaignDrafts/123~456")
        self.assertEqual(calls[0][1], "campaignDrafts:mutate")
        self.assertEqual(calls[0][2][0]["create"]["baseCampaign"], "customers/9071089180/campaigns/12345678901")
        self.assertEqual(calls[0][2][0]["create"]["name"], "VSF Draft 2026-04-10")


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
