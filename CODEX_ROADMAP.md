# CODEX_ROADMAP.md

## Purpose

This roadmap turns the VSF analysis into an implementation-ready execution plan for Codex.

VSF should **not** be treated as a simple website migration. The current priority is a **foundation operating site launch** tied to donor growth, AI/automation, project credibility, and long-term operational scale.

The website is the public surface of a broader VSF operating system:
- active projects and incoming projects
- evidence and reporting
- donor conversion
- grant readiness
- CRM / partner memory
- content engine
- automation and AI leverage

## Status Update

Completed in this branch:
- core public pages rewritten around the donor / partner journey
- RDC promoted as the primary credibility hub
- visible WordPress leftovers reduced in rendered HTML
- metadata / SEO frontmatter refreshed for EN and FR pages
- build verified successfully

Remaining focus:
- finish any residual public-facing copy cleanup
- keep media handling staged unless a specific page needs migration
- continue tightening article and story paths into the RDC / donor funnel

## 2026 Strategic Priorities

1. **Launch the new website** as the canonical public platform.
2. **Improve online presence and donor acquisition**.
3. **Use AI and automation aggressively** where useful and low-friction.
4. **Preserve and expose real field credibility**, especially RDC evidence and reporting.
5. **Make the site reflect current VSF reality**, not inherited WordPress copy.
6. **Support grants and donor conversion**, starting with CFLI and RDC-related public trust assets.

## Immediate Reality Check

The new Next.js site is already the right platform, but it is not yet ready to replace WordPress fully.

Main gaps still to resolve before replacement:
- rewrite the core public pages: Home, Projects, About, Services, Contact, Get Involved
- remove migration leftovers like WordPress shortcodes and placeholder links
- replace absolute WordPress internal links with proper internal routes
- decide whether media stays temporarily on WordPress uploads or gets fully moved to R2
- confirm contact/newsletter form handling
- make sure the site reflects current VSF reality, not legacy site text

## Program Streams

Codex should think in parallel streams, not a single backlog.

### Stream A — Operating Site Launch
Goal: ship a public-facing site that accurately represents VSF and can support donor growth.

### Stream B — Content and Conversion Engine
Goal: turn articles, case studies, and project pages into donor-facing entry points.

### Stream C — RDC Evidence and Credibility Layer
Goal: surface trustworthy field evidence and policy/reporting credibility without making the site feel academic or bureaucratic.

### Stream D — Growth / Automation / AI
Goal: reduce manual work in publishing, lead capture, CRM updates, and campaign operations.

### Stream E — Foundation Structure
Goal: make the site and repo usable as the public layer of a broader operating system.

## Phase 1 — Launch Blocking Fixes

### 1. Rewrite Core Pages
Priority pages:
- Home
- Projects
- About
- Services
- Contact
- Get Involved

Requirements:
- reflect current VSF priorities, not legacy broad generic messaging
- emphasize field work, credibility, partnership, and practical outcomes
- create clean CTA paths: donate, sponsor a project, partner, propose a project, contact
- align EN and FR structures

Acceptance criteria:
- no page reads like a direct WordPress carryover
- no thin placeholder copy
- every major page has a clear role in the donor/partner journey
- copy supports credibility and conversion without sounding like corporate marketing fluff

### 2. Remove Migration Leftovers
Audit and fix:
- WP shortcodes
- absolute WordPress internal links
- `href="#"` and dead placeholder links
- pages that still depend on legacy uploads or WP-only constructs

Acceptance criteria:
- no visible WordPress artifacts in production-facing content
- no dead internal CTA links
- all internal navigation uses proper localized routes

### 3. Resolve Media Strategy
Decision needed:
- temporary hybrid using existing WordPress-hosted media
- or full migration to Cloudflare R2

Codex should:
- inventory current media dependencies
- identify the pages/posts still tied to WP-hosted media
- recommend a pragmatic cutover path

Preferred default:
- use a staged approach if full migration delays launch
- but keep a clear path to full R2 ownership

Acceptance criteria:
- media plan is explicit and documented
- launch is not blocked by vague media uncertainty

### 4. Confirm Form Handling
Needed forms:
- contact
- newsletter / donor updates
- possibly propose-a-project intake

Codex should:
- confirm current provider-agnostic form configuration
- ensure there is a working implementation path
- connect forms to a simple lead capture structure if possible

Acceptance criteria:
- every visible form CTA has a working endpoint or is intentionally disabled
- contact and newsletter flows are testable end-to-end

## Phase 2 — Foundation Operating Site Positioning

### 5. Rebuild the Projects Layer
Projects page should not be a generic archive.
It should become a portfolio entry point.

Required structure:
- active flagship projects
- credible precedent / archive projects
- room for incoming projects
- project cards with explicit role: evidence, pilot, partnership, donor opportunity

Initial emphasis:
- RDC
- CFLI / El Salvador if useful publicly after deadline logic is handled
- Colombia when better documented
- selected precedent assets such as Nakivale where useful for credibility

Acceptance criteria:
- the Projects page reflects how VSF actually works now
- projects are not presented as isolated one-off stories
- each project can support a next action

