# CODEX_ROADMAP.md

## Purpose

This roadmap is the execution guide for the VSF website **post-migration launch phase**.

The migration is no longer the main problem to solve.
The architecture direction is set, the core public pages have been rewritten, and the latest PRs pushed the site further into launch-ready territory.

From here, the work should focus on:
- validating live conversion paths
- tightening public credibility and proof language
- keeping visuals and metadata aligned with real field work
- reducing stale tasks and documentation noise
- preparing the site for donor growth, publishing rhythm, and light automation

The site remains the public surface of a broader VSF operating system, but the roadmap below is now intentionally biased toward **launch hardening and operational readiness**, not broad migration work.

---

## Progress Update — April 20, 2026

Eight launch-relevant PRs are now merged in sequence:
- **PR 15** — Get Involved support hub
- **PR 16** — About trust positioning
- **PR 18** — website launch cleanup
- **PR 19** — roadmap completion / core wording completion
- **PR 20** — migration closure cleanup / doc hygiene / FR newsletter CTA fix
- **PR 21** — image migration rollout / field-photo replacement / metadata image normalization
- **PR 22** — homepage framing update

This matters because several roadmap items that were previously listed as still open are now **done or substantially done**:
- the homepage has already been reframed to welcome visitors to VSF before the vetiver explainer
- image migration has already advanced across key pages
- migration-facing docs have already been pushed toward historical/reference status
- the French get-involved newsletter anchor bug has already been fixed

The roadmap should therefore stop describing those items as pending implementation work.

---

## Current Site State

As of April 20, 2026, the website is **past migration closure** and is now in the **launch hardening / operating phase**.

Completed or substantially completed:
- core public pages rewritten around a clearer donor / partner / public-education journey
- homepage reframed so visitors arrive at Vetiver Without Borders first, then move into the vetiver explanation flow
- Get Involved rewritten into a real support-routing page
- About rewritten into a trust and organizational-positioning page
- Vetiver strengthened as the main education page with broader CTA logic
- Services strengthened as a partnership and implementation path
- Projects positioned as a portfolio gateway
- RDC positioned as a flagship proof hub
- San Rafael positioned as a donor-facing field pilot and expansion story
- Stories and article pages now use intent-based CTA routing with clearer next steps
- EN and FR metadata / SEO refreshed across core pages
- visible WordPress leftovers reduced across launch-facing pages
- legacy FAQ and Vetiver System bridge pages cleaned up in EN and FR
- image strategy materially improved through migration to real field photography on major pages
- page metadata and project metadata image resolution normalized for social previews
- launch-readiness and migration docs partially cleaned up and pushed toward reference status
- local development recovery note added for Next.js / HMR failures
- Google Ads operating flow upgraded with OAuth refresh, draft creation, and approval-gated live changes

This means the site is no longer blocked by broad page rewrites, homepage positioning, or first-pass image credibility.
The main work left is **verification, proof quality, funnel quality, media governance, and launch operations discipline**.

---

## What Is Actually Left

### Still important now
1. Run the final live QA pass on CTA behavior, routing, localization, and dead-end pages.
2. Confirm donation, contact, newsletter, and propose-a-project flows end to end.
3. Review public proof-point and evidence language so claims remain field-grounded and donor-safe.
4. Confirm the launch stance for staged media dependencies and long-term asset hosting.
5. Tighten project / article / support-page funnel continuity so users always have a credible next step.
6. Finish task and documentation hygiene so the repo reflects the current phase instead of the migration phase.

### No longer roadmap-worthy as open build items
- homepage reframing before the vetiver explainer
- first major image migration rollout
- migration-closure wording cleanup
- FR newsletter anchor fix on Get Involved

Those are now complete enough to move out of the “to do” column.

---

## Task and Documentation Hygiene

From here, keep roadmap maintenance lean:
- update this file when execution phase changes
- avoid leaving completed migration tasks written as active work
- treat superseded migration docs as reference or archive material
- prefer one source of truth over parallel planning files
- open new docs only when they change implementation or unblock a concrete decision

---

## Execution Discipline

Codex should now default to **validate, tighten, and ship**, not reopen completed migration debates.

### Rules
- Do not restate completed work as pending roadmap work.
- Do not create a new strategy doc unless it changes implementation.
- Do not keep parallel task pages for the same outcome.
- When a task is absorbed into another task, mark it done or archive it.
- When a page role is settled, move from discussion to implementation or QA.
- Prefer updating the existing source-of-truth doc over creating a new one.

### Source-of-truth hierarchy
1. `CODEX_ROADMAP.md` — current execution order and phase definition
2. `CODEX_WORDING_BRIEF.md` — public wording guidance
3. `CODEX_WEBSITE_WORDING_AUDIT.md` — wording gaps and cleanup guidance
4. active PRs / active task rows — live execution
5. launch-readiness and migration notes — reference only unless reopened by a concrete blocker

Everything else should either support execution directly or be archived / treated as reference only.

---

