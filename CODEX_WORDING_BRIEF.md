# CODEX_WORDING_BRIEF.md

## Purpose

This file is a historical Codex-facing website wording brief for VSF.

It is retained for context. The active source of truth for migration closure is [CODEX_ROADMAP.md](./CODEX_ROADMAP.md).

It should help Codex understand:
- what is already working
- what has now been completed
- what still needs rewriting or tightening
- which wording patterns to remove
- what the next page-level priority is

This is not a generic brand memo.
It is a repo-aware guide for the current public website wording work.

---

## Progress Update — April 14, 2026

Two of the highest-priority wording tickets are now merged:
- **Get Involved** now behaves as a real support-routing page.
- **About** now behaves as a trust and organizational-positioning page.

That means the remaining work is no longer broad architecture correction.
The remaining work is now **focused page-by-page execution and consistency**.

---

## Executive Summary

The wording migration reached completion in PR 19; this brief is retained as a historical record of the wording gaps that were identified before closure.

The strongest improvement so far is that the site increasingly starts with **vetiver first**, instead of opening with generic NGO identity language. That shift is correct and should be preserved.

### Current reality
- **Home is mostly strong** and should be tightened, not rebuilt from scratch.
- **The reusable vetiver explanation layer is strong** and should remain a source of truth.
- **Get Involved is now directionally aligned** with the routing strategy and should mostly receive QA and light refinement rather than another rewrite.
- **About is now directionally aligned** with the trust-page strategy and should mostly receive light refinement rather than a structural rewrite.
- **San Rafael still contains internal-facing language** and is now the clearest high-priority public wording gap.

### Most important conclusion
The remaining job is **not** to rewrite everything.
The remaining job is to:
1. protect what already works
2. remove internal and inherited language where it still appears
3. rewrite the pages that are still clearly unfinished
4. keep every page understandable to a cold visitor who has never heard of vetiver

---

## Core Problem With Current Site Language

The migrated site can still sometimes read like:
- an inherited nonprofit website
- a generic environmental organization
- an internal planning system rather than a public-facing website
- language written by people who already know vetiver

For a cold visitor, this creates a clarity problem:
- they do not know what vetiver is
- they do not know why they should care
- they do not know what makes it remarkable
- they do not know what VSF actually does with it
- they do not always know what to do next

---

## Strategic Reframe

The site should follow this progression:
1. **What is vetiver?**
2. **Why is it useful?**
3. **What can it do for land, water, farming, and communities?**
4. **How does VSF help turn that into action?**
5. **How can the visitor support, partner, or propose something?**

VSF should be presented as the organization that helps communities **understand, test, and apply vetiver in real conditions**.

---

## What Is Already Working

### 1. Vetiver-first framing
The strongest parts of the current site begin with the plant, the problem, and the practical use.

That direction is correct.
Do not lose it.

### 2. Reusable vetiver explanation layer
`lib/vetiver-copy.ts` already contains strong reusable wording.

Codex should **reuse and refine** that copy instead of inventing a new explanation on every page.

### 3. Home page structure
The current home structure is mostly right:
- what vetiver is
- why it matters
- what it can do
- how VSF helps
- what to do next

The issue is now mostly **tone and precision**, not architecture.

### 4. Clearer CTA logic
The site is increasingly moving toward clearer paths:
- learn
- support
- partner
- propose
- stay connected

That is the correct public model.

### 5. About and Get Involved now fit their page roles
- About now behaves much more like a trust page.
- Get Involved now behaves much more like a routing page.

These pages should now be protected and refined, not rethought from scratch.

---

## What Still Sounds Wrong

### 1. Internal language leaking into public copy
Some pages still sound like internal repo notes, planning language, or stakeholder language.

Examples of phrases that should be removed from public-facing copy whenever possible:
- `donor-safe`
- `public evidence`
- `pilot path`
- `field path`
- `support route`
- `project intake` when visible to users
- `stays readable without exposing sensitive field detail`

### 2. Abstract NGO language replacing concrete explanation
Some sections still rely too much on broad language such as:
- resilience
- regeneration
- climate action
- support our work
- community resilience

These are not wrong, but they are weak unless they are attached to something concrete.

The public site becomes stronger when it says what vetiver actually helps do:
- slow runoff
- hold soil in place
- stabilize slopes
- protect roads and fields
- reduce dependence on costly agricultural inputs
- help communities test practical solutions locally

