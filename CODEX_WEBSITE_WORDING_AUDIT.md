# CODEX_WEBSITE_WORDING_AUDIT.md

## Purpose

This document is the historical repo-aware wording audit for the public VSF website.

It is retained for context. The active source of truth for migration closure is [CODEX_ROADMAP.md](./CODEX_ROADMAP.md).

It should help Codex understand:
- what has improved
- what is now complete enough to protect
- what still reads poorly in the public site
- which pages need tightening versus full rewrites
- what the next wording priority is

This is not a generic brand memo.
It is a working execution brief for public website copy.

---

## Progress Update — April 14, 2026

Two major public-page wording rewrites are now merged:
- **Get Involved** now acts as a real support-routing hub.
- **About** now acts as a trust and positioning page instead of a generic mission/values page.

That means the remaining wording gap is no longer broad architecture.
It is now a more focused set of page-level cleanups and refinements.

---

## Executive Summary

The wording migration reached completion in PR 19; this audit is retained as a historical record of the wording gaps that were identified before closure.

The site is much better than the legacy WordPress version at introducing vetiver first. The strongest improvement is that the site no longer starts purely with NGO identity language.

### Current reality
- **Home is directionally strong** and should be tightened, not rebuilt from scratch.
- **The reusable vetiver explainer is strong** and should remain a core source of truth.
- **Get Involved is now directionally aligned** and mostly needs QA and refinement, not a major rewrite.
- **About is now directionally aligned** and mostly needs QA and refinement, not a major rewrite.
- **San Rafael still uses internal-facing language** and is now the clearest high-priority wording gap.

### Most important conclusion
The remaining work is **not** to rewrite everything.
The remaining work is to:
1. protect the parts that already work
2. remove internal / vague / inherited language where it still appears
3. rewrite the pages that are still clearly unfinished
4. keep every page understandable to a cold visitor who has never heard of vetiver

---

## What Is Already Working

### 1. Vetiver-first framing
The site is strongest when it begins with the plant, its use, and the practical problem it solves.

That strategic direction is correct and should be preserved.

### 2. Reusable vetiver explanation layer
The repo already contains strong reusable wording in `lib/vetiver-copy.ts`.

Codex should **reuse and refine** this copy rather than inventing a new explanation on every page.

### 3. Home page structure
The home page already follows the right order:
- What is vetiver?
- Why it matters
- What it can do
- How VSF helps
- What to do next

That sequence is good.
The problem is now mostly **tone calibration**, not overall structure.

### 4. Better CTA logic than before
The site is increasingly moving toward clearer paths:
- learn
- support
- partner
- propose
- stay connected

That is the right model.

### 5. About and Get Involved now fit their roles
- About now reads much more like a trust page.
- Get Involved now reads much more like a decision and routing page.

Those pages should now be protected and refined, not re-opened as major rewrites.

---

## What Still Sounds Wrong

### 1. Internal language leaking into public copy
Some pages still sound like repo notes, internal stakeholder language, or operational summaries.

Examples of phrases that should be removed from public-facing copy:
- `donor-safe`
- `public evidence`
- `pilot path`
- `field path`
- `support route`
- `project intake` when used visibly
- `stays readable without exposing sensitive field detail`

### 2. NGO-general wording replacing concrete explanation
Some sections still say broad things like:
- resilience
- regeneration
- climate action
- support our work
- community resilience

These are weak when they are not tied to visible land, water, slope, farming, or infrastructure problems.

VSF becomes more persuasive when the copy says what vetiver actually helps do:
- slow runoff
- hold soil in place
- stabilize slopes
- protect roads and fields
- reduce dependency on costly agricultural inputs
- help communities test practical solutions locally

### 3. Remaining migration feel
A page can technically work but still feel migrated.

Signals include:
- generic headings
- repetitive support language
- awkward HTML-heavy structure
- filler sections that do not improve understanding or conversion
- language that sounds like a nonprofit brochure instead of a clear public website

---

## Page-by-Page Audit For Codex

## Home
**File:** `components/home-page.tsx`

### Status
**Keep and tighten. Do not rebuild from scratch.**

### What is good
- strong hero sequence
- vetiver introduced early
- clear practical framing
- CTA structure is mostly correct

### What still needs work
The page still contains phrases that sound too internal, abstract, or strategic rather than public-facing.

Examples to tighten:
- `public evidence`
- `field work`
- `plant-based technology`
- `technical support, partnerships, and public evidence`

---

## About
**File:** `components/about-page.tsx`

### Status
**Merged and directionally aligned. Protect and refine.**

