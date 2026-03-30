from __future__ import annotations

import os
import json
from collections.abc import Mapping
from dataclasses import dataclass
from pathlib import Path
from typing import Any
import ssl
import urllib.parse
import urllib.request
from urllib.error import HTTPError

from .validators import ValidationError, normalize_account_id


try:  # pragma: no cover - optional dependency
    from google.ads.googleads.client import GoogleAdsClient  # type: ignore
except ImportError:  # pragma: no cover - optional dependency
    GoogleAdsClient = None


@dataclass(frozen=True)
class GoogleAdsEnvironment:
    developer_token: str
    client_id: str
    client_secret: str
    refresh_token: str
    login_customer_id: str | None = None
    customer_id: str | None = None
    api_version: str | None = None


def load_google_ads_environment(environ: Mapping[str, str] | None = None) -> GoogleAdsEnvironment:
    env = os.environ if environ is None else environ

    credentials_dir = env.get("GOOGLE_ADS_CREDENTIALS_DIR", "").strip() or None

    def read_value(name: str, *, required: bool = True) -> str | None:
        if credentials_dir:
            directory = Path(credentials_dir)
            if not directory.exists():
                raise ValidationError(f"GOOGLE_ADS_CREDENTIALS_DIR does not exist: {directory}")

            directory_map = {
                "GOOGLE_ADS_DEVELOPER_TOKEN": "API key",
                "GOOGLE_ADS_CLIENT_ID": "client_id",
                "GOOGLE_ADS_CLIENT_SECRET": "client_secret",
                "GOOGLE_ADS_REFRESH_TOKEN": "refresh_token",
                "GOOGLE_ADS_LOGIN_CUSTOMER_ID": "manager_id",
                "GOOGLE_ADS_CUSTOMER_ID": "customer_id",
            }
            file_name = directory_map.get(name)
            if file_name:
                path = directory / file_name
                if path.exists():
                    value = path.read_text(encoding="utf-8").splitlines()[0].strip()
                    if value:
                        return value

        file_name = f"{name}_FILE"
        file_path = env.get(file_name, "").strip()
        if file_path:
            path = Path(file_path)
            if not path.exists():
                raise ValidationError(f"secret file does not exist for {name}: {path}")
            value = path.read_text(encoding="utf-8").splitlines()[0].strip()
            if not value:
                raise ValidationError(f"secret file is empty for {name}: {path}")
            return value

        value = env.get(name, "").strip()
        if not value and required:
            raise ValidationError(f"missing required Google Ads environment variable: {name}")
        return value or None

    login_customer_id = read_value("GOOGLE_ADS_LOGIN_CUSTOMER_ID", required=False)
    customer_id = read_value("GOOGLE_ADS_CUSTOMER_ID", required=False)

    if login_customer_id is not None:
        login_customer_id = normalize_account_id(login_customer_id)
    if customer_id is not None:
        customer_id = normalize_account_id(customer_id)

    api_version = env.get("GOOGLE_ADS_API_VERSION", "").strip() or None

    return GoogleAdsEnvironment(
        developer_token=read_value("GOOGLE_ADS_DEVELOPER_TOKEN"),
        client_id=read_value("GOOGLE_ADS_CLIENT_ID"),
        client_secret=read_value("GOOGLE_ADS_CLIENT_SECRET"),
        refresh_token=read_value("GOOGLE_ADS_REFRESH_TOKEN"),
        login_customer_id=login_customer_id,
        customer_id=customer_id,
        api_version=api_version,
    )


def build_google_ads_client(
    env: GoogleAdsEnvironment,
) -> Any:
    if GoogleAdsClient is None:
        raise RuntimeError(
            "google-ads is not installed. Install the official Google Ads API client "
            "before attempting live mutations."
        )

    config: dict[str, Any] = {
        "developer_token": env.developer_token,
        "client_id": env.client_id,
        "client_secret": env.client_secret,
        "refresh_token": env.refresh_token,
        "use_proto_plus": True,
    }
    if env.login_customer_id:
        config["login_customer_id"] = env.login_customer_id

    if env.api_version:
        return GoogleAdsClient.load_from_dict(config, version=env.api_version)
    return GoogleAdsClient.load_from_dict(config)


def exchange_access_token(env: GoogleAdsEnvironment, *, insecure_ssl: bool = False) -> str:
    context = ssl._create_unverified_context() if insecure_ssl else None
    body = urllib.parse.urlencode(
        {
            "grant_type": "refresh_token",
            "client_id": env.client_id,
            "client_secret": env.client_secret,
            "refresh_token": env.refresh_token,
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        "https://www.googleapis.com/oauth2/v3/token",
        data=body,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(request, timeout=30, context=context) as response:
        payload = json.loads(response.read().decode("utf-8"))
    access_token = payload.get("access_token")
    if not isinstance(access_token, str) or not access_token:
        raise RuntimeError("OAuth token exchange did not return an access_token")
    return access_token


def google_ads_request(
    customer_id: str,
    service_path: str,
    env: GoogleAdsEnvironment,
    *,
    method: str = "POST",
    body: Mapping[str, Any] | None = None,
    login_customer_id: str | None = None,
    api_version: str | None = None,
    insecure_ssl: bool = False,
    access_token: str | None = None,
) -> dict[str, Any]:
    context = ssl._create_unverified_context() if insecure_ssl else None
    token = access_token or exchange_access_token(env, insecure_ssl=insecure_ssl)
    version = api_version or env.api_version or "v22"
    url = (
        f"https://googleads.googleapis.com/{version}/customers/"
        f"{normalize_account_id(customer_id)}/{service_path.lstrip('/')}"
    )
    headers = {
        "Authorization": f"Bearer {token}",
        "developer-token": env.developer_token,
        "Content-Type": "application/json",
    }
    if login_customer_id or env.login_customer_id:
        headers["login-customer-id"] = login_customer_id or env.login_customer_id or ""

    request = urllib.request.Request(
        url,
        data=json.dumps(body or {}).encode("utf-8"),
        headers=headers,
        method=method.upper(),
    )
    try:
        with urllib.request.urlopen(request, timeout=30, context=context) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as exc:
        body_text = exc.read().decode("utf-8")
        raise RuntimeError(f"Google Ads API request failed: {exc.code} {body_text}") from exc

    if not isinstance(payload, dict):
        raise RuntimeError("Google Ads API response did not contain an object payload")
    return payload


def google_ads_mutate(
    customer_id: str,
    service_path: str,
    operations: list[dict[str, Any]],
    env: GoogleAdsEnvironment,
    *,
    login_customer_id: str | None = None,
    api_version: str | None = None,
    insecure_ssl: bool = False,
    access_token: str | None = None,
    validate_only: bool = False,
) -> dict[str, Any]:
    body: dict[str, Any] = {"operations": operations}
    if validate_only:
        body["validateOnly"] = True
    return google_ads_request(
        customer_id,
        service_path,
        env,
        method="POST",
        body=body,
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
        access_token=access_token,
    )


def google_ads_search(
    customer_id: str,
    query: str,
    env: GoogleAdsEnvironment,
    *,
    login_customer_id: str | None = None,
    api_version: str | None = None,
    insecure_ssl: bool = False,
) -> list[dict[str, Any]]:
    payload = google_ads_request(
        customer_id,
        "googleAds:search",
        env,
        method="POST",
        body={"query": query},
        login_customer_id=login_customer_id,
        api_version=api_version,
        insecure_ssl=insecure_ssl,
    )
    results = payload.get("results", [])
    if not isinstance(results, list):
        raise RuntimeError("Google Ads API response did not contain a results list")
    return results
