# Google Ads Automation

This directory contains the Google Ads automation subsystem for the nonprofit workflow.

## Current scope

- config parsing
- campaign validation
- live account snapshotting
- Ad Grants cleanup planning
- geo target normalization
- dry-run plan generation
- report summarization
- live-mutation guardrails
- campaign draft creation

Live Google Ads mutations are approval-gated, and draft creation is available through the API without changing serving.

## Commands

Validate the sample config:

```bash
python3 -m ads.cli validate --config ads/examples/campaigns.sample.json
```

Generate a dry-run plan:

```bash
python3 -m ads.cli plan --config ads/examples/campaigns.sample.json
```

Ready-to-use grant sample:

```bash
python3 -m ads.cli validate --config ads/examples/campaigns.grant.sample.json
python3 -m ads.cli plan --config ads/examples/campaigns.grant.sample.json
```

Apply a live campaign mutation after approval:

```bash
python3 -m ads.cli apply --config ads/examples/campaigns.sample.json --confirm-live
```

Create a draft from an existing campaign:

```bash
python3 -m ads.cli draft --base-campaign customers/9071089180/campaigns/12345678901 --draft-name "VSF Draft 2026-04-10"
```

Inspect the live account snapshot:

```bash
python3 -m ads.cli snapshot --customer-id 9071089180
```

The granted Google Ads account currently used by the nonprofit workflow is `9071089180`.

Generate the grant-aware cleanup plan:

```bash
python3 -m ads.cli cleanup-plan --config ads/examples/adgrants.cleanup.sample.json
```

Apply the cleanup plan after approval:

```bash
python3 -m ads.cli cleanup-apply --config ads/examples/adgrants.cleanup.sample.json --confirm-live
```

Run the unit tests:

```bash
python3 -m unittest discover -s ads/tests -t .
```

## Environment

The live client loader expects the following environment variables:

- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_DEVELOPER_TOKEN_FILE`
- `GOOGLE_ADS_CREDENTIALS_DIR`
- `GOOGLE_ADS_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_ID_FILE`
- `GOOGLE_ADS_CLIENT_SECRET`
- `GOOGLE_ADS_CLIENT_SECRET_FILE`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_REFRESH_TOKEN_FILE`
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` optional
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID_FILE` optional
- `GOOGLE_ADS_CUSTOMER_ID` optional
- `GOOGLE_ADS_CUSTOMER_ID_FILE` optional
- `GOOGLE_ADS_API_VERSION` optional
- `GOOGLE_ADS_ALLOW_LIVE_MUTATION` required for live mutation guards

If a `*_FILE` variable is set, the loader reads the first non-empty line from that file instead of the inline environment variable. This is the preferred way to keep local secrets out of the shell history.
If `GOOGLE_ADS_CREDENTIALS_DIR` is set, the loader reads the standard credential filenames from that folder:

- `API key`
- `client_id`
- `client_secret`
- `refresh_token`
- `manager_id`
- `customer_id`

## Architecture

- `ads/config.py` loads and validates config files.
- `ads/validators.py` normalizes account IDs, dates, geo targets, and naming.
- `ads/cleanup.py` validates the grant-aware cleanup config and builds the replacement plan.
- `ads/snapshot.py` reads the live account inventory.
- `ads/campaigns.py` builds dry-run mutation plans.
- `ads/mutations.py` executes approved live mutations through the Google Ads REST API.
- `ads/mutations.py` also creates campaign drafts through `campaignDrafts:mutate`.
- `ads/reporting.py` aggregates performance rows and flags anomalies.
- `ads/client.py` provides an optional official Google Ads API client loader.
- `ads/approvals.py` blocks live mutation until explicit approval exists.
- `ads/cli.py` exposes validate, plan, snapshot, cleanup-plan, cleanup-apply, apply, and reporting commands.

## Safety

- New campaigns start paused by default.
- Geo target inputs are normalized before use.
- Dry-run output is required before any live operation.
- The `apply` and `cleanup-apply` commands include the plan in their output, check the approval gate, and then execute live mutations when approval is present.
- The `draft` command is preview-first and only calls the API when `--confirm-create` is provided.
- Live mutation currently supports paused Search campaigns with max-conversions bidding.
