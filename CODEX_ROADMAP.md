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

## Current Launch State

As of mid-April 2026, the website migration is **past the major architecture phase** and now in the **launch-readiness / cutover phase**.

Completed or substantially completed:
- core public pages rewritten around a clearer donor / partner journey
- vetiver-first homepage and public narrative in place
- CTA hierarchy standardized so education sits below primary support paths
- EN and FR metadata / SEO refreshed across core pages
- visible WordPress leftovers reduced in rendered HTML
- Projects layer rebuilt into a portfolio gateway
- public project paths now include RDC, San Rafael, and a proposal route
- story and article pages now use intent-based CTA routing
- content-level CTA targeting added so posts can point to the right next step
- Google Ads operating flow upgraded with OAuth refresh, draft creation, and approval-gated live changes

This means the site is no longer blocked by broad architecture or messaging work.
The main work left is final validation, cleanup, and cutover confidence.

## Current Remaining Launch-Critical Work

1. Finish residual public-facing copy cleanup.
2. Review public proof-point claims before broad promotion.
3. Confirm final donation and contact paths on live pages.
4. Validate bilingual internal routing and key CTA destinations in a final launch pass.
5. Decide and document the launch stance for media dependencies that still remain staged.
6. Add the local development recovery note for Next.js / HMR failures.

## 2026 Strategic Priorities

1. **Launch the new website** as the canonical public platform.
2. **Improve online presence and donor acquisition**.
3. **Use AI and automation aggressively** where useful and low-friction.
4. **Preserve and expose real field credibility**, especially RDC evidence and reporting.
5. **Make the site reflect current VSF reality**, not inherited WordPress copy.
6. **Support grants and donor conversion** through clear project, donation, and partnership paths.

## Current Operating Model

The public model should now be understood as:
- **one message and multiple destinations**
- not one message and one destination

That means:
- Home teaches vetiver first
- Vetiver explains the plant in plain language
- Projects acts as the portfolio gateway
- RDC acts as a flagship proof hub
- San Rafael acts as an active field path when campaign-ready
- stories route into the right next step instead of ending cold
- Contact / Services / Get involved remain valid conversion paths depending on intent

## Program Streams

Codex should still think in parallel streams, but their current maturity is different.

### Stream A — Operating Site Launch
Goal: ship a public-facing site that accurately represents VSF and can support donor growth.

**Status:** In final launch-readiness phase.

### Stream B — Content and Conversion Engine
Goal: turn articles, case studies, and project pages into donor-facing entry points.

**Status:** Core structure in place; needs final QA and continued editorial use.

### Stream C — RDC Evidence and Credibility Layer
Goal: surface trustworthy field evidence and policy/reporting credibility without making the site feel academic or bureaucratic.

**Status:** Public hub established; continue strengthening proof discipline and article connection.

### Stream D — Growth / Automation / AI
Goal: reduce manual work in publishing, lead capture, CRM updates, and campaign operations.

**Status:** Ads workflow improved; broader automation still mostly ahead.

### Stream E — Foundation Structure
Goal: make the site and repo usable as the public layer of a broader operating system.

**Status:** Directionally in place; continue documentation and low-friction operational scaffolding.

## Phase 1 — Launch-Blocking Validation and Cleanup

### 1. Final Launch-Readiness Audit
Review all launch-critical public routes:
- Home
- Vetiver
- Projects
- RDC
- San Rafael
- Propose a project
- Get involved
- Contact
- Services
- Stories listing
- representative article pages in EN and FR

Acceptance criteria:
- all launch-critical routes reviewed
- no broken primary CTA paths remain
- no obvious dead-end pages remain

### 2. Final CTA and Routing Verification
Validate that visible CTAs route correctly for:
- donate
- contact
- get involved
- projects
- RDC
- San Rafael
- propose a project
- services

Acceptance criteria:
- donation and contact paths are correct
- EN/FR localization is correct
- article-end CTAs point to the right destinations

### 3. Remove Remaining Migration Leftovers
Audit and fix:
- remaining WordPress artifacts
- dead placeholder links
- broken internal routes
- any visible legacy text remnants on launch-critical pages

