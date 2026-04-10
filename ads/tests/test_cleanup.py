from __future__ import annotations

import unittest
from pathlib import Path

from ads.cleanup import build_cleanup_plan, cleanup_plan_to_dict, load_cleanup_config, parse_cleanup_config
from ads.models import AccountSnapshot, AssetGroupSnapshot, BudgetSnapshot, CampaignSnapshot, GeoTargetSnapshot
from ads.validators import ValidationError


def _sample_snapshot() -> AccountSnapshot:
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
            GeoTargetSnapshot(resource_name="geoTargetConstants/9000427", name="H3Y", country_code="CA", target_type="Postal Code"),
            GeoTargetSnapshot(resource_name="geoTargetConstants/9000942", name="M4W", country_code="CA", target_type="Postal Code"),
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


class CleanupPlanTest(unittest.TestCase):
    def test_cleanup_plan_is_grant_aware_and_search_first(self) -> None:
        config_path = Path(__file__).resolve().parents[1] / "examples" / "adgrants.cleanup.sample.json"
        config = load_cleanup_config(config_path)
        plan = build_cleanup_plan(config, _sample_snapshot())
        payload = cleanup_plan_to_dict(plan)

        self.assertEqual(payload["account_id"], "9071089180")
        self.assertEqual(len(payload["campaigns"]), 3)
        self.assertEqual(len(payload["pause_actions"]), 2)
        self.assertEqual(payload["budget_summary"]["target_budget_total_daily"], 329)
        self.assertEqual(payload["budget_summary"]["launch_budget_total_daily"], 80)
        self.assertGreater(payload["budget_summary"]["grant_utilization_target_pct"], 99)
        self.assertTrue(any("Performance Max" in warning for warning in payload["warnings"]))
        self.assertTrue(any(campaign["campaign_name"] == "SEARCH_CA_QC_DONATE_FR_202603" for campaign in payload["campaigns"]))
        self.assertTrue(any(campaign["campaign_name"] == "SEARCH_CA_NAT_CONTACT_EN_202603" for campaign in payload["campaigns"]))

    def test_cleanup_config_rejects_single_word_positive_keywords(self) -> None:
        bad_config = {
            "account_id": "9071089180",
            "campaigns": [
                {
                    "campaign_name": "SEARCH_CA_QC_DONATE_FR_202603",
                    "channel": "SEARCH",
                    "country": "CA",
                    "language": "FR",
                    "goal": "DONATE",
                    "launch_budget_daily": 30,
                    "target_budget_daily": 110,
                    "bidding_strategy": "MAXIMIZE_CONVERSIONS",
                    "start_date": "2026-03-29",
                    "end_date": "2037-12-30",
                    "geo_targets": ["H3Y"],
                    "landing_pages": ["https://example.org/donate"],
                    "ad_groups": [
                        {
                            "name": "Bad Keywords",
                            "keywords": ["donate"],
                            "ads": [
                                {
                                    "headlines": ["Example headline"],
                                    "descriptions": ["Example description"],
                                    "final_url": "https://example.org/donate"
                                }
                            ]
                        }
                    ]
                },
                {
                    "campaign_name": "SEARCH_CA_NAT_DONATE_EN_202603",
                    "channel": "SEARCH",
                    "country": "CA",
                    "language": "EN",
                    "goal": "DONATE",
                    "launch_budget_daily": 30,
                    "target_budget_daily": 110,
                    "bidding_strategy": "MAXIMIZE_CONVERSIONS",
                    "start_date": "2026-03-29",
                    "end_date": "2037-12-30",
                    "geo_targets": ["M4W"],
                    "landing_pages": ["https://example.org/donate"],
                    "ad_groups": [
                        {
                            "name": "Good Keywords",
                            "keywords": ["vetiver donation"],
                            "ads": [
                                {
                                    "headlines": ["Example headline"],
                                    "descriptions": ["Example description"],
                                    "final_url": "https://example.org/donate"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        with self.assertRaises(ValidationError):
            parse_cleanup_config(bad_config)


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
