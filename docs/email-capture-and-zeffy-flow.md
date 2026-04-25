# Email Capture and Zeffy Flow

This note defines the current VSF email-capture model for the website, donation flow, newsletter signup, Google Form intake, Zeffy CSV import, and operational follow-up.

## Canonical Model

Zeffy is the operational source of record for donor and supporter contacts, but the website does not write contacts into Zeffy through an API. New contact and newsletter submissions should land in one Google Form linked to one Google Sheet. VSF reviews the linked Sheet, exports CSV when needed, and imports reviewed rows into Zeffy.

The website should send users to hosted intake forms through these environment variables:

- `NEXT_PUBLIC_CONTACT_FORM_EMBED_URL`
- `NEXT_PUBLIC_CONTACT_FORM_URL`
- `NEXT_PUBLIC_NEWSLETTER_EMBED_URL`
- `NEXT_PUBLIC_NEWSLETTER_URL`

The hosted intake form is the VSF Google Form:

- Direct URL: `https://docs.google.com/forms/d/e/1FAIpQLSf-Lr55suIGFilkF6Awz6kNsAv6VTWXQmMcXuEcWWSoBHruIw/viewform`
- Embed URL: `https://docs.google.com/forms/d/e/1FAIpQLSf-Lr55suIGFilkF6Awz6kNsAv6VTWXQmMcXuEcWWSoBHruIw/viewform?embedded=true`

The code remains provider-agnostic, but the operational setup is Google Form -> linked Google Sheet -> manual CSV export -> Zeffy import.

Use `docs/templates/zeffy-contact-import-template.csv` as the working import shape.

## Entry Points

Donation:
- primary destination: `DONATE_URL` in `lib/site.ts`
- system of record: Zeffy donation and donor contact record
- follow-up owner: Zeffy contact exports or Zeffy-native follow-up workflow

Contact:
- primary destination: hosted Google intake form when `NEXT_PUBLIC_CONTACT_FORM_EMBED_URL` or `NEXT_PUBLIC_CONTACT_FORM_URL` is set
- fallback: `mailto:info@vetiversansfrontieres.org`
- fallback subject: `VSF contact inquiry` or `Demande de contact VSF`
- expected routing: Google Sheet first, CSV export second, then Zeffy CSV import when the person should remain in the supporter or partner contact base

Newsletter:
- primary destination: hosted Google intake form when `NEXT_PUBLIC_NEWSLETTER_EMBED_URL` or `NEXT_PUBLIC_NEWSLETTER_URL` is set
- fallback: `mailto:info@vetiversansfrontieres.org`
- fallback subject: `VSF newsletter signup` or `Inscription infolettre VSF`
- expected routing: Google Sheet first, CSV export second, then Zeffy CSV import into the canonical supporter/newsletter contact base

Project intake:
- current path: contact form or email fallback
- expected routing: inbox triage first, then create or update the relevant Notion task/project/contact record

## Google Form Fields

Use one form for contact and newsletter intake. Include these fields:

- `Intake Type`: newsletter signup, general contact, project inquiry, partnership inquiry, donor question
- `First Name`
- `Last Name`
- `Email`
- `Phone`
- `Language`: English, French, Spanish, Other
- `Consent`: required checkbox for newsletter/supporter updates
- `Message`
- `Source Page`

Recommended tags:

- `newsletter`
- `website-contact`
- `san-rafael`
- `project-inquiry`
- `donor-prospect`
- `partner-prospect`

## CSV Export Workflow

Setup:

1. Keep one Google Form named `VSF Website Contact Intake`.
2. Link the form to one Google Sheet from the form's `Responses` tab.
3. Copy the Google Form embed URL and direct form URL into the website environment variables.

Weekly or pre-campaign behavior:

1. Open the linked Google Sheet.
2. Review new rows for spam, missing email addresses, and unclear consent.
3. Dedupe by lowercase email against Zeffy contacts or the previous import log.
4. Normalize first name, last name, language, source, tags, and notes.
5. Export the reviewed Sheet or filtered range as CSV.
6. Import reviewed rows into Zeffy as needed.

Keep the Google Sheet as the capture log. Zeffy is the durable supporter and donor contact record after import.

## Production Rules

- Configure both embed and direct URLs for contact and newsletter when Google Forms supports the needed embed/direct form views.
- Keep the direct URL even when an iframe embed exists, so users can open the form outside the page if the iframe fails.
- Keep email fallbacks live and source-specific; they should include a useful subject and starter body.
- Do not restore legacy WordPress shortcodes or embed-specific code paths in page content.
- Treat provider URLs as deploy-time configuration, not hardcoded page content.
- Do not build direct Zeffy API writes unless Zeffy later exposes an approved contact-import API.

## Weekly Hygiene

During the weekly website/fundraising review, check:

1. Donation count and donor contacts in Zeffy.
2. New contact/newsletter rows in the Google Sheet.
3. Newsletter signups and any fallback email requests.
4. Project-intake requests that need a Notion task or project record.
5. CSV export/import completion and Zeffy duplicate handling.
6. Failed or missing form provider configuration in production.

## Follow-Up Boundary

This document defines the website routing model. Donor messaging cadence, thank-you copy, recurring donor segmentation, and supporter updates belong in the donor follow-up workflow.
