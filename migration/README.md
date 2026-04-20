# WordPress Rebuild Runbook

> Historical reference only. This runbook documents the old WordPress restore path and is no longer part of the active migration workflow.

This repository contains enough to rebuild the site on a new WordPress host.

It does **not** contain:

- WordPress core
- `wp-config.php`
- the `astra` theme files
- DNS / SSL / web server configuration

## What this rebuild expects

1. A fresh WordPress install on the new host.
2. The `astra` theme installed on that new host before the restore.
3. SSH or shell access with `wp` available, or another way to run equivalent DB import steps.
4. A database already created for the new WordPress install.

## What the restore script does

- copies `plugins/` except the old host plugin
- stages old host MU plugins instead of auto-enabling them
- copies `uploads/`
- imports the SQL dump
- rewrites URLs from the old domain to the new one
- forces `siteurl` and `home`
- flushes permalinks

## Important exclusions

These were tied to the old hosting stack and should not be enabled blindly on the new host:

- `bluehost-wordpress-plugin`
- `mu-plugins/sso.php`
- `mu-plugins/endurance-page-cache.php`

The restore script stages those in a disabled folder for reference.

## Usage

From this repository:

```bash
./migration/restore-to-wordpress.sh /path/to/new/wordpress https://new-domain.example
```

Example:

```bash
./migration/restore-to-wordpress.sh ~/public_html/example https://example.org
```

## What you still need to do manually

1. Install the Astra theme on the new host.
2. Confirm the new site loads after import.
3. Reconnect any premium/plugin licenses:
   - Elementor Pro
   - Astra Pro
4. Reconnect integrations if needed:
   - Jetpack
   - Site Kit by Google
   - email or form delivery plugins
5. Point DNS to the new host once validation is complete.
6. Reissue SSL on the new host.

## Notes

- The main backup set is from `2026-02-26`.
- The XML export is from `2026-03-24` and can be treated as a supplemental fallback export.
- The live site in the SQL backup used table prefix `Yu5_`.
- The site is bilingual through TranslatePress with `/en` and `/fr`.
