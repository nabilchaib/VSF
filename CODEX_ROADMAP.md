# CODEX_ROADMAP.md

## Purpose

This roadmap is the execution guide for the remaining VSF website migration work.

At this stage, VSF should **not** be treated as a broad website rethink. The architecture direction is already set. The remaining work is to:
- validate live conversion paths
- remove migration leftovers
- launch with confidence
- keep tasks and docs lean enough that execution does not slow down

The site remains the public surface of a broader VSF operating system, but the roadmap below is intentionally biased toward **shipping the migration**.

---

## Progress Update — April 14, 2026

Four launch-relevant PRs are now merged:
- **PR 15** — Get Involved support hub
- **PR 16** — About trust positioning
- **PR 18** — legacy FAQ / bridge-page cleanup and local recovery note
- **PR 19** — San Rafael, Vetiver, Services, Stories, Projects, article routing, EN/FR metadata and CTA alignment, and roadmap hygiene

This matters because the site is no longer blocked on the major public-page rewrites.
The remaining migration work is now concentrated in **final launch verification, conversion-path testing, media stance clarity, and stale-task cleanup**.

---

## Current Launch State

As of mid-April 2026, the website migration is **past the major architecture phase** and now in the **final launch-readiness phase**.

Completed or substantially completed:
- core public pages rewritten around a clearer donor / partner journey
- vetiver-first homepage and public narrative in place
- Get Involved rewritten into a real support-routing page
- About rewritten into a trust and organizational-positioning page
- San Rafael rewritten as a donor-facing public pilot page tied to the next phase
- Vetiver strengthened as the main education page with broader CTA logic
- Services strengthened as a partnership and implementation path
- Stories and article pages now use intent-based CTA routing with clearer next steps
- EN and FR metadata / SEO refreshed across core pages
- visible WordPress leftovers reduced in rendered HTML
- legacy FAQ and Vetiver System bridge pages cleaned up in EN and FR
- local development recovery note added for Next.js / HMR failures
- Projects layer rebuilt into a portfolio gateway
- public project paths now include RDC, San Rafael, and a proposal route
- content-level CTA targeting added so posts can point to the right next step
- Google Ads operating flow upgraded with OAuth refresh, draft creation, and approval-gated live changes

This means the site is no longer blocked by broad architecture, messaging work, or the main page rewrites.
The main work left is launch verification, cleanup confirmation, and cutover confidence.

---

## Current Remaining Migration-Critical Work

1. Run the final CTA, routing, and bilingual validation pass.
2. Confirm final donation, contact, newsletter, and propose-a-project behavior on live pages.
3. Remove any remaining migration leftovers still visible on launch-critical pages.
4. Decide and document the launch stance for staged media dependencies.
5. Close, merge, or remove stale migration tasks and docs that no longer change execution.

---

## Task and Documentation Hygiene

From here, keep roadmap maintenance lean:
- fold status updates into this file instead of keeping standalone duplicate update docs
- close or merge stale migration tasks once their outcomes are reflected here
- treat reference notes as reference only unless they change implementation
- avoid creating a new roadmap-adjacent document for cleanup work that is already captured

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
- San Rafael acts as a public field-proof / pilot page
- stories route into the right next step instead of ending cold
- Contact / Services / Get Involved remain valid conversion paths depending on intent

---

## Phase 1 — Final Launch Verification and Cleanup

### 1. Final launch-readiness audit
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

### 2. Final CTA and routing verification
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

### 3. Confirm form handling and key conversion paths
Needed flows:
- contact
- newsletter / donor updates
- propose-a-project intake if exposed publicly

Acceptance criteria:
- contact and newsletter flows are testable end-to-end
- public intake paths are clear and not misleading

### 4. Remove remaining migration leftovers
Audit and fix:
- remaining WordPress artifacts
- dead placeholder links
- broken internal routes
- any visible legacy text remnants on launch-critical pages

Acceptance criteria:
- no visible WordPress leftovers remain on launch-critical pages
- internal navigation uses proper localized routes
- no dead CTA links remain

### 5. Decide and document media launch stance
Decision needed:
- continue hybrid use of existing WordPress-hosted media for launch
- or move specific launch-critical dependencies now

Acceptance criteria:
- media strategy is explicit and documented
- launch is not blocked by vague media uncertainty

---

## Phase 2 — Task and Documentation Hygiene

### 6. Close or merge stale migration tasks
Acceptance criteria:
- no standalone task remains open if its outcome is already absorbed into another active task
- completed page-role work is marked done in task tracking
- broad migration tasks reflect the current phase instead of the earlier architecture phase

### 7. Reduce documentation sprawl
Acceptance criteria:
- no new migration doc is created unless it changes implementation
- source-of-truth docs are updated instead of duplicated
- reference-only pages are treated as reference, not active execution

---

## Phase 3 — Public Credibility and Launch Safety

### 8. Review public proof-point claims
Acceptance criteria:
- public-facing claims are field-grounded
- questionable figures are either corrected, softened, or documented for later review

### 9. Keep the editorial system tied to real actions
Acceptance criteria:
- editorial additions follow the routing model without regressions
- content system remains understandable to future contributors

---

## Phase 4 — Donor Growth and AI / Automation

### 10. Build a practical donor funnel
The site should visibly support:
- first-time donor
- sponsor-a-project donor
- partner / collaborator
- inquiry / contact
- newsletter subscriber

Acceptance criteria:
- donor path is visible from Home, Projects, Get Involved, and project/article pages
- CTAs are consistent and measurable

### 11. Add low-friction automation
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
1. Final CTA, bilingual, and conversion-path verification
2. Confirm donate / contact / newsletter / propose-a-project flows
3. Remove remaining migration leftovers
4. Decide and document the staged media launch stance
5. Close or merge stale migration tasks

### Near-term
6. Review public proof-point claims
7. Strengthen donor funnel visibility and measurement
8. Add low-friction automation where useful
9. Reduce documentation sprawl where it is slowing execution

### After launch
10. Expand project hubs and case studies
11. Improve donor funnel and analytics
12. Use the repo as the canonical public content system for VSF operations

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

1. Validate all primary CTA paths in EN and FR.
2. Confirm donation, contact, newsletter, and propose-a-project flows.
3. Document the staged media stance for launch.
4. Review public proof-point claims for field-grounded wording.
5. Close or merge stale migration tasks.
