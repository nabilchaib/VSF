from __future__ import annotations

import re
from datetime import date, datetime
from collections.abc import Iterable, Sequence
from urllib.parse import urlparse


class ValidationError(ValueError):
    """Raised when campaign config or targeting data is invalid."""


ACCOUNT_ID_PATTERN = re.compile(r"^\d{10}$")
CANADIAN_FSA_PATTERN = re.compile(r"^[A-Z]\d[A-Z]$")
CANADIAN_POSTAL_PATTERN = re.compile(r"^[A-Z]\d[A-Z]\d[A-Z]\d$")
US_ZIP_PATTERN = re.compile(r"^\d{5}$")
US_ZIP_PLUS4_PATTERN = re.compile(r"^\d{9}$")


def normalize_account_id(account_id: str) -> str:
    digits = re.sub(r"\D", "", account_id)
    if not ACCOUNT_ID_PATTERN.fullmatch(digits):
        raise ValidationError("account_id must contain exactly 10 digits")
    return digits


def normalize_language_code(language: str) -> str:
    normalized = language.strip().upper()
    if normalized not in {"EN", "FR"}:
        raise ValidationError("language must be EN or FR")
    return normalized


def normalize_campaign_name(campaign_name: str) -> str:
    parts = campaign_name.strip().upper().split("_")
    if len(parts) not in {6, 7}:
        raise ValidationError(
            "campaign_name must follow {CHANNEL}_{COUNTRY}_{REGION}_{GOAL}_{LANG}_{YYYYMM}"
            " with an optional _TEST or _PILOT suffix"
        )

    channel, country, region, goal, language, yyyymm = parts[:6]
    suffix = parts[6] if len(parts) == 7 else None

    for label, value in {
        "channel": channel,
        "country": country,
        "region": region,
        "goal": goal,
        "language": language,
    }.items():
        if not re.fullmatch(r"[A-Z0-9]+", value):
            raise ValidationError(f"campaign_name {label} must be uppercase alphanumeric")

    if not re.fullmatch(r"\d{6}", yyyymm):
        raise ValidationError("campaign_name must end with YYYYMM")

    month = int(yyyymm[4:6])
    if month < 1 or month > 12:
        raise ValidationError("campaign_name month must be between 01 and 12")

    if suffix and suffix not in {"TEST", "PILOT"}:
        raise ValidationError("campaign_name suffix must be TEST or PILOT")

    return campaign_name.strip().upper()


def normalize_geo_target(country: str, target: str) -> str:
    normalized_country = country.strip().upper()
    cleaned = re.sub(r"\s+", "", target.strip().upper())

    if normalized_country == "CA":
        if CANADIAN_FSA_PATTERN.fullmatch(cleaned):
            return cleaned
        if CANADIAN_POSTAL_PATTERN.fullmatch(cleaned):
            return cleaned[:3]
        raise ValidationError(
            "Canadian geo targets must be 3-character FSAs or 6-character postal codes"
        )

    if normalized_country == "US":
        zip_digits = re.sub(r"\D", "", cleaned)
        if US_ZIP_PATTERN.fullmatch(zip_digits):
            return zip_digits
        if US_ZIP_PLUS4_PATTERN.fullmatch(zip_digits):
            return zip_digits[:5]
        raise ValidationError("US geo targets must be 5-digit ZIP codes")

    raise ValidationError(f"unsupported country for geo targeting: {country}")


def normalize_geo_targets(country: str, targets: Sequence[str]) -> list[str]:
    if not targets:
        raise ValidationError("geo_targets must contain at least one target")

    normalized: list[str] = []
    seen: set[str] = set()

    for raw_target in targets:
        target = normalize_geo_target(country, raw_target)
        if target not in seen:
            normalized.append(target)
            seen.add(target)

    return normalized


def validate_budget_daily(budget_daily: float) -> float:
    try:
        amount = float(budget_daily)
    except (TypeError, ValueError) as exc:
        raise ValidationError("budget_daily must be numeric") from exc

    if amount <= 0:
        raise ValidationError("budget_daily must be greater than zero")
    if amount > 100000:
        raise ValidationError("budget_daily is unreasonably high")
    return amount


def parse_iso_date(value: str) -> date:
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except ValueError as exc:
        raise ValidationError(f"invalid ISO date: {value}") from exc


def validate_date_range(start_date: str, end_date: str) -> tuple[date, date]:
    start = parse_iso_date(start_date)
    end = parse_iso_date(end_date)
    if end < start:
        raise ValidationError("end_date must be on or after start_date")
    return start, end


def ensure_string_list(values: Sequence[str] | Iterable[str], field_name: str) -> list[str]:
    if isinstance(values, (str, bytes)) or not isinstance(values, Iterable):
        raise ValidationError(f"{field_name} must be a list of strings")

    cleaned: list[str] = []
    for value in values:
        if not isinstance(value, str) or not value.strip():
            raise ValidationError(f"{field_name} must contain non-empty strings")
        cleaned.append(value.strip())
    return cleaned


def normalize_positive_search_keyword(keyword: str) -> str:
    cleaned = " ".join(keyword.strip().lower().split())
    if not cleaned:
        raise ValidationError("search keyword must be a non-empty string")
    if cleaned.startswith('"') or cleaned.startswith("["):
        raise ValidationError("search keyword should be provided as plain text, not match syntax")
    if len(cleaned.split()) < 2:
        raise ValidationError("search keyword must contain at least two words")
    return f'"{cleaned}"'


def normalize_positive_search_keywords(keywords: Sequence[str] | Iterable[str]) -> list[str]:
    cleaned = ensure_string_list(keywords, "keywords")
    normalized: list[str] = []
    seen: set[str] = set()
    for keyword in cleaned:
        normalized_keyword = normalize_positive_search_keyword(keyword)
        if normalized_keyword not in seen:
            normalized.append(normalized_keyword)
            seen.add(normalized_keyword)
    return normalized


def normalize_url_list(urls: Sequence[str] | Iterable[str], field_name: str) -> list[str]:
    cleaned = ensure_string_list(urls, field_name)
    normalized: list[str] = []
    seen: set[str] = set()
    for url in cleaned:
        parsed = urlparse(url)
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            raise ValidationError(f"{field_name} must contain valid http or https URLs")
        candidate = url.rstrip("/")
        if candidate not in seen:
            normalized.append(candidate)
            seen.add(candidate)
    return normalized


def validate_budget_allocation(*, launch_total: float, target_total: float, cap_daily: float) -> None:
    if launch_total > target_total:
        raise ValidationError("launch budget total must not exceed target budget total")
    if target_total > cap_daily + 1e-9:
        raise ValidationError("target budget total must not exceed the Ad Grants daily cap")
