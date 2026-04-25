# VSF Next.js Migration

This repository now contains the first Next.js rebuild of `vetiversansfrontieres.org`.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- `next-intl`
- MDX content in-repo
- Cloudflare R2 helper scripts for media
- a separate Google Ads automation subsystem under `ads/`

## Key folders

- `app/`: Next.js routes
- `components/`: shared UI and content helpers
- `content/`: generated MDX pages and posts
- `data/`: route and media manifests generated from the WordPress backup
- `scripts/`: content generation and R2 upload helpers
- `extracted/`: original extracted WordPress backup data

## Commands

```bash
npm install
npm run content:generate
npm run media:manifest
npm run build
```

Google Ads automation:

```bash
python3 -m ads.cli validate --config ads/examples/campaigns.sample.json
python3 -m ads.cli plan --config ads/examples/campaigns.sample.json
python3 -m ads.cli apply --config ads/examples/campaigns.sample.json --confirm-live
python3 -m ads.cli draft --base-campaign customers/9071089180/campaigns/12345678901 --draft-name "VSF Draft 2026-04-10"
python3 -m ads.cli snapshot --customer-id 9071089180
python3 -m ads.cli cleanup-plan --config ads/examples/adgrants.cleanup.sample.json
python3 -m ads.cli cleanup-apply --config ads/examples/adgrants.cleanup.sample.json --confirm-live
python3 -m unittest discover -s ads/tests -t .
```

## Environment

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_MEDIA_BASE_URL`
- `NEXT_PUBLIC_CONTACT_FORM_EMBED_URL`
- `NEXT_PUBLIC_CONTACT_FORM_URL`
- `NEXT_PUBLIC_NEWSLETTER_EMBED_URL`
- `NEXT_PUBLIC_NEWSLETTER_URL`
- R2 credentials if you want to run the uploader
- `GOOGLE_ADS_CREDENTIALS_DIR` if you want the Ads tooling to read local credential files
- `GOOGLE_ADS_ALLOW_LIVE_MUTATION=true` if you want to execute live Ads mutations

If the hosted form variables are missing, the site falls back to email links instead of failing closed. Media can also fall back to the legacy WordPress uploads host until `NEXT_PUBLIC_MEDIA_BASE_URL` is set.

The draft command is a safe API wrapper around `campaignDrafts:mutate`. It needs a real base campaign resource to succeed; the example above uses a placeholder campaign ID.

## Notes

- English is canonical at root paths.
- French is served under `/fr`.
- Legacy `/en/...` routes redirect to root English routes.
- Contact and newsletter forms are intentionally provider-agnostic and controlled by environment variables.
- See `docs/launch-readiness.md` for the explicit launch stance on forms, media, homepage metadata, proof points, and local dev recovery.
- See `docs/email-capture-and-zeffy-flow.md` for the canonical contact/newsletter/donor capture model and Google Form CSV export workflow.
- `CLAUDE.md` is the website operating guide.
- `ads/AGENTS.md` is the Google Ads automation operating guide.
- The Ads cleanup workflow is dry-run first and does not mutate campaigns until explicit approval is added.
- Live mutation is gated by `--confirm-live` and `GOOGLE_ADS_ALLOW_LIVE_MUTATION=true`.
- If Next.js or HMR gets stuck during launch QA, stop `npm run dev`, clear `.next`, restart the dev server, and recheck `/` and `/fr`.