### What changed
The page now behaves much more like a trust and positioning page.

### Remaining focus
- keep tone warm and public-facing
- protect the trust-page role
- avoid drifting back into generic values-led nonprofit copy

---

## Get Involved
**File:** `content/en/pages/get-involved.mdx`

### Status
**Merged and directionally aligned. Protect and refine.**

### What changed
The page now behaves much more like a support-routing hub.

### Remaining focus
- keep the routing clear
- maintain the newsletter / stay-connected logic
- avoid reintroducing brochure-style filler

---

## Projects Gateway
**Files:**
- `components/projects-page.tsx`
- `content/en/pages/projects.mdx`

### Status
**Directionally improved, but still needs wording discipline.**

### Codex focus
Keep the structure, but make sure every card answers:
- what this page/project is
- why it matters publicly
- what the user can do next

The projects layer should feel like a public portfolio gateway, not an internal taxonomy.

---

## San Rafael Project Page
**File:** `app/(en)/projects/san-rafael/page.tsx`

### Status
**Needs wording cleanup. Highest current page-level priority.**

### Main problem
This page still contains internal-facing wording that is not appropriate for a public website.

Examples:
- `donor-safe`
- `public page stays donor-safe`
- `pilot path`
- `stays concrete enough to support and disciplined enough to learn from`

### What Codex should do
Rewrite this page so it sounds like:
- a real field project
- a clear public explanation
- a credible invitation to follow or support the work

Instead of explaining internal handling logic, explain:
- what the project is trying to do
- why the site matters
- what supporters can understand from it
- how this work could inform future replication

---

## Vetiver Explainer / Reusable Copy Layer
**File:** `lib/vetiver-copy.ts`

### Status
**Strong base. Refine, do not replace.**

### Improvement direction
- prefer practical benefit language over internal organizational language
- keep explanations short and visual
- keep proof points concrete and easy to reuse
- reduce over-reliance on RDC as the default next step

---

## Stories / Articles
**Relevant files include:**
- `components/story-card.tsx`
- article CTA / routing helpers
- individual post frontmatter and post templates

### Status
**Improving, but wording and routing still need discipline.**

### What still needs work
Stories should not end in vague inspiration.
They should route readers toward a clear next step without sounding mechanical.

---

## Copy Patterns Codex Should Remove

### Internal / operational phrases
- donor-safe
- public evidence
- field path
- support route
- intake route
- portfolio gateway when overused visibly
- readable without exposing sensitive detail

### Weak nonprofit filler
- support our work
- make a difference
- community resilience
- regeneration movement
- climate action
- environmental and social impact

### Generic language that hides the real value
- sustainable solutions
- long-term impact
- practical possibilities

---

## Exact Files Codex Should Review Next

### Highest priority
- `app/(en)/projects/san-rafael/page.tsx`
- `components/vetiver-page.tsx`
- `components/services-page.tsx`

### Tightening priority
- `components/home-page.tsx`
- `lib/vetiver-copy.ts`
- equivalent French files / mirrored public copy

### Ongoing consistency review
- projects page copy
- story CTA wording
- article end-state CTAs
- any page that still reads like migration cleanup instead of finished public copy

---

## What Codex Should Not Do

### 1. Do not rewrite strong copy just to make it sound different
Some parts are already good. Codex should preserve working structure where possible.

### 2. Do not turn VSF into a generic nonprofit brand
The site should feel specific, practical, and grounded in real land problems.

### 3. Do not bury vetiver under organizational language
The plant and its use must stay central.

### 4. Do not make the public site sound like internal repo documentation
Terms useful for internal planning should not appear in public-facing copy.

---

## Definition of Done

The wording work is done when:
- every major public page is understandable to a visitor who has never heard of vetiver
- no page reads like a migrated WordPress page
- no page reads like internal portfolio or repo language
- the public site explains concrete uses before abstract values
- each major page leads clearly to a next action
- EN and FR follow the same strategic logic

---

## Final Direction For Codex

Codex should think about the remaining work in three buckets:

### Bucket 1 — Protect what already works
Do not destroy the good vetiver-first structure already established on Home, About, Get Involved, and in the reusable explainer.

### Bucket 2 — Rewrite what is still obviously unfinished
Treat San Rafael as the clearest unfinished public page, then continue with Vetiver, Services, and cross-page consistency work.

### Bucket 3 — Remove internal language everywhere it appears
The final polish is not only about grammar or elegance.
It is about making sure the website sounds like a public-facing organization, not like an internal planning system.