Acceptance criteria:
- no visible WordPress leftovers remain on launch-critical pages
- internal navigation uses proper localized routes
- no dead CTA links remain

### 4. Decide and Document Media Launch Stance
Decision needed:
- continue hybrid use of existing WordPress-hosted media for launch
- or move specific launch-critical dependencies now

Codex should:
- identify which launch-critical pages still rely on staged media
- classify each dependency as launch-safe, pre-launch required, or post-launch cleanup
- document the chosen launch stance clearly

Acceptance criteria:
- media strategy is explicit and documented
- launch is not blocked by vague media uncertainty

### 5. Confirm Form Handling and Key Conversion Paths
Needed flows:
- contact
- newsletter / donor updates
- propose-a-project intake if exposed publicly

Codex should:
- confirm the current form implementation path
- verify that each visible form CTA is functional or intentionally disabled
- document what is wired versus staged

Acceptance criteria:
- contact and newsletter flows are testable end-to-end
- public intake paths are clear and not misleading

### 6. Add Local Development Recovery Notes
Codex should record a short runbook for the local dev server so future work can recover quickly from transient Next.js / HMR failures.

Include:
- when to restart the dev server
- when to clear `.next`
- how to verify the local homepage is returning `200` again

Acceptance criteria:
- the repo explains how to recover from a bad dev-server render state without guessing

## Phase 2 — Public Credibility and Launch Safety

### 7. Review Public Proof-Point Claims
Codex should review proof-point language used across the public site and flag claims that need validation, softening, or clearer sourcing before broad promotion.

Acceptance criteria:
- public-facing claims are donor-safe and field-grounded
- questionable figures are either corrected, softened, or explicitly documented for later review

### 8. Keep the Editorial System Tied to Real Actions
The routing system is now in place. The next step is to use it well.

Codex should ensure:
- article intent and CTA target metadata remain clean
- new stories continue to route toward the right project or action path
- no new public article becomes a dead end

Acceptance criteria:
- editorial additions follow the routing model without regressions
- content system remains understandable to future contributors

## Phase 3 — Donor Growth and AI / Automation

### 9. Build a Practical Donor Funnel
Site should support multiple paths:
- first-time donor
- sponsor-a-project donor
- partner / collaborator
- inquiry / contact
- newsletter subscriber

Codex should identify and strengthen:
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

## Phase 4 — Repo and Content System Hygiene

### 11. Standardize Public Content Structure
Codex should continue reviewing content architecture to ensure it supports:
- core public pages
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

### Immediate
1. Run the final launch-readiness audit
2. Verify donation, contact, bilingual routing, and key CTA paths
3. Remove any remaining migration leftovers
4. Decide and document the staged media launch stance
5. Add the local dev recovery runbook

### Near-term
6. Review public proof-point claims
7. Confirm forms and intake flows
8. Strengthen donor funnel visibility and measurement
9. Add low-friction automation where useful

### After launch
10. Expand project hubs and case studies
11. Improve donor funnel and analytics
12. Use the repo as the canonical public content system for VSF operations

## Non-Goals / Guardrails

Codex should avoid:
- treating the remaining work as another broad site rewrite
- importing old WordPress copy without reinterpretation
- overengineering CRM/automation before launch quality is secure
- building a generic nonprofit site disconnected from field realities
- burying evidence under marketing language

## Definition of Success

This roadmap succeeds if:
- VSF can replace WordPress with confidence
- the new site clearly expresses what VSF is and how it works now
- donors and partners have obvious, credible paths to engage
- RDC credibility is visible and usable
- content, projects, and CTAs feel like one coherent system
- launch blockers are reduced to known, documented, manageable items rather than vague unknowns

## Suggested Follow-Up Tasks for Codex

1. Produce a final launch-readiness checklist mapped to actual files and routes.
2. Validate all primary CTA paths in EN and FR.
3. Document the staged media stance for launch.
4. Add the local development recovery note.
5. Review public proof-point claims for donor-safe wording.
6. Propose 3 realistic AI/automation wins for the first post-launch cycle.