### 3. Remaining migration feel
Some pages still feel migrated rather than written for the new site.

Warning signs include:
- generic headings
- repetitive donation language
- awkward HTML-heavy copy blocks
- filler sections that do not improve understanding or conversion
- wording that sounds like an NGO brochure instead of a clear public website

---

## Page-by-Page Priorities For Codex

### Priority 1 — San Rafael
**File:** `app/(en)/projects/san-rafael/page.tsx`

This page is now the clearest top-priority wording gap.

Codex should:
- remove internal portfolio language
- explain the project as a real public-facing field project
- make the invitation to follow or support it feel natural and credible
- present the project as implemented proof plus next-step logic

### Priority 2 — Vetiver
**Files:**
- `components/vetiver-page.tsx`
- `lib/vetiver-copy.ts`

Codex should:
- keep the educational spine
- reduce over-reliance on RDC as the implied next step
- balance education and action CTAs

### Priority 3 — Services
**File:** `components/services-page.tsx`

Codex should:
- make Services feel like a real partnership path
- clarify who it is for
- reduce the sense that it needs a project page to validate it

### Priority 4 — Stories
**Files include:**
- `app/(en)/stories/page.tsx`
- `components/story-card.tsx`
- `lib/article-routing.ts`

Codex should:
- preserve the routing model
- keep article exits tied to the right next step
- avoid over-defaulting to one destination

### Priority 5 — Home, Projects, Contact tightening
These pages are mostly directionally correct and should receive tightening, consistency, and QA rather than major structural rewrites.

---

## Preferred Wording Angles

### Explaining vetiver
- Vetiver is a deep-rooted grass used to protect soil and manage water.
- When planted in lines, vetiver helps slow runoff, hold soil in place, and stabilize vulnerable land.
- It is low-cost, resilient, and useful across many climates and landscapes.

### Explaining VSF
- Vetiver Sans Frontieres helps communities learn, test, and apply vetiver in real conditions.
- We support education, site guidance, project support, partnerships, and visibility.
- We help turn plant knowledge into practical action.

### Explaining projects
- This project shows how vetiver can be used in a real site.
- This page explains the local problem, the practical response, and the next step for support or partnership.
- What is learned here can help shape future work elsewhere.

---

## Copy Patterns Codex Should Remove

### Internal / operational phrases
- donor-safe
- public evidence
- field path
- support route
- intake route
- readable without exposing sensitive detail

### Weak nonprofit filler
- support our work
- make a difference
- regeneration movement
- environmental and social impact
- community resilience when used without concrete explanation

### Vague language hiding the real value
- sustainable solutions
- long-term impact
- practical possibilities

These phrases are only acceptable when followed immediately by something concrete.

---

## Practical Instructions for Codex

When rewriting:
1. Assume the reader has never heard of vetiver.
2. Introduce the plant before the organization.
3. Explain benefits through concrete use cases.
4. Keep the first explanation simple; move technical depth lower on the page.
5. Connect educational sections to a project, proof point, or CTA.
6. Reuse core language consistently across Home, About, Projects, and Get Involved.
7. Prefer practical public wording over internal strategic wording.
8. Protect strong existing structure instead of rewriting strong copy just to make it different.

---

## Definition of Success

The wording succeeds if a first-time visitor can answer these questions quickly:
- What is vetiver?
- Why is it useful?
- What kinds of problems can it solve?
- What does VSF do with it?
- How can I support, partner, or propose a project?

The wording work is done when:
- every major public page is understandable to a visitor who has never heard of vetiver
- no page reads like a migrated WordPress page
- no page reads like internal portfolio or repo language
- the site explains concrete uses before abstract values
- each major page leads clearly to a next action
- EN and FR follow the same strategic logic

---

## Final Direction For Codex

Think about the remaining work in three buckets:

### Bucket 1 — Protect what already works
Do not destroy the good vetiver-first structure already established on Home, About, Get Involved, and in the reusable explainer.

### Bucket 2 — Rewrite what is still clearly unfinished
Treat San Rafael as the clearest unfinished public page, then continue with Vetiver, Services, and cross-page consistency work.

### Bucket 3 — Remove internal language everywhere it appears
The final polish is not just about elegance.
It is about making sure the site sounds like a public-facing organization, not an internal planning system.