### 6. Build the Public Narrative from Existing Assets
Drive analysis indicates underused public-facing material that should inform the new site:
- old mission and strategy copy
- Ethiopia campaign concept material
- Nakivale partnership and project history
- case-study style content like VersoGaia
- corporate partnership tiers for 2025
- social media strategy material

Codex should:
- identify which assets belong in public pages vs case-study content vs donor materials
- convert the strongest materials into reusable page or section modules

Acceptance criteria:
- legacy material is curated and transformed, not copy-pasted
- the site feels like a coherent organization, not a pile of migrated content

## Phase 3 — RDC Credibility and Content Engine

### 7. Create an RDC Project Hub
The RDC work is a core credibility pillar and should not live only as scattered docs and articles.

The hub should connect:
- project overview
- field logic
- evidence layer
- donor relevance
- report / policy credibility
- future value-chain logic (soap, essential oil, etc.)

Codex should design the RDC hub as the canonical public entry point for that work.

Acceptance criteria:
- RDC is understandable to donors and partners in one path
- evidence is surfaced clearly but accessibly
- articles connect into the hub instead of floating as detached blog posts

### 8. Build the Editorial Pipeline as a Conversion System
Current and planned content should support project-level action.

Immediate content priorities include:
- slash-and-burn article cleanup / positioning
- war and fertilizer price article
- fertilizer dependence / sovereignty framing
- no-till and vetiver explanation pieces
- evidence-driven project updates

Codex should treat every article as part of a system:
- article
- linked project hub
- linked CTA
- linked donation or support goal

Acceptance criteria:
- every article has a project destination
- no major editorial asset is a dead-end
- article templates support CTAs cleanly without feeling manipulative

## Phase 4 — Donor Growth and AI / Automation

### 9. Build a Practical Donor Funnel
Site should support multiple paths:
- first-time donor
- sponsor-a-project donor
- partner / collaborator
- inquiry / contact
- newsletter subscriber

Codex should identify and implement:
- primary CTAs
- supporting micro-CTAs
- donation entry points from projects and articles
- lightweight analytics hooks if available in current stack

Acceptance criteria:
- donor path is visible from Home, Projects, Get Involved, and project/article pages
- CTAs are consistent and measurable

### 10. Add Low-Friction Automation
AI/automation should reduce manual work rather than create complexity.

Priority automations to support:
- newsletter/contact capture normalization
- simple lead routing / logging
- reusable content templates for project updates
- campaign / ads workflow support where already present in repo
- structured metadata generation where helpful

Codex should prefer:
- simple automations
- documented workflows
- minimal dependency complexity

Acceptance criteria:
- automation candidates are documented by effort/impact
- at least 1–2 low-risk automations are implemented or scaffolded

## Phase 5 — Repo and Content System Hygiene

### 11. Standardize Public Content Structure
Codex should review current content architecture and ensure it supports:
- page rewrites
- project hubs
- stories/articles
- donor support pages
- bilingual consistency

Acceptance criteria:
- content organization is clear enough for future editors and AI agents
- routing and content types do not require special-case hacks for each new page

### 12. Add Operating Documentation for Future Work
Codex should leave behind clean handoff documentation covering:
- how to add/update core pages
- how to add a project hub
- how to add a new article in the conversion flow
- media strategy decisions
- form provider decisions
- AI / automation decisions

Acceptance criteria:
- another agent can continue the work without rediscovering the architecture

## Recommended Implementation Order

### Immediate (this week)
1. Audit and rewrite Home / Projects / Get Involved / Contact
2. Remove obvious migration leftovers
3. Resolve forms path
4. Decide media cutover path
5. Build an RDC hub outline and article-to-hub connection model

### Near-term (next 2–3 weeks)
6. Rewrite About / Services
7. Rebuild Projects page into portfolio logic
8. Publish or scaffold first RDC credibility content path
9. Connect article templates to donation/support paths
10. Add simple lead capture / automation support

### After launch
11. Expand project hubs and case studies
12. Improve donor funnel and analytics
13. Use the repo as the canonical public content system for VSF operations

## Non-Goals / Guardrails

Codex should avoid:
- treating the work as a cosmetic redesign only
- importing old WordPress copy without reinterpretation
- overengineering CRM/automation before the site is coherent
- building a generic nonprofit site disconnected from field realities
- burying evidence under marketing language

## Definition of Success

This roadmap succeeds if:
- VSF can replace WordPress with confidence
- the new site clearly expresses what VSF is and how it works now
- donors and partners have obvious, credible paths to engage
- RDC credibility is visible and usable
- content, projects, and CTAs feel like one coherent system
- future projects can enter the structure without creating chaos

## Suggested Follow-Up Tasks for Codex

1. Produce a page-by-page rewrite plan with acceptance criteria.
2. Produce a migration cleanup checklist mapped to actual files.
3. Propose the final information architecture for pages, project hubs, and stories.
4. Identify the exact files to edit first in the repo.
5. Create a launch blocker list and classify each blocker by severity.
6. Propose 3 realistic AI/automation wins for the first release cycle.