## Current Operating Model

The public model should now be understood as:
- **one mission and multiple valid next steps**
- not one project and not one donor path

That means:
- Home welcomes visitors to VSF first, then introduces vetiver immediately as the practical method behind the mission
- Vetiver explains the plant in plain language
- About builds trust and organizational clarity
- Get Involved routes supporter intent
- Projects acts as the portfolio gateway
- RDC acts as a flagship proof hub
- San Rafael acts as a public field-proof / pilot-expansion page
- stories route into the right next step instead of ending cold
- Contact / Services / Get Involved remain valid conversion paths depending on intent

The operating question is no longer “what should each page be?”
It is now “do the pages connect cleanly, credibly, and measurably?”

---

## Phase 1 — Launch Verification and Conversion QA

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
- all launch-critical routes reviewed on the deployed site
- no broken primary CTA paths remain
- no obvious dead-end pages remain
- visible imagery, metadata, and page role feel aligned

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
- support-page CTAs no longer compete or contradict each other

### 3. Confirm form handling and key conversion paths
Needed flows:
- contact
- newsletter / donor updates
- propose-a-project intake if exposed publicly

Acceptance criteria:
- contact and newsletter flows are testable end-to-end
- public intake paths are clear and not misleading
- fallback handling is explicit where external tools or staged infrastructure still exist

---

## Phase 2 — Public Credibility, Evidence, and Media Governance

### 4. Review public proof-point claims
Acceptance criteria:
- public-facing claims are field-grounded
- questionable figures are corrected, softened, or explicitly treated as directional references
- page copy does not overclaim what VSF has not yet proven publicly

### 5. Review image and media governance
Decision needed:
- continue hybrid use of existing WordPress-hosted media for launch
- or migrate specific launch-critical dependencies to the longer-term media stack

Acceptance criteria:
- media strategy is explicit and documented
- launch is not blocked by vague media uncertainty
- flagship pages use real field photography wherever possible
- social preview images remain correct after the latest metadata normalization changes

### 6. Tighten support-funnel continuity
Acceptance criteria:
- Home, Projects, Get Involved, RDC, San Rafael, and stories all expose a clear next step
- first-time visitors can move from learning to supporting without confusion
- no major page ends with weak or generic CTA logic

---

## Phase 3 — Task Hygiene and Operational Readiness

### 7. Close or merge stale migration tasks
Acceptance criteria:
- no roadmap item remains open if already delivered in PR 20–22
- broad migration tasks reflect the current launch-hardening phase
- completed page-role work is marked done in tracking

### 8. Reduce documentation sprawl
Acceptance criteria:
- no new roadmap-adjacent doc is created unless it changes implementation
- source-of-truth docs are updated instead of duplicated
- reference-only pages are treated as reference, not active execution

### 9. Prepare lightweight launch operations
Priority operating needs:
- simple content publishing rhythm for updates / stories
- clear ownership for copy, image selection, and QA
- basic measurement of donor / contact / newsletter paths
- handoff clarity for Codex on what is still active vs finished

Acceptance criteria:
- launch tasks are small, current, and execution-oriented
- repo guidance helps future contributors avoid reopening solved questions

---

## Phase 4 — Donor Growth and Light Automation

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
- flagship projects support donation without making the entire site feel single-project-led

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
- automation work does not distract from launch quality

---

## Recommended Implementation Order

### Immediate
1. Final live CTA, bilingual, and conversion-path verification
2. Confirm donation / contact / newsletter / propose-a-project flows end to end
3. Review public proof-point claims for field-grounded wording
4. Confirm media launch stance and long-term asset-hosting approach
5. Close or merge stale migration tasks now made obsolete by PR 20–22
6. Tighten support-funnel continuity where pages still end weakly

### Near-term
7. Reduce documentation sprawl where it is slowing execution
8. Add basic measurement to donor and contact paths
9. Implement 1–2 low-friction automations where useful
10. Expand story / project publishing rhythm around real field updates

### After launch
11. Expand project hubs and case studies
12. Improve donor funnel, analytics, and campaign structure
13. Use the repo as the canonical public content system for VSF operations

---

## Non-Goals / Guardrails

Codex should avoid:
- treating the remaining work as another broad site rewrite
- reopening already-merged homepage or image-migration debates without a concrete regression
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
- flagship pages feel real-photo-led and field-grounded
- content, projects, and CTAs feel like one coherent public system
- launch blockers are reduced to known, documented, manageable items rather than vague unknowns
- task and documentation overhead no longer slows execution

---

## Suggested Follow-Up Tasks for Codex

1. Validate all primary CTA paths in EN and FR on the deployed site.
2. Confirm donation, contact, newsletter, and propose-a-project flows.
3. Review public proof-point claims and soften anything not evidence-safe.
4. Document the launch stance for media hosting and staged dependencies.
5. Tighten weak page-end CTAs and support-funnel continuity.
6. Close or merge stale migration tasks that PR 20–22 already resolved.
