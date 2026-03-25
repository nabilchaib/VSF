#!/usr/bin/env python3

from __future__ import annotations

import html
import json
import re
import shutil
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
XML_PATH = ROOT / "vetiverwithoutborders.WordPress.2026-03-24.xml"
SQL_PATH = ROOT / "extracted" / "site-db.sql"
CONTENT_ROOT = ROOT / "content"
DATA_ROOT = ROOT / "data"

WP_NS = {
    "wp": "http://wordpress.org/export/1.2/",
    "content": "http://purl.org/rss/1.0/modules/content/",
    "excerpt": "http://wordpress.org/export/1.2/excerpt/",
}

LEGACY_PREFIX = "https://vetiversansfrontieres.org"

ROUTE_OVERRIDES_FR = {
    "about/contact": "contact",
    "about/services": "services",
}

FR_LEGACY_PATHS = {
    "contact": ["about/contact"],
    "services": ["about/services"],
}


@dataclass
class Item:
    entry_id: str
    entry_type: str
    title: str
    slug: str
    link: str
    date: str
    excerpt: str
    content: str


def slugify_path(url: str) -> str:
    path = url.replace(LEGACY_PREFIX, "", 1).strip("/")
    return path


def strip_tags(value: str) -> str:
    clean = re.sub(r"<[^>]+>", " ", value)
    clean = html.unescape(clean)
    clean = re.sub(r"\s+", " ", clean)
    return clean.strip()


def shorten(value: str, limit: int = 180) -> str:
    if len(value) <= limit:
        return value
    return value[: limit - 1].rsplit(" ", 1)[0] + "…"


def escape_template_literal(value: str) -> str:
    return value.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


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


def translation_map(sql: str) -> dict[str, str]:
    result: dict[str, str] = {}

    for table in ("Yu5_trp_dictionary_en_ca_fr_ca", "Yu5_trp_dictionary_en_ca_fr_fr"):
        section = table_section(sql, table)
        insert = re.search(rf"INSERT INTO `{re.escape(table)}` VALUES (.*?);\n", section, re.S)
        if not insert:
            continue

        for tuple_row in split_tuples(insert.group(1)):
            values = parse_tuple_row(tuple_row)
            if len(values) < 4:
                continue
            original = values[1] or ""
            translated = values[2] or ""
            status = values[3] or "0"
            if status == "2" and translated:
                result[original] = translated

    return dict(sorted(result.items(), key=lambda item: len(item[0]), reverse=True))


def extract_items() -> list[Item]:
    root = ET.parse(XML_PATH).getroot()
    items: list[Item] = []

    for node in root.find("channel").findall("item"):
        entry_type = node.findtext("wp:post_type", default="", namespaces=WP_NS)
        status = node.findtext("wp:status", default="", namespaces=WP_NS)
        link = node.findtext("link", default="").strip()

        if status != "publish" or entry_type not in {"page", "post"} or not link.startswith(LEGACY_PREFIX):
            continue

        items.append(
            Item(
                entry_id=node.findtext("wp:post_id", default="", namespaces=WP_NS),
                entry_type=entry_type,
                title=node.findtext("title", default="").strip(),
                slug=slugify_path(link),
                link=link,
                date=node.findtext("wp:post_date", default="", namespaces=WP_NS),
                excerpt=(node.findtext("excerpt:encoded", default="", namespaces=WP_NS) or "").strip(),
                content=(node.findtext("content:encoded", default="", namespaces=WP_NS) or "").strip(),
            )
        )

    return items


def translate_html(value: str, mapping: dict[str, str]) -> str:
    translated = value
    for original, target in mapping.items():
        translated = translated.replace(original, target)
    return translated


def build_frontmatter(item: Item, locale: str, title: str, description: str, slug: str, legacy_paths: list[str], og_image: str | None) -> str:
    payload = {
        "title": title,
        "slug": slug,
        "locale": locale,
        "type": item.entry_type,
        "description": description,
        "seoTitle": title,
        "seoDescription": description,
        "ogImage": og_image or "",
        "publishedAt": item.date,
        "updatedAt": item.date,
        "tags": [],
        "categories": [],
        "draft": False,
        "legacyPaths": legacy_paths,
    }

    lines = ["---"]
    for key, value in payload.items():
        if isinstance(value, list):
            if value:
                lines.append(f"{key}:")
                for item_value in value:
                    lines.append(f'  - "{item_value}"')
            else:
                lines.append(f"{key}: []")
        elif isinstance(value, bool):
            lines.append(f"{key}: {'true' if value else 'false'}")
        else:
            safe = str(value).replace('"', '\\"')
            lines.append(f'{key}: "{safe}"')
    lines.append("---")
    return "\n".join(lines)


