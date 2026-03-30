from __future__ import annotations

from collections import defaultdict
from collections.abc import Iterable, Mapping
from typing import Any


def _to_float(value: Any) -> float:
    if value in (None, ""):
        return 0.0
    return float(value)


def _to_int(value: Any) -> int:
    if value in (None, ""):
        return 0
    return int(value)


def _canonical_row(row: Mapping[str, Any]) -> dict[str, Any]:
    return {
        "campaign": row.get("campaign") or row.get("campaign_name") or "unknown",
        "geography": row.get("geography") or row.get("geo") or row.get("region") or "unknown",
        "language": row.get("language") or "unknown",
        "device": row.get("device") or "unknown",
        "spend": _to_float(row.get("spend")),
        "clicks": _to_int(row.get("clicks")),
        "impressions": _to_int(row.get("impressions")),
        "conversions": _to_float(row.get("conversions")),
        "conversion_value": _to_float(row.get("conversion_value")),
        "conversion_tracking": bool(row.get("conversion_tracking", True)),
        "ad_status": str(row.get("ad_status") or row.get("status") or "").upper(),
    }


def _aggregate(rows: Iterable[Mapping[str, Any]]) -> dict[str, float]:
    totals = {
        "spend": 0.0,
        "clicks": 0.0,
        "impressions": 0.0,
        "conversions": 0.0,
        "conversion_value": 0.0,
    }
    for row in rows:
        canonical = _canonical_row(row)
        totals["spend"] += canonical["spend"]
        totals["clicks"] += canonical["clicks"]
        totals["impressions"] += canonical["impressions"]
        totals["conversions"] += canonical["conversions"]
        totals["conversion_value"] += canonical["conversion_value"]

    impressions = totals["impressions"]
    clicks = totals["clicks"]
    conversions = totals["conversions"]
    spend = totals["spend"]
    totals["ctr"] = (clicks / impressions * 100.0) if impressions else 0.0
    totals["conversion_rate"] = (conversions / clicks * 100.0) if clicks else 0.0
    totals["cpa"] = (spend / conversions) if conversions else 0.0
    totals["roas"] = (totals["conversion_value"] / spend) if spend else 0.0
    return totals


def summarize_report(
    rows: Iterable[Mapping[str, Any]],
    cpa_outlier_threshold: float = 100.0,
) -> dict[str, Any]:
    canonical_rows = [_canonical_row(row) for row in rows]
    totals = _aggregate(canonical_rows)

    breakouts: dict[str, dict[str, dict[str, float]]] = {}
    for field in ("campaign", "geography", "language", "device"):
        grouped: dict[str, list[Mapping[str, Any]]] = defaultdict(list)
        for row in canonical_rows:
            grouped[str(row[field])].append(row)
        if len(grouped) > 1 or next(iter(grouped), "unknown") != "unknown":
            breakouts[field] = {name: _aggregate(group_rows) for name, group_rows in grouped.items()}

    anomalies: list[str] = []
    for row in canonical_rows:
        if row["impressions"] == 0:
            anomalies.append(f"zero_impressions:{row['campaign']}")
        if row["spend"] > 0 and row["conversions"] == 0:
            anomalies.append(f"spend_without_conversions:{row['campaign']}")
        if row["spend"] > 0 and row["conversions"] > 0:
            cpa = row["spend"] / row["conversions"]
            if cpa > cpa_outlier_threshold:
                anomalies.append(f"high_cpa:{row['campaign']}")
        if row["ad_status"] == "REJECTED":
            anomalies.append(f"rejected_ad:{row['campaign']}")
        if not row["conversion_tracking"]:
            anomalies.append(f"missing_conversion_tracking:{row['campaign']}")

    return {
        "totals": totals,
        "breakouts": breakouts,
        "anomalies": anomalies,
    }
