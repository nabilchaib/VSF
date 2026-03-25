#!/usr/bin/env python3

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
UPLOADS = ROOT / "extracted" / "uploads"
DESTINATION = ROOT / "data" / "media-library.json"


def main() -> None:
    entries: dict[str, dict[str, str | int]] = {}

    for file_path in sorted(UPLOADS.rglob("*")):
        if not file_path.is_file():
            continue

        relative = file_path.relative_to(UPLOADS).as_posix()
        entries[relative] = {
            "sourcePath": str(file_path),
            "relativePath": relative,
            "size": file_path.stat().st_size,
        }

    DESTINATION.parent.mkdir(parents=True, exist_ok=True)
    DESTINATION.write_text(json.dumps(entries, indent=2), encoding="utf8")


if __name__ == "__main__":
    main()
