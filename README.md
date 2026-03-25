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

## Environment

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_MEDIA_BASE_URL`
- contact/newsletter hosted form URLs
- R2 credentials if you want to run the uploader

## Notes

- English is canonical at root paths.
- French is served under `/fr`.
- Legacy `/en/...` routes redirect to root English routes.
- Contact and newsletter forms are intentionally provider-agnostic and controlled by environment variables.
