#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
EXTRACTED_DIR="${REPO_DIR}/extracted"

OLD_URL="https://vetiversansfrontieres.org"
WP_ROOT="${1:-}"
NEW_URL="${2:-}"

if [[ -z "${WP_ROOT}" || -z "${NEW_URL}" ]]; then
  echo "Usage: $0 /path/to/wordpress https://new-domain.example"
  exit 1
fi

if [[ ! -d "${EXTRACTED_DIR}" ]]; then
  echo "Missing extracted backup directory: ${EXTRACTED_DIR}"
  exit 1
fi

if [[ ! -f "${EXTRACTED_DIR}/site-db.sql" ]]; then
  echo "Missing SQL dump: ${EXTRACTED_DIR}/site-db.sql"
  exit 1
fi

if [[ ! -d "${WP_ROOT}" ]]; then
  echo "WordPress root does not exist: ${WP_ROOT}"
  exit 1
fi

if ! command -v wp >/dev/null 2>&1; then
  echo "wp-cli is required but was not found in PATH"
  exit 1
fi

if [[ ! -d "${WP_ROOT}/wp-content" ]]; then
  echo "Target does not look like a WordPress install: ${WP_ROOT}/wp-content missing"
  exit 1
fi

echo "Preparing wp-content directories"
mkdir -p "${WP_ROOT}/wp-content/plugins"
mkdir -p "${WP_ROOT}/wp-content/uploads"
mkdir -p "${WP_ROOT}/wp-content/mu-plugins-disabled-old-host"
mkdir -p "${WP_ROOT}/wp-content/plugins-disabled-old-host"

echo "Copying plugins"
rsync -a \
  --exclude 'bluehost-wordpress-plugin/' \
  "${EXTRACTED_DIR}/plugins/" \
  "${WP_ROOT}/wp-content/plugins/"

if [[ -d "${EXTRACTED_DIR}/plugins/bluehost-wordpress-plugin" ]]; then
  echo "Staging old host plugin for reference"
  rsync -a \
    "${EXTRACTED_DIR}/plugins/bluehost-wordpress-plugin/" \
    "${WP_ROOT}/wp-content/plugins-disabled-old-host/bluehost-wordpress-plugin/"
fi

echo "Copying uploads"
rsync -a "${EXTRACTED_DIR}/uploads/" "${WP_ROOT}/wp-content/uploads/"

echo "Staging MU plugins from the old host"
rsync -a "${EXTRACTED_DIR}/mu-plugins/" "${WP_ROOT}/wp-content/mu-plugins-disabled-old-host/"

echo "Checking for Astra theme"
if [[ ! -d "${WP_ROOT}/wp-content/themes/astra" ]]; then
  echo "Astra theme is not installed in ${WP_ROOT}/wp-content/themes/astra"
  echo "Install the Astra theme, then rerun this script."
  exit 1
fi

echo "Importing database"
wp --path="${WP_ROOT}" db import "${EXTRACTED_DIR}/site-db.sql"

echo "Rewriting URLs"
wp --path="${WP_ROOT}" search-replace "${OLD_URL}" "${NEW_URL}" --all-tables --skip-columns=guid

echo "Updating core URL options"
wp --path="${WP_ROOT}" option update siteurl "${NEW_URL}"
wp --path="${WP_ROOT}" option update home "${NEW_URL}"

echo "Cleaning old host plugin state"
wp --path="${WP_ROOT}" plugin deactivate bluehost-wordpress-plugin --quiet || true
wp --path="${WP_ROOT}" option delete epc_settings || true

echo "Flushing rewrite rules"
wp --path="${WP_ROOT}" rewrite flush --hard

echo "Restore complete"
echo "Next steps:"
echo "  1. Log in and verify the front page, /en, and /fr."
echo "  2. Reconnect Elementor Pro, Astra Pro, Jetpack, and Site Kit if required."
echo "  3. Keep staged files under wp-content/*-disabled-old-host disabled unless reviewed."
