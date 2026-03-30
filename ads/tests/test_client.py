from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from ads.client import load_google_ads_environment


class ClientEnvTest(unittest.TestCase):
    def test_loads_developer_token_from_file(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            token_path = Path(tmpdir) / "api_key"
            token_path.write_text("  file-token-value  \n", encoding="utf-8")

            env = load_google_ads_environment(
                {
                    "GOOGLE_ADS_DEVELOPER_TOKEN_FILE": str(token_path),
                    "GOOGLE_ADS_CLIENT_ID": "client-id",
                    "GOOGLE_ADS_CLIENT_SECRET": "client-secret",
                    "GOOGLE_ADS_REFRESH_TOKEN": "refresh-token",
                }
            )

            self.assertEqual(env.developer_token, "file-token-value")
            self.assertEqual(env.client_id, "client-id")
            self.assertEqual(env.client_secret, "client-secret")
            self.assertEqual(env.refresh_token, "refresh-token")

    def test_loads_optional_account_ids_from_file(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            token_path = Path(tmpdir) / "api_key"
            login_path = Path(tmpdir) / "manager_id"
            customer_path = Path(tmpdir) / "customer_id"
            token_path.write_text("developer-token\n", encoding="utf-8")
            login_path.write_text("524-817-3049\n", encoding="utf-8")
            customer_path.write_text("692-072-4799\n", encoding="utf-8")

            env = load_google_ads_environment(
                {
                    "GOOGLE_ADS_DEVELOPER_TOKEN_FILE": str(token_path),
                    "GOOGLE_ADS_CLIENT_ID": "client-id",
                    "GOOGLE_ADS_CLIENT_SECRET": "client-secret",
                    "GOOGLE_ADS_REFRESH_TOKEN": "refresh-token",
                    "GOOGLE_ADS_LOGIN_CUSTOMER_ID_FILE": str(login_path),
                    "GOOGLE_ADS_CUSTOMER_ID_FILE": str(customer_path),
                }
            )

            self.assertEqual(env.login_customer_id, "5248173049")
            self.assertEqual(env.customer_id, "6920724799")

    def test_loads_all_credentials_from_directory(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            base = Path(tmpdir)
            (base / "API key").write_text("developer-token\n", encoding="utf-8")
            (base / "client_id").write_text("client-id\n", encoding="utf-8")
            (base / "client_secret").write_text("client-secret\n", encoding="utf-8")
            (base / "refresh_token").write_text("refresh-token\n", encoding="utf-8")
            (base / "manager_id").write_text("524-817-3049\n", encoding="utf-8")
            (base / "customer_id").write_text("692-072-4799\n", encoding="utf-8")

            env = load_google_ads_environment({"GOOGLE_ADS_CREDENTIALS_DIR": tmpdir})

            self.assertEqual(env.developer_token, "developer-token")
            self.assertEqual(env.client_id, "client-id")
            self.assertEqual(env.client_secret, "client-secret")
            self.assertEqual(env.refresh_token, "refresh-token")
            self.assertEqual(env.login_customer_id, "5248173049")
            self.assertEqual(env.customer_id, "6920724799")


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
