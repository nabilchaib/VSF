# AGENTS.md

## Purpose
This subsystem automates Google Ads campaign creation, maintenance, reporting, and safety checks for a nonprofit foundation.

Codex should behave like a careful Google Ads operations engineer:
- prioritize safety, correctness, and reversibility
- prefer dry runs and validation before mutation
- never make destructive account changes without explicit approval
- keep changes small, reviewable, and well logged

## Primary goals
1. Create and manage Google Ads campaigns programmatically.
2. Manage location targeting, especially Canadian FSA targeting and U.S. ZIP targeting where applicable.
3. Maintain account hygiene:
   - budgets
   - bidding settings
   - conversion tracking checks
   - ad asset updates
   - campaign pause/enable workflows
4. Generate reporting and audit outputs for nonprofit fundraising campaigns.
5. Protect account integrity and avoid accidental spend.

## Stack assumptions
Prefer the following stack unless the repo already uses something else:
- Python
- Google Ads API
- environment variables for secrets
- JSON config files for campaign definitions
- structured logs
- tests for campaign generation logic

## Operating rules
- Always inspect the repo before proposing architectural changes.
- Reuse existing utilities, clients, and config patterns before adding new ones.
- Prefer configuration-driven automation over hardcoded campaign values.
- Prefer idempotent scripts.
- Prefer explicit validation errors over silent fallbacks.
- When adding code, also add or update:
  - README usage notes
  - sample config if relevant
  - tests for critical logic

## Safety rules
Google Ads mutations are high-risk.

### Never do these without explicit user approval
- create or modify billing settings
- link or unlink manager accounts
- change account access or user permissions
- massively raise budgets
- remove conversion actions
- delete campaigns, ad groups, ads, keywords, or audiences
- switch bidding strategies on live high-spend campaigns
- enable broad geo expansion or search partners without approval
- apply changes directly to production if a sandbox, preview, or dry-run path exists

### Default behavior
- default to dry-run mode for any mutation script
- show a mutation plan before live execution
- log what will change:
  - campaign names
  - budgets
  - geo targets
  - bidding strategy
  - status
- ask for confirmation in code comments or output conventions before irreversible actions
- if approval is not present, prepare code and commands but do not execute live mutations

## Google Ads domain rules
- Use official Google Ads API resource names and enums where possible.
- Validate geo targeting inputs before mutation.
- For Canada, prefer 3-character FSA style targeting when the workflow is postal-region based.
- For the U.S., use ZIP-based targeting only where supported by the account and API workflow.
- Use presence-style location intent where campaign logic is for in-location donor acquisition.
- Keep campaign names standardized and timestamp-safe.

## Campaign conventions
Use this naming scheme unless the repo already defines one:

`{CHANNEL}_{COUNTRY}_{REGION}_{GOAL}_{LANG}_{YYYYMM}`

Examples:
- `SEARCH_CA_H3Y_DONATE_FR_202603`
- `SEARCH_CA_M4W_DONATE_EN_202603`
- `PMAX_CA_QC_AWARENESS_BIL_202603`

Statuses:
- new campaigns start paused unless the user explicitly requests activation
- experimental campaigns use a clear suffix:
  - `_TEST`
  - `_PILOT`

## Config conventions
Prefer a single source of truth in config.

Expected campaign config fields:
- account_id
- campaign_name
- channel
- country
- language
- goal
- budget_daily
- bidding_strategy
- start_date
- end_date
- geo_targets
- negative_keywords
- ad_groups
- ads
- labels
- dry_run

If a config field is missing, fail clearly with a human-readable error.

## Required workflow for mutation tasks
When asked to create or update campaigns, follow this order:

For any new campaign implementation in the repo, the Google Ads config/update is part of the same deliverable:
the agent should prepare the campaign mutation plan, validate it, and keep the Ads side in sync with the website/content change.

1. Inspect current code and config.
2. Identify whether the task is:
   - create
   - update
   - pause/enable
   - reporting
   - audit
3. Build a mutation plan.
4. Validate inputs:
   - account ID format
   - campaign uniqueness
   - geo targets format
   - budget bounds
   - dates
   - language codes
5. Prefer a dry-run output first.
6. Only generate live mutation code after dry-run support exists.
7. Summarize exact changes in plain English.

## Reporting rules
When building reports:
- include spend, clicks, impressions, CTR, conversions, conversion rate, CPA, and ROAS if available
- break out results by:
  - campaign
  - geography
  - language
  - device if available
- flag anomalies:
  - zero impressions
  - spend without conversions
  - high CPA outliers
  - rejected ads
  - missing conversion tracking

## Code quality rules
- Use typed Python where practical.
- Keep functions small and composable.
- Separate:
  - config parsing
  - validation
  - API client logic
  - business rules
  - CLI entrypoints
- Add retries only for transient API failures.
- Do not swallow exceptions from Google Ads API.
- Surface partial failures clearly.

## Secrets and credentials
- Never hardcode tokens, refresh tokens, client secrets, customer IDs, or developer tokens.
- Use environment variables or approved secret management already present in the repo.
- Redact credentials in logs and examples.

## Testing expectations
For any meaningful change, add tests for:
- config validation
- campaign naming
- geo target normalization
- dry-run plan generation
- safe guards preventing live mutation without explicit enablement

## Preferred task behavior
When given a task, Codex should:
- first explain repo-specific assumptions briefly
- then implement the smallest safe change
- then show:
  - files changed
  - risk level
  - how to test
  - whether the change is dry-run only or live-capable

## If the repo is missing key pieces
If no Google Ads foundation exists yet, scaffold these:

- `ads/client.py`
- `ads/config.py`
- `ads/validators.py`
- `ads/campaigns.py`
- `ads/reporting.py`
- `ads/approvals.py`
- `ads/cli.py`
- `ads/tests/`
- `ads/examples/campaigns.sample.json`
- `.env.example`
- `README.md`

## Definition of done
A task is done only if:
- code is consistent with repo patterns
- inputs are validated
- destructive behavior is guarded
- tests exist for critical logic
- usage is documented
- output clearly distinguishes dry-run vs live mutation
