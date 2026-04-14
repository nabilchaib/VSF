# CODEX_ROADMAP.md

## Purpose

This roadmap is the execution guide for the remaining VSF website migration work.

At this stage, VSF should **not** be treated as a broad website rethink. The architecture direction is already set. The remaining work is to:
- finish the highest-value page rewrites
- validate live conversion paths
- remove migration leftovers
- launch with confidence
- keep tasks and docs lean enough that execution does not slow down

The site remains the public surface of a broader VSF operating system, but the roadmap below is intentionally biased toward **shipping the migration**.

---

## Progress Update — April 14, 2026

Two major page-role PRs are now merged:
- **PR 15** — Get Involved support hub
- **PR 16** — About trust positioning

This matters because the site is no longer blocked on those two core public-page rewrites.

The remaining migration work is now more focused:
- San Rafael rewrite and cleanup
- Vetiver / Services / Stories refinement
- final launch-readiness validation
- production-path QA
- stricter task and documentation hygiene

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

## Current Remaining Migration-Critical Work

1. Rewrite and clean up San Rafael.
2. Strengthen Vetiver as the clearest education page on the site.
3. Strengthen Services as a real partnership / implementation path.
4. Keep Stories aligned with the routing model.
5. Run the final CTA, routing, and bilingual validation pass.
6. Confirm final donation, contact, and newsletter behavior on live pages.
7. Decide and document the launch stance for staged media dependencies.
8. Add the local development recovery note for Next.js / HMR failures.
9. Close, merge, or remove stale migration tasks and docs that no longer change execution.

---

## Execution Discipline

From this point on, Codex should default to **finishing and validating**, not generating more planning material.

### Rules
- Do not create a new strategy doc unless it changes implementation.
- Do not keep parallel task pages for the same outcome.
- When a task is absorbed into another task, mark it done or archive it.
- When a page role is settled, move from discussion to implementation.
- Prefer updating the existing source-of-truth doc over creating a new one.

### Source-of-truth hierarchy
1. `CODEX_ROADMAP.md` — migration execution order
2. `CODEX_WORDING_BRIEF.md` — public wording guidance
3. `CODEX_WEBSITE_WORDING_AUDIT.md` — wording gaps and page-specific cleanup needs
4. active PRs / active task rows — live execution

Everything else should either support execution directly or be archived / treated as reference only.

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

## Phase 1 — Remaining Core Page Execution

### 1. San Rafael rewrite
Goal: turn San Rafael into a concrete campaign and field-proof page without internal portfolio language.

Acceptance criteria:
- no internal wording such as donor-safe / pilot path remains
- the page explains the local problem, practical response, and next support logic clearly
- the page feels donor-facing, not internally managed
- the page reflects the nursery-expansion phase and proof-first positioning already established in VSF planning

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

## Phase 3 — Task and Documentation Hygiene

### 11. Close or merge stale migration tasks
Acceptance criteria:
- no standalone task remains open if its outcome is already absorbed into another active task
- completed page-role work is marked done in task tracking
- broad migration tasks reflect the current phase instead of the earlier architecture phase

### 12. Reduce documentation sprawl
Acceptance criteria:
- no new migration doc is created unless it changes implementation
- source-of-truth docs are updated instead of duplicated
- reference-only pages are treated as reference, not active execution

---

## Phase 4 — Public Credibility and Launch Safety

### 13. Review public proof-point claims
Acceptance criteria:
- public-facing claims are donor-safe and field-grounded
- questionable figures are either corrected, softened, or documented for later review

### 14. Keep the editorial system tied to real actions
Acceptance criteria:
- editorial additions follow the routing model without regressions
- content system remains understandable to future contributors

---

## Phase 5 — Donor Growth and AI / Automation

### 15. Build a practical donor funnel
The site should visibly support:
- first-time donor
- sponsor-a-project donor
- partner / collaborator
- inquiry / contact
- newsletter subscriber

Acceptance criteria:
- donor path is visible from Home, Projects, Get Involved, and project/article pages
- CTAs are consistent and measurable

### 16. Add low-friction automation
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
9. Close or merge stale migration tasks

### Near-term
10. Review public proof-point claims
11. Confirm forms and intake flows
12. Strengthen donor funnel visibility and measurement
13. Add low-friction automation where useful
14. Reduce documentation sprawl where it is slowing execution

### After launch
15. Expand project hubs and case studies
16. Improve donor funnel and analytics
17. Use the repo as the canonical public content system for VSF operations

---

## Non-Goals / Guardrails

Codex should avoid:
- treating the remaining work as another broad site rewrite
- importing old WordPress copy without reinterpretation
- overengineering CRM/automation before launch quality is secure
- building a generic nonprofit site disconnected from field realities
- burying evidence under marketing language
- creating new docs instead of finishing open implementation work

---

## Definition of Success

This roadmap succeeds if:
- VSF can replace WordPress with confidence
- the new site clearly expresses what VSF is and how it works now
- donors and partners have obvious, credible paths to engage
- RDC credibility is visible and usable
- content, projects, and CTAs feel like one coherent system
- launch blockers are reduced to known, documented, manageable items rather than vague unknowns
- task and documentation overhead no longer slows execution

---

## Suggested Follow-Up Tasks for Codex

1. Rewrite and review San Rafael.
2. Validate all primary CTA paths in EN and FR.
3. Document the staged media stance for launch.
4. Add the local development recovery note.
5. Review public proof-point claims for donor-safe wording.
6. Close or merge stale migration tasks.