def find_og_image(html_content: str) -> str | None:
    match = re.search(r'src="(https://vetiversansfrontieres.org/wp-content/uploads/[^"]+)"', html_content)
    if match:
        return match.group(1)
    return None


def render_mdx(item: Item, locale: str, title: str, slug: str, legacy_paths: list[str], html_content: str) -> str:
    description_source = item.excerpt or strip_tags(html_content)
    description = shorten(description_source)
    og_image = find_og_image(html_content)
    frontmatter = build_frontmatter(item, locale, title, description, slug, legacy_paths, og_image)
    body_lines = [frontmatter, "", f"<HtmlContent html={{`{escape_template_literal(html_content)}`}} />"]

    normalized_slug = slug or "home"
    if normalized_slug in {"contact", "about/contact"}:
        body_lines.extend(["", "<FormEmbed kind=\"contact\" />"])
    if normalized_slug == "" or normalized_slug == "home":
        body_lines.extend(["", "<NewsletterSignup />"])

    return "\n".join(body_lines) + "\n"


def target_path(locale: str, item: Item, slug: str) -> Path:
    base = CONTENT_ROOT / locale / f"{item.entry_type}s"
    if slug == "":
        return base / "home.mdx"
    filename = slug.replace("/", "__") + ".mdx"
    return base / filename


def write_item(item: Item, locale: str, title: str, slug: str, legacy_paths: list[str], content: str) -> None:
    destination = target_path(locale, item, slug)
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(render_mdx(item, locale, title, slug, legacy_paths, content), encoding="utf8")


def media_manifest(items: Iterable[Item]) -> dict[str, str]:
    mapping: dict[str, str] = {}
    for item in items:
        for match in re.findall(r"https://vetiversansfrontieres.org/wp-content/uploads/[^\"')\s>]+", item.content):
            relative = match.split("/wp-content/uploads/", 1)[1]
            mapping[match] = relative
    return dict(sorted(mapping.items()))


def main() -> None:
    sql = SQL_PATH.read_text(encoding="utf8", errors="ignore")
    translations = translation_map(sql)
    items = extract_items()

    if CONTENT_ROOT.exists():
        shutil.rmtree(CONTENT_ROOT)
    CONTENT_ROOT.mkdir(parents=True, exist_ok=True)
    DATA_ROOT.mkdir(parents=True, exist_ok=True)

    route_manifest: dict[str, dict[str, dict[str, list[str] | str]]] = {"en": {}, "fr": {}}

    for item in items:
        english_slug = item.slug
        english_legacy = [f"en/{english_slug}".strip("/")] if english_slug else ["en"]
        write_item(item, "en", item.title, english_slug, english_legacy, item.content)
        route_manifest["en"][english_slug] = {"canonical": english_slug, "legacyPaths": english_legacy}

        french_slug = ROUTE_OVERRIDES_FR.get(english_slug, english_slug)
        french_legacy = FR_LEGACY_PATHS.get(french_slug, [])
        translated_title = translate_html(item.title, translations) or item.title
        translated_content = translate_html(item.content, translations)
        translated_excerpt = translate_html(item.excerpt, translations)

        translated_item = Item(
            entry_id=item.entry_id,
            entry_type=item.entry_type,
            title=translated_title,
            slug=french_slug,
            link=item.link,
            date=item.date,
            excerpt=translated_excerpt,
            content=translated_content,
        )

        write_item(translated_item, "fr", translated_title, french_slug, french_legacy, translated_content)
        route_manifest["fr"][french_slug] = {"canonical": french_slug, "legacyPaths": french_legacy}

    (DATA_ROOT / "route-manifest.json").write_text(json.dumps(route_manifest, indent=2), encoding="utf8")
    (DATA_ROOT / "media-manifest.json").write_text(json.dumps(media_manifest(items), indent=2), encoding="utf8")


if __name__ == "__main__":
    main()
