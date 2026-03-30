from __future__ import annotations

import unittest

from ads.campaigns import build_campaign_creation_plan, plan_to_dict
from ads.config import parse_campaign_config


class CampaignPlanTest(unittest.TestCase):
    def test_plan_generation(self) -> None:
        config = parse_campaign_config(
            {
                "account_id": "1234567890",
                "campaign_name": "SEARCH_CA_H3Y_DONATE_FR_202603_TEST",
                "channel": "SEARCH",
                "country": "CA",
                "language": "FR",
                "goal": "DONATE",
                "budget_daily": 25,
                "bidding_strategy": "MAXIMIZE_CONVERSIONS",
                "start_date": "2026-03-01",
                "end_date": "2026-03-31",
                "geo_targets": ["H3Y", "M4W"],
                "negative_keywords": ["jobs"],
                "ad_groups": [
                    {
                        "name": "Core Donation Terms",
                        "keywords": ["donate vetiver"],
                        "ads": [
                            {
                                "headlines": ["Support Regeneration"],
                                "descriptions": ["Help communities restore land."],
                                "final_url": "https://example.org/donate",
                            }
                        ],
                    }
                ],
                "labels": ["nonprofit"],
                "dry_run": True,
            }
        )

        plan = build_campaign_creation_plan(config)
        payload = plan_to_dict(plan)

        self.assertEqual(payload["campaign_name"], "SEARCH_CA_H3Y_DONATE_FR_202603_TEST")
        self.assertGreaterEqual(len(payload["actions"]), 5)
        self.assertTrue(any(action["action"] == "create_campaign" for action in payload["actions"]))
        self.assertTrue(any(action["action"] == "create_ad" for action in payload["actions"]))


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
