# CODEX_ROADMAP.md

## Purpose

This roadmap turns the VSF analysis into an implementation-ready execution plan for Codex.

VSF should **not** be treated as a simple website migration. The current priority is a **foundation operating site launch** tied to donor growth, project credibility, and long-term operational scale.

The website is the public surface of a broader VSF operating system:
- active projects and incoming projects
- evidence and reporting
- donor conversion
- grant readiness
- partner memory
- content engine
- automation and AI leverage

---

## Progress Update — April 14, 2026

Two major page-role PRs are now merged:
- **PR 15** — Get Involved support hub
- **PR 16** — About trust positioning

This matters because the site is no longer blocked on those two core public-page rewrites.
The new remaining work is more focused:
- San Rafael rewrite and cleanup
- Vetiver / Services / Stories refinement
- final launch-readiness validation
- production-path QA

---

## Current Launch State

As of mid-April 2026, the website migration is **past the major architecture phase** and now in the **focused execution / launch-readiness phase**.

Completed or substantially completed:
- core public pages rewritten around a clearer donor / partner journey
- vetiver-first homepage and public narrative in place
- Get Involved rewritten into a real support-routing page
- About rewritten into a trust and organizational-positioning page
- EN and FR metadata / SEO refreshed across core pages
- visible WordPress leftovers reduced in rendered HTML
- Projects layer rebuilt into a portfolio gateway
- public project paths now include RDC, San Rafael, and a proposal route
- story and article pages now use intent-based CTA routing
- content-level CTA targeting added so posts can point to the right next step
- Google Ads operating flow upgraded with OAuth refresh, draft creation, and approval-gated live changes

This means the site is no longer blocked by broad architecture or messaging work.
The main work left is targeted page execution, validation, cleanup, and cutover confidence.

---

## Current Remaining Launch-Critical Work

1. Rewrite and clean up San Rafael.
2. Strengthen Vetiver as the clearest education page on the site.
3. Strengthen Services as a real partnership / implementation path.
4. Keep Stories aligned with the routing model.
5. Run the final CTA, routing, and bilingual validation pass.
6. Confirm final donation, contact, and newsletter behavior on live pages.
7. Decide and document the launch stance for staged media dependencies.
8. Add the local development recovery note for Next.js / HMR failures.

---

## 2026 Strategic Priorities

1. **Launch the new website** as the canonical public platform.
2. **Improve online presence and donor acquisition**.
3. **Use AI and automation aggressively** where useful and low-friction.
4. **Preserve and expose real field credibility** without letting projects define the whole site.
5. **Make the site reflect current VSF reality**, not inherited WordPress copy.
6. **Support grants and donor conversion** through clear project, donation, partnership, and contact paths.

---

## Current Operating Model

The public model should now be understood as:
- **one mission and multiple valid next steps**
- not one project and one funnel

That means:
- Home teaches vetiver first
- Vetiver explains the plant in plain language
- About builds trust and organizational clarity
- Get Involved routes supporter intent
- Projects acts as the portfolio gateway
- RDC acts as a flagship proof hub
- San Rafael acts as a campaign / field-proof page when cleaned up
- stories route into the right next step instead of ending cold
- Contact / Services / Get Involved remain valid conversion paths depending on intent

---

## Program Streams

### Stream A — Operating Site Launch
Goal: ship a public-facing site that accurately represents VSF and can support donor growth.

**Status:** In focused execution / launch-readiness phase.

### Stream B — Content and Conversion Engine
Goal: turn articles, case studies, and project pages into donor-facing entry points.

**Status:** Core structure in place; continue editorial and routing discipline.

### Stream C — RDC Evidence and Credibility Layer
Goal: surface trustworthy field evidence and policy/reporting credibility without making the site feel academic or bureaucratic.

**Status:** Public hub established; continue strengthening proof discipline and article connection.

### Stream D — Growth / Automation / AI
Goal: reduce manual work in publishing, lead capture, CRM updates, and campaign operations.

**Status:** Ads workflow improved; broader automation still mostly ahead.

### Stream E — Foundation Structure
Goal: make the site and repo usable as the public layer of a broader operating system.

**Status:** Directionally in place; continue documentation and low-friction operational scaffolding.

---

## Phase 1 — Remaining Core Page Execution

### 1. San Rafael rewrite
Goal: turn San Rafael into a concrete campaign and field-proof page without internal portfolio language.

Acceptance criteria:
- no internal wording such as donor-safe / pilot path remains
- the page explains the local problem, practical response, and next support logic clearly
- the page feels donor-facing, not internally managed

### 2. Vetiver refinement
Goal: make Vetiver the clearest education page on the site.

Acceptance criteria:
- education flow is complete in itself
- CTA logic does not over-default to RDC
- the page balances learning and action paths cleanly

### 3. Services refinement
Goal: make Services feel like a primary partnership path.

