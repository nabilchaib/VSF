# CLAUDE.md

## Project overview

Vetiver Sans Frontieres (VSF) — a bilingual (EN/FR) nonprofit website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 3.4. Content comes from MDX files. Deployed on Vercel.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (run this to verify changes)
- `npm run content:generate` — regenerate MDX content from source data
- `npm run media:upload` — upload media assets to Cloudflare R2

## Project structure

```
app/              Next.js App Router
  (en)/           English routes (default locale)
  fr/             French routes
  layout.tsx      Root layout (font loading, global metadata)
  globals.css     Global styles, CSS custom properties, focus states
components/       React components (26 files, all server components except site-header.tsx and locale-switcher.tsx)
content/          MDX content files (en/ and fr/)
data/             Brand tokens, Elementor exports, media manifest
lib/              Utilities (content loading, i18n, HTML transforms, site constants)
messages/         next-intl translation files (en.json, fr.json)
```

## Tech stack

- **Framework:** Next.js 15 (App Router, static generation via `generateStaticParams`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 with `@tailwindcss/typography`
- **i18n:** next-intl v4
- **Content:** MDX via next-mdx-remote, frontmatter parsed with gray-matter + zod
- **Font:** Rubik (local woff2, variable `--font-rubik`)

## Design system

### Color tokens

Colors are loaded from `data/brand/tokens.json` and mapped to semantic names in `tailwind.config.ts`:

| Token     | Role                    | Hex       |
|-----------|-------------------------|-----------|
| `bark`    | Deep green, primary dark| `#14261C` |
| `moss`    | Brand green, accent     | `#75BE2B` |
| `clay`    | Primary green           | `#6AA63F` |
| `ink`     | Text color              | `#232323` |
| `sand`    | Light surface           | `#D1D9B4` |
| `surface` | Same as sand            | `#D1D9B4` |
| `reed`    | Alt surface             | `#CAD996` |

### Opacity

The Tailwind config extends opacity with **all integer values 1-99**. This is intentional — the codebase uses fine-grained opacity like `text-ink/72`, `bg-white/88`, `border-bark/8`. Do NOT override the opacity config or replace these with multiples of 5.

Do NOT override Tailwind's built-in `white` color in the theme config. This was previously done and it broke all `text-white/XX` opacity modifiers, making text invisible. The default Tailwind white works correctly.

### Shadows

- `shadow-card` — subtle card elevation
- `shadow-soft` — stronger elevation for prominent sections

### Component patterns

- Cards use `rounded-[2.2rem] border border-bark/10 bg-white shadow-card`
- Dark sections use `bg-bark text-white shadow-soft`
- Eyebrow labels use `text-sm font-semibold uppercase tracking-[0.2em] text-bark/60`
- Section spacing: `py-14 lg:py-20`

## Coding conventions

### Server vs client components

Prefer server components. Only use `'use client'` when you need hooks (useState, useEffect, usePathname). Currently only `site-header.tsx` and `locale-switcher.tsx` are client components.

### Localized paths

Use `localePath(enPath, locale)` from `@/lib/site` for all internal links. Do NOT write `locale === 'fr' ? '/fr/path' : '/path'` ternaries. The function handles special French aliases (e.g., `/about/contact` becomes `/fr/contact`).

```tsx
// Good
<Link href={localePath('/get-involved', locale)}>

// Bad
<Link href={locale === 'fr' ? '/fr/get-involved' : '/get-involved'}>
```

### i18n / copy

- **Nav and footer text** use `next-intl` message files (`messages/en.json`, `messages/fr.json`) accessed via `useTranslations()`.
- **Page content** uses inline copy objects (`const copy = { en: {...}, fr: {...} }`) colocated in each page component. This is intentional — it keeps copy type-safe and colocated.
- **Shared constants** like `DONATE_URL`, `CONTACT_EMAIL`, `SOCIAL_LINKS` live in `lib/site.ts`.

### HTML content safety

Legacy HTML rendered via `dangerouslySetInnerHTML` in `html-content.tsx` is sanitized with `isomorphic-dompurify` before rendering. Always sanitize HTML from external/legacy sources.

### Images

- Use Next.js `<Image>` with appropriate `sizes` attribute — never just `sizes="100vw"`.
- Hero/banner images: `sizes="(min-width: 1280px) 1280px, 100vw"`
- Grid images: `sizes="(min-width: 1024px) XXvw, 100vw"` where XX matches the grid fraction.

### Accessibility

- A skip-to-content link exists in `site-shell.tsx`.
- Global `:focus-visible` outlines are defined in `globals.css`.
- Use `aria-hidden="true"` on decorative SVGs.
- Iframes must have a `sandbox` attribute and a `title`.
- Keep text contrast above WCAG AA (4.5:1 for small text). Avoid going below `text-bark/56` or `text-ink/60` on light backgrounds.

### What to avoid

- Do not add a `white` key to `theme.extend.colors` in tailwind.config.ts.
- Do not use `'use client'` unless a component actually needs client hooks.
- Do not hardcode social links or contact email — import from `lib/site.ts`.
- Do not duplicate locale path logic — use `localePath()`.
