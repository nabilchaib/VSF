from __future__ import annotations

import json
import secrets
import ssl
import threading
import urllib.parse
import urllib.request
import webbrowser
from dataclasses import dataclass
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Mapping

from .validators import ValidationError

DEFAULT_GOOGLE_ADS_SCOPE = "https://www.googleapis.com/auth/adwords"


@dataclass(frozen=True)
class OAuthClient:
    client_id: str
    client_secret: str
    redirect_uri: str


def _load_json(path: Path) -> Mapping[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)
    if not isinstance(payload, Mapping):
        raise ValidationError(f"{path} must contain a JSON object")
    return payload


def load_oauth_client(path: str | Path, redirect_uri: str) -> OAuthClient:
    config_path = Path(path)
    if not config_path.exists():
        raise ValidationError(f"OAuth client file does not exist: {config_path}")

    payload = _load_json(config_path)
    config: Mapping[str, Any] | None = None
    if isinstance(payload.get("installed"), Mapping):
        config = payload["installed"]
    elif isinstance(payload.get("web"), Mapping):
        config = payload["web"]
    if config is None:
        raise ValidationError(f"{config_path} must contain an installed or web OAuth client")

    client_id = str(config.get("client_id", "")).strip()
    client_secret = str(config.get("client_secret", "")).strip()
    if not client_id or not client_secret:
        raise ValidationError(f"{config_path} is missing client_id or client_secret")

    return OAuthClient(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)


def load_oauth_client_from_files(
    client_id_file: str | Path,
    client_secret_file: str | Path,
    redirect_uri: str,
) -> OAuthClient:
    client_id_path = Path(client_id_file)
    client_secret_path = Path(client_secret_file)
    if not client_id_path.exists():
        raise ValidationError(f"OAuth client_id file does not exist: {client_id_path}")
    if not client_secret_path.exists():
        raise ValidationError(f"OAuth client_secret file does not exist: {client_secret_path}")

    client_id = client_id_path.read_text(encoding="utf-8").splitlines()[0].strip()
    client_secret = client_secret_path.read_text(encoding="utf-8").splitlines()[0].strip()
    if not client_id or not client_secret:
        raise ValidationError("OAuth client_id and client_secret files must not be empty")

    return OAuthClient(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)


def build_consent_url(
    client: OAuthClient,
    *,
    scope: str = DEFAULT_GOOGLE_ADS_SCOPE,
    state: str | None = None,
) -> str:
    params = {
        "client_id": client.client_id,
        "redirect_uri": client.redirect_uri,
        "response_type": "code",
        "scope": scope,
        "access_type": "offline",
        "prompt": "consent",
    }
    if state:
        params["state"] = state
    return "https://accounts.google.com/o/oauth2/v2/auth?" + urllib.parse.urlencode(params)


def exchange_authorization_code(
    client: OAuthClient,
    code: str,
    *,
    insecure_ssl: bool = False,
) -> dict[str, Any]:
    body = urllib.parse.urlencode(
        {
            "code": code,
            "client_id": client.client_id,
            "client_secret": client.client_secret,
            "redirect_uri": client.redirect_uri,
            "grant_type": "authorization_code",
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=body,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    context = ssl._create_unverified_context() if insecure_ssl else None
    try:
        with urllib.request.urlopen(request, timeout=30, context=context) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except Exception as exc:  # pragma: no cover - exercised through CLI
        raise RuntimeError(f"OAuth token exchange failed: {exc}") from exc
    if not isinstance(payload, dict):
        raise RuntimeError("OAuth token exchange did not return a JSON object")
    return payload


def refresh_google_ads_token(
    *,
    client: OAuthClient,
    refresh_token_file: str | Path,
    port: int = 8080,
    scope: str = DEFAULT_GOOGLE_ADS_SCOPE,
    insecure_ssl: bool = False,
    open_browser: bool = True,
    timeout_seconds: int = 300,
) -> dict[str, Any]:
    redirect_uri = f"http://localhost:{port}/"
    client = OAuthClient(client.client_id, client.client_secret, redirect_uri)
    state = secrets.token_urlsafe(16)
    code_box: dict[str, str] = {}
    event = threading.Event()

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self) -> None:  # pragma: no cover - exercised interactively
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            if query.get("state", [""])[0] != state:
                code_box["error"] = "state mismatch"
            elif "error" in query:
                code_box["error"] = query.get("error", ["oauth_error"])[0]
                if "error_description" in query:
                    code_box["error_description"] = query.get("error_description", [""])[0]
            else:
                code = query.get("code", [""])[0]
                if code:
                    code_box["code"] = code
                else:
                    code_box["error"] = "missing code"

            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(
                b"<html><body><h1>OAuth complete</h1><p>You can close this tab.</p></body></html>"
            )
            event.set()

        def log_message(self, *_args: object) -> None:
            return

    server = ThreadingHTTPServer(("localhost", port), Handler)
    server.timeout = 1
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    auth_url = build_consent_url(client, scope=scope, state=state)
    print("Open this URL in your browser:")
    print(auth_url)
    if open_browser:
        webbrowser.open(auth_url, new=1, autoraise=True)

    try:
        if not event.wait(timeout_seconds):
            raise TimeoutError("timed out waiting for OAuth redirect")
        if "error" in code_box:
            details = code_box.get("error_description")
            if details:
                raise RuntimeError(f"OAuth redirect returned an error: {code_box['error']} ({details})")
            raise RuntimeError(f"OAuth redirect returned an error: {code_box['error']}")
        code = code_box.get("code")
        if not code:
            raise RuntimeError("OAuth redirect did not contain an authorization code")

        token_payload = exchange_authorization_code(client, code, insecure_ssl=insecure_ssl)
        refresh_token = token_payload.get("refresh_token")
        if not isinstance(refresh_token, str) or not refresh_token.strip():
            raise RuntimeError(
                "Google did not return a refresh_token. Re-run with prompt=consent, or revoke "
                "the app in your Google Account and authorize again."
            )

        refresh_path = Path(refresh_token_file)
        refresh_path.parent.mkdir(parents=True, exist_ok=True)
        refresh_path.write_text(refresh_token.strip() + "\n", encoding="utf-8")

        return {
            "status": "ok",
            "refresh_token_file": str(refresh_path),
            "redirect_uri": redirect_uri,
            "scope": scope,
            "client_id": client.client_id,
        }
    finally:
        server.shutdown()
        thread.join(timeout=5)