Acceptance criteria:
- the page is legible to municipalities, NGOs, land stewards, and partners
- the page does not rely on a project page to justify its existence

### 4. Stories routing discipline
Goal: keep Stories as an engagement and retention layer rather than a dead-end archive.

Acceptance criteria:
- no story path ends cold
- story exits route toward the right next step by intent

---

## Phase 2 — Launch-Blocking Validation and Cleanup

### 5. Final launch-readiness audit
Review all launch-critical public routes:
- Home
- Vetiver
- About
- Get Involved
- Projects
- RDC
- San Rafael
- Propose a project
- Contact
- Services
- Stories listing
- representative article pages in EN and FR

Acceptance criteria:
- all launch-critical routes reviewed
- no broken primary CTA paths remain
- no obvious dead-end pages remain

### 6. Final CTA and routing verification
Validate that visible CTAs route correctly for:
- donate
- contact
- get involved
- projects
- RDC
- San Rafael
- propose a project
- services
- newsletter / updates

Acceptance criteria:
- donation and contact paths are correct
- EN/FR localization is correct
- article-end CTAs point to the right destinations

### 7. Remove remaining migration leftovers
Audit and fix:
- remaining WordPress artifacts
- dead placeholder links
- broken internal routes
- any visible legacy text remnants on launch-critical pages

Acceptance criteria:
- no visible WordPress leftovers remain on launch-critical pages
- internal navigation uses proper localized routes
- no dead CTA links remain

### 8. Decide and document media launch stance
Decision needed:
- continue hybrid use of existing WordPress-hosted media for launch
- or move specific launch-critical dependencies now

Acceptance criteria:
- media strategy is explicit and documented
- launch is not blocked by vague media uncertainty

### 9. Confirm form handling and key conversion paths
Needed flows:
- contact
- newsletter / donor updates
- propose-a-project intake if exposed publicly

Acceptance criteria:
- contact and newsletter flows are testable end-to-end
- public intake paths are clear and not misleading

### 10. Add local development recovery notes
Include:
- when to restart the dev server
- when to clear `.next`
- how to verify the local homepage is returning `200` again

Acceptance criteria:
- the repo explains how to recover from a bad dev-server render state without guessing

---

## Phase 3 — Public Credibility and Launch Safety

### 11. Review public proof-point claims
Acceptance criteria:
- public-facing claims are donor-safe and field-grounded
- questionable figures are either corrected, softened, or documented for later review

### 12. Keep the editorial system tied to real actions
Acceptance criteria:
- editorial additions follow the routing model without regressions
- content system remains understandable to future contributors

---

## Phase 4 — Donor Growth and AI / Automation

### 13. Build a practical donor funnel
The site should visibly support:
- first-time donor
- sponsor-a-project donor
- partner / collaborator
- inquiry / contact
- newsletter subscriber

Acceptance criteria:
- donor path is visible from Home, Projects, Get Involved, and project/article pages
- CTAs are consistent and measurable

### 14. Add low-friction automation
Priority automations:
- newsletter/contact capture normalization
- simple lead routing / logging
- reusable content templates for project updates
- campaign / ads workflow support where already present in repo
- structured metadata generation where helpful

Acceptance criteria:
- automation candidates are documented by effort/impact
- at least 1–2 low-risk automations are implemented or scaffolded

---

## Recommended Implementation Order

### Immediate
1. San Rafael
2. Vetiver
3. Services
4. Stories
5. Final CTA, bilingual, and conversion-path verification
6. Remove remaining migration leftovers
7. Decide and document the staged media launch stance
8. Add the local dev recovery runbook

### Near-term
9. Review public proof-point claims
10. Confirm forms and intake flows
11. Strengthen donor funnel visibility and measurement
12. Add low-friction automation where useful

### After launch
13. Expand project hubs and case studies
14. Improve donor funnel and analytics
15. Use the repo as the canonical public content system for VSF operations

---

## Non-Goals / Guardrails

Codex should avoid:
- treating the remaining work as another broad site rewrite
- importing old WordPress copy without reinterpretation
- overengineering CRM/automation before launch quality is secure
- building a generic nonprofit site disconnected from field realities
- burying evidence under marketing language

---

## Definition of Success

This roadmap succeeds if:
- VSF can replace WordPress with confidence
- the new site clearly expresses what VSF is and how it works now
- donors and partners have obvious, credible paths to engage
- RDC credibility is visible and usable
- content, projects, and CTAs feel like one coherent system
- launch blockers are reduced to known, documented, manageable items rather than vague unknowns

---

## Suggested Follow-Up Tasks for Codex

1. Rewrite and review San Rafael.
2. Validate all primary CTA paths in EN and FR.
3. Document the staged media stance for launch.
4. Add the local development recovery note.
5. Review public proof-point claims for donor-safe wording.
6. Propose 3 realistic AI/automation wins for the first post-launch cycle.
