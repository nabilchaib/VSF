from __future__ import annotations

import unittest

from ads.approvals import LiveMutationNotAllowed, require_live_mutation_approval
from ads.config import parse_campaign_config


class ApprovalGuardTest(unittest.TestCase):
    def test_live_mutation_requires_explicit_confirmation(self) -> None:
        config = parse_campaign_config(
            {
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
                "negative_keywords": [],
                "ad_groups": [],
                "labels": [],
                "dry_run": False,
            }
        )

        with self.assertRaises(LiveMutationNotAllowed):
            require_live_mutation_approval(config, confirm_live=False, environ={})

        with self.assertRaises(LiveMutationNotAllowed):
            require_live_mutation_approval(config, confirm_live=True, environ={})

        require_live_mutation_approval(
            config,
            confirm_live=True,
            environ={"GOOGLE_ADS_ALLOW_LIVE_MUTATION": "true"},
        )


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
