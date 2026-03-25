#!/usr/bin/env python3

from __future__ import annotations

import json
import re
import shutil
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SQL_PATH = ROOT / "extracted" / "site-db.sql"
XML_PATH = ROOT / "vetiverwithoutborders.WordPress.2026-03-24.xml"
DESTINATION = ROOT / "data" / "elementor"

WP_NS = {
    "wp": "http://wordpress.org/export/1.2/",
}

TRACKED_META_KEYS = {
    "_elementor_data",
    "_elementor_page_settings",
    "_elementor_template_type",
    "_elementor_edit_mode",
    "_elementor_version",
    "_elementor_pro_version",
    "_elementor_template_widget_type",
    "_wp_page_template",
}


@dataclass
class ItemMeta:
    post_id: int
    post_type: str
    status: str
    title: str
    link: str
    slug: str


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value)
    return value.strip("-") or "untitled"


def table_section(sql: str, table: str) -> str:
    match = re.search(rf"# Table: `{re.escape(table)}`(.*?)(?=\n# Table: `|\Z)", sql, re.S)
    if not match:
        raise RuntimeError(f"Table not found: {table}")
    return match.group(1)


def split_tuples(values_blob: str) -> list[str]:
    tuples: list[str] = []
    depth = 0
    in_string = False
    escape = False
    start = 0

    for idx, char in enumerate(values_blob):
        if in_string:
            if escape:
                escape = False
            elif char == "\\":
                escape = True
            elif char == "'":
                in_string = False
            continue

        if char == "'":
            in_string = True
        elif char == "(":
            if depth == 0:
                start = idx
            depth += 1
        elif char == ")":
            depth -= 1
            if depth == 0:
                tuples.append(values_blob[start : idx + 1])

    return tuples


def parse_tuple_row(tuple_row: str) -> list[str | None]:
    assert tuple_row.startswith("(") and tuple_row.endswith(")")
    body = tuple_row[1:-1]
    values: list[str | None] = []
    buffer: list[str] = []
    in_string = False
    escape = False

    idx = 0
    while idx < len(body):
        char = body[idx]

        if in_string:
            if escape:
                buffer.append(char)
                escape = False
            elif char == "\\":
                escape = True
            elif char == "'":
                in_string = False
            else:
                buffer.append(char)
            idx += 1
            continue

        if char == "'":
            in_string = True
        elif char == ",":
            token = "".join(buffer).strip()
            values.append(None if token == "NULL" else token)
            buffer = []
        else:
            buffer.append(char)
        idx += 1

    token = "".join(buffer).strip()
    values.append(None if token == "NULL" else token)
    return values


def load_item_metadata() -> dict[int, ItemMeta]:
    root = ET.parse(XML_PATH).getroot()
    items = root.find("channel").findall("item")
    metadata: dict[int, ItemMeta] = {}

    for item in items:
        post_id = item.findtext("wp:post_id", default="", namespaces=WP_NS)
        if not post_id:
            continue
        link = item.findtext("link", default="").strip()
        metadata[int(post_id)] = ItemMeta(
            post_id=int(post_id),
            post_type=item.findtext("wp:post_type", default="", namespaces=WP_NS),
            status=item.findtext("wp:status", default="", namespaces=WP_NS),
            title=item.findtext("title", default="").strip(),
            link=link,
            slug=link.replace("https://vetiversansfrontieres.org", "", 1).strip("/"),
        )

    return metadata


def load_elementor_meta() -> dict[int, dict[str, str]]:
    sql = SQL_PATH.read_text(encoding="utf8", errors="ignore")
    section = table_section(sql, "Yu5_postmeta")
    insert = re.search(r"INSERT INTO `Yu5_postmeta` VALUES (.*?);\n", section, re.S)
    if not insert:
        raise RuntimeError("Could not find Yu5_postmeta INSERT block")

    collected: dict[int, dict[str, str]] = {}
    for tuple_row in split_tuples(insert.group(1)):
        values = parse_tuple_row(tuple_row)
        if len(values) < 4:
            continue

        post_id = int(values[1] or "0")
        meta_key = values[2] or ""
        meta_value = values[3] or ""

        if meta_key not in TRACKED_META_KEYS:
            continue

        collected.setdefault(post_id, {})[meta_key] = meta_value

    return collected


def parse_json_if_possible(value: str):
    if not value:
        return None
    try:
        return json.loads(value)
    except json.JSONDecodeError:
        return value


def build_record(post_id: int, meta: dict[str, str], item_meta: ItemMeta | None) -> dict:
    title = item_meta.title if item_meta else f"Post {post_id}"
    slug = item_meta.slug if item_meta else ""
    return {
        "postId": post_id,
        "postType": item_meta.post_type if item_meta else "unknown",
        "status": item_meta.status if item_meta else "unknown",
        "title": title,
        "slug": slug,
        "link": item_meta.link if item_meta else "",
        "meta": {
            "_elementor_template_type": meta.get("_elementor_template_type", ""),
            "_elementor_edit_mode": meta.get("_elementor_edit_mode", ""),
            "_elementor_version": meta.get("_elementor_version", ""),
            "_elementor_pro_version": meta.get("_elementor_pro_version", ""),
            "_elementor_template_widget_type": meta.get("_elementor_template_widget_type", ""),
            "_wp_page_template": meta.get("_wp_page_template", ""),
        },
        "elementorPageSettings": parse_json_if_possible(meta.get("_elementor_page_settings", "")),
        "elementorData": parse_json_if_possible(meta.get("_elementor_data", "")),
    }


def write_index(records: list[dict]) -> None:
    json_path = DESTINATION / "index.json"
    md_path = DESTINATION / "README.md"

    json_path.write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding="utf8")

    lines = [
        "# Elementor Extraction",
        "",
        "This folder contains extracted `_elementor_data` payloads from `Yu5_postmeta` in `extracted/site-db.sql`.",
        "",
        "| Post ID | Type | Status | Title | Template Type | File |",
        "| --- | --- | --- | --- | --- | --- |",
    ]

    for record in records:
        filename = record["fileName"]
        lines.append(
            f"| {record['postId']} | {record['postType']} | {record['status']} | {record['title']} | "
            f"{record['meta']['_elementor_template_type'] or '-'} | `{filename}` |"
        )

    md_path.write_text("\n".join(lines) + "\n", encoding="utf8")


def main() -> None:
    metadata = load_item_metadata()
    elementor_meta = load_elementor_meta()

    if DESTINATION.exists():
        shutil.rmtree(DESTINATION)
    DESTINATION.mkdir(parents=True, exist_ok=True)

    records: list[dict] = []

    for post_id, meta in sorted(elementor_meta.items()):
        if "_elementor_data" not in meta:
            continue

        item_meta = metadata.get(post_id)
        record = build_record(post_id, meta, item_meta)
        base_name = slugify(f"{record['postType']}-{post_id}-{record['title']}")
        file_name = f"{base_name}.json"
        record["fileName"] = file_name

        (DESTINATION / file_name).write_text(
            json.dumps(record, indent=2, ensure_ascii=False),
            encoding="utf8",
        )
        records.append(record)

    write_index(records)


if __name__ == "__main__":
    main()
