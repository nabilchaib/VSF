from __future__ import annotations

import unittest

from ads.validators import (
    ValidationError,
    normalize_account_id,
    normalize_campaign_name,
    normalize_geo_target,
    normalize_geo_targets,
    normalize_language_code,
    validate_budget_daily,
    validate_date_range,
)


class ValidatorsTest(unittest.TestCase):
    def test_normalize_account_id(self) -> None:
        self.assertEqual(normalize_account_id("123-456-7890"), "1234567890")

    def test_normalize_language_code(self) -> None:
        self.assertEqual(normalize_language_code("fr"), "FR")

    def test_campaign_name_validation(self) -> None:
        self.assertEqual(
            normalize_campaign_name("SEARCH_CA_H3Y_DONATE_FR_202603_TEST"),
            "SEARCH_CA_H3Y_DONATE_FR_202603_TEST",
        )

    def test_geo_target_normalization_for_canada(self) -> None:
        self.assertEqual(normalize_geo_target("CA", "h3y 2m7"), "H3Y")
        self.assertEqual(normalize_geo_targets("CA", ["H3Y", "h3y 2m7"]), ["H3Y"])

    def test_geo_target_normalization_for_us(self) -> None:
        self.assertEqual(normalize_geo_target("US", "12345-6789"), "12345")

    def test_budget_validation(self) -> None:
        self.assertEqual(validate_budget_daily("25"), 25.0)

    def test_date_range_validation(self) -> None:
        start, end = validate_date_range("2026-03-01", "2026-03-31")
        self.assertEqual(start.isoformat(), "2026-03-01")
        self.assertEqual(end.isoformat(), "2026-03-31")

    def test_invalid_account_id(self) -> None:
        with self.assertRaises(ValidationError):
            normalize_account_id("123")


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
