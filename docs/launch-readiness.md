# Launch Readiness Notes

This note records the remaining launch stance for the VSF cutover so the site can ship with explicit, documented fallbacks.

## Forms

Contact form:
- `NEXT_PUBLIC_CONTACT_FORM_EMBED_URL` renders the hosted contact form in an iframe when present.
- `NEXT_PUBLIC_CONTACT_FORM_URL` provides the direct hosted form link/button when present.
- If both are missing, the contact flow falls back to `mailto:info@vetiversansfrontieres.org`.

Newsletter form:
- `NEXT_PUBLIC_NEWSLETTER_EMBED_URL` renders the hosted newsletter form in an iframe when present.
- `NEXT_PUBLIC_NEWSLETTER_URL` provides the direct hosted newsletter link/button when present.
- If both are missing, the newsletter flow falls back to `mailto:info@vetiversansfrontieres.org` with a source-specific newsletter subject.

Production expectation:
- set the hosted embed and direct URLs for both forms before launch
- point contact/newsletter hosted form URLs to the VSF Google intake form linked to the responses Sheet
- keep the email fallback available so the page still works if a provider setting is missing
- do not rely on the legacy `[wpforms]` shortcode for production behavior
- use Zeffy as the contact system of record after reviewed CSV imports, not through direct website API writes
- see `docs/email-capture-and-zeffy-flow.md` for the canonical routing model, CSV export workflow, and hygiene checks

## Media

Launch stance: intentional hybrid launch with explicit fallback and legacy media allowed.

This is a deliberate launch policy, not an open-ended migration blocker.

- Preferred base: `NEXT_PUBLIC_MEDIA_BASE_URL` for migrated media.
- Launch fallback: legacy WordPress uploads host through `getMediaBaseUrl()` when the media base is unset.
- Legacy HTML still rewrites old `wp-content/uploads` and `i0.wp.com` URLs through the same base, so archive content can stay readable while migration continues.
- Homepage, projects, vetiver, contact, services, and San Rafael imagery should use the normalized media helpers or approved absolute URLs, not fresh ad hoc WordPress paths.
- Legacy story/article bodies may remain hybrid for launch as long as they still resolve through the shared media rewrite path.

This means the launch blocker is not "media must be fully migrated first"; the blocker is "media behavior must be explicit and predictable."

Operational image rule:
- real field photos first
- support graphics second
- stock or stock-like visuals only as fallback, never as flagship imagery
- for metadata and social cards, use absolute URLs only, either through `getMediaUrl()`/`getAbsoluteUrl()` or a direct approved absolute asset URL

## Homepage Metadata

- The live homepage now uses the component system, so homepage metadata is defined in route code instead of legacy MDX frontmatter.
- The metadata should stay aligned with the live hero copy and hero image, not with the old content entry layer.

## Proof Points

- Homepage proof points are working references, not final donor-safe claims.
- Keep the language cautious until source links or validation are attached.
- If a number is used publicly, prefer wording that makes the reference status obvious.

## Local Dev Recovery

If Next.js or HMR gets stuck:

1. Stop the dev server and restart `npm run dev`.
2. If the page still looks stale, remove `.next` and start the dev server again.
3. Recheck `/` and `/fr` for a clean `200` response.
4. Run `npm run build` if the issue only appears in production-like output.
