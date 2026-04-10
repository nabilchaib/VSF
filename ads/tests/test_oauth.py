from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from ads.oauth import build_consent_url, load_oauth_client


class OAuthHelperTest(unittest.TestCase):
    def test_loads_installed_client_json(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "client_secret.json"
            path.write_text(
                """
                {
                  "installed": {
                    "client_id": "client-id",
                    "client_secret": "client-secret",
                    "redirect_uris": ["http://localhost"]
                  }
                }
                """.strip(),
                encoding="utf-8",
            )

            client = load_oauth_client(path, "http://localhost:8080/")

            self.assertEqual(client.client_id, "client-id")
            self.assertEqual(client.client_secret, "client-secret")
            self.assertEqual(client.redirect_uri, "http://localhost:8080/")

    def test_build_consent_url_includes_required_parameters(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "client_secret.json"
            path.write_text(
                """
                {
                  "installed": {
                    "client_id": "client-id",
                    "client_secret": "client-secret",
                    "redirect_uris": ["http://localhost"]
                  }
                }
                """.strip(),
                encoding="utf-8",
            )
            client = load_oauth_client(path, "http://localhost:8080/")
        url = build_consent_url(client, state="abc123")

        self.assertIn("client_id=client-id", url)
        self.assertIn("redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F", url)
        self.assertIn("scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadwords", url)
        self.assertIn("access_type=offline", url)
        self.assertIn("prompt=consent", url)
        self.assertIn("state=abc123", url)


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
