# CORTEX_WORDING_BRIEF.md

## Purpose

This file remains in the repo for continuity, but it should now be read as a **Codex-facing website wording brief**.

It replaces the earlier generic prompt style and now serves as a practical execution guide for OpenAI tools working on the VSF website.

Codex should use this file to understand:
- what is already working
- what still sounds wrong on the public site
- which pages need tightening versus major rewrites
- which wording patterns to remove
- what done looks like page by page

This is not just a brand memo.
It is a **public website wording brief tied to the actual repo state**.

---

## Executive Summary

The wording migration is moving in the right direction, but it is **not finished**.

The strongest improvement so far is that the site increasingly starts with **vetiver first**, instead of opening with generic NGO identity language. That shift is correct and should be preserved.

However, the public wording is still uneven.

### Current reality
- **Home is mostly strong** and should be tightened, not rebuilt from scratch.
- **The reusable vetiver explanation layer is strong** and should remain a source of truth.
- **About still leans too institutional** and explains VSF too much through values instead of practical proof.
- **Get Involved still feels too much like migrated WordPress copy** and needs a proper rewrite.
- **Some project pages still contain internal-facing language** that should not appear on a public site.

### Most important conclusion
The remaining job is **not** to rewrite everything.
The remaining job is to:
1. protect what already works
2. remove internal and inherited language
3. rewrite the pages that are clearly unfinished
4. keep every page understandable to a cold visitor who has never heard of vetiver

---

## Core Problem With Current Site Language

The migrated site still sometimes reads like:
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

That is the correct public model.

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

These may be acceptable internally.
They are not strong public website language.

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

### 3. Legacy migration feel
Some pages still feel migrated rather than written for the new site.

Warning signs include:
- generic headings
- repetitive donation language
- awkward HTML-heavy copy blocks
- filler sections that do not improve understanding or conversion
- wording that sounds like an NGO brochure instead of a clear public website

### 4. Too much institutional self-description
Whenever the site starts too early with:
- our values
- our mission
- our approach
- our partnerships

before proving why the visitor should care about vetiver, the copy weakens.

The correct order remains:
1. problem
2. practical plant-based solution
3. what becomes possible
4. why VSF exists
5. how to engage

---

## Best Existing Source Material

### 1. Existing reusable vetiver copy
Use `lib/vetiver-copy.ts` as the main reusable base for:
- what vetiver is
- what it can do
- why VSF matters

### 2. Old mission and educational copy
Use it for practical educational explanation, not for direct reuse.

Strong ideas include:
- deep root system
- slowing runoff
- holding soil in place
- low-cost alternative to heavy infrastructure
- applications in erosion, slopes, agriculture, water, and degraded land

### 3. RDC / field-facing project material
Use this as the modern proof and relevance layer.

Strong ideas include:
- field evidence first
- reduced dependence on costly inputs
- no-till and soil protection logic
- practical adaptation rooted in real sites
- product and livelihood opportunities where appropriate

### 4. Existing VSF proof points
Use carefully sourced, repeatable public proof points where they already exist in VSF materials.

Examples already circulating in VSF work:
- 357 CAD$/ha
- 90% soil loss reduction
- 70% water runoff reduction

These should remain **proof support**, not the whole message.

---

## Main Messaging Pillars

### Pillar 1 — Vetiver is practical
Vetiver should be framed as a practical plant-based solution, not a mystical or overly technical concept.

Good language:
- a deep-rooted grass for soil and water protection
- a low-cost practical tool
- a solution for erosion, runoff, slope stabilization, and degraded land

Avoid:
- unexplained technical terms too early
- academic framing before the visitor understands the basics

### Pillar 2 — Vetiver is more versatile than expected
The site should help the visitor discover a broader set of use cases than they expect.

Useful practical applications include:
- stopping erosion
- slowing runoff
- stabilizing slopes
- protecting roads and infrastructure
- restoring degraded land
- helping farmers retain soil and moisture
- reducing dependence on costly agricultural inputs
- creating local economic opportunities from vetiver products

### Pillar 3 — VSF helps turn knowledge into action
VSF should not sound like a distant charity.
It should sound like an enabling organization that helps move knowledge into field reality.

Good framing:
- VSF helps communities learn how to use vetiver in real conditions
- VSF supports education, site-level guidance, field testing, project support, and visibility
- VSF helps turn plant knowledge into practical action

### Pillar 4 — Evidence matters, but should stay human
The site should combine inspiration with proof.

Use:
- practical field results
- before/after logic
- project stories
- carefully sourced claims
- project pages that show the problem, response, and next step

### Pillar 5 — Every page should lead to a next action
Each major page should gently lead somewhere clear:
- learn more
- donate
- support a project
- partner with VSF
- propose a project
- subscribe for updates

---

## Page-by-Page Priorities For Codex

### Priority 1 — Get Involved
**File:** `content/en/pages/get-involved.mdx`

This remains one of the weakest public pages.
It still feels too much like migrated WordPress / legacy NGO copy.

Codex should:
- rewrite it around clear visitor paths
- remove filler sections
- replace generic participation language with decision-oriented copy
- make each path concrete: learn, support, partner, propose

### Priority 2 — About
**File:** `components/about-page.tsx`

This page is serviceable, but still too institutional.

Codex should:
- reduce the weight of values-led explanation
- explain VSF through the practical problem and the role VSF plays
- make trust come from clarity and action, not from abstract positioning

### Priority 3 — San Rafael project page
**File:** `app/(en)/projects/san-rafael/page.tsx`

This page still contains internal-facing language.

Codex should:
- remove internal portfolio language
- explain the project as a real public-facing field project
- make the invitation to follow or support it feel natural and credible

### Priority 4 — Home tightening
**File:** `components/home-page.tsx`

Do not rebuild the page.
Tighten it.

Codex should:
- reduce internal / abstract phrases
- keep the strong hero and education-first flow
- make the wording more concrete and human

### Priority 5 — Reusable copy refinement
**File:** `lib/vetiver-copy.ts`

Keep this as a source of truth.
Refine it only where the wording becomes too abstract or internal.

---

## Recommended Site Wording Structure

### Home Page
Goal: make people care about vetiver quickly.

Recommended flow:
1. Hero: introduce vetiver as a remarkable practical solution
2. What is vetiver?
3. What can it do? with 4–6 concrete use cases
4. How VSF helps
5. Flagship projects or proof layer
6. Clear CTA paths

### About Page
Goal: explain why VSF exists only after the visitor understands the opportunity.

Recommended flow:
- why vetiver matters
- why VSF was needed
- what VSF actually does
- values only when tied to visible action or proof

### Projects Page
Goal: show vetiver in action.

Projects should be framed as public examples of what becomes possible with vetiver, not as internal project records.

### Get Involved Page
Goal: match each type of visitor with a clear path.

Paths should include:
- learn about vetiver
- support field work
- sponsor or support a project
- partner with VSF
- propose a project
- subscribe for updates

### Stories / Articles
Goal: educate first, then route visitors to the right next step.

Each article should answer a practical question or show a concrete problem that vetiver can address.

---

## Tone Guidelines

Use:
- clear
- practical
- credible
- generous
- hopeful
- concrete

Avoid:
- NGO boilerplate
- abstract climate language without a land or human problem attached
- technical explanation before the basics are clear
- mission/vision/values copy with no practical example
- internal repo or portfolio language leaking into public pages

---

## Preferred Wording Angles

### Explaining vetiver
- Vetiver is a deep-rooted grass used to protect soil and manage water.
- When planted in lines, vetiver helps slow runoff, hold soil in place, and stabilize vulnerable land.
- It is low-cost, resilient, and useful across many climates and landscapes.

### Explaining the Vetiver System
- The Vetiver System is a simple way of using vetiver in lines to help land retain water, reduce erosion, and protect fragile ground.
- It is a plant-based approach that can support farmers, communities, and infrastructure without relying only on heavy engineering.

### Explaining VSF
- Vetiver Sans Frontières helps communities learn, test, and apply vetiver in real conditions.
- We support education, site guidance, project support, partnerships, and visibility.
- We help turn plant knowledge into practical action.

### Explaining projects
- This project shows how vetiver can be used in a real site.
- This page explains the local problem, the practical response, and the next step for support or partnership.
- What is learned here can help shape future work elsewhere.

---

## Copy Patterns Codex Should Remove

Codex should actively remove these public-facing patterns where they appear:

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
Do not destroy the good vetiver-first structure already established on Home and in the reusable explainer.

### Bucket 2 — Rewrite what is still clearly unfinished
Treat Get Involved, parts of About, and parts of San Rafael as unfinished public copy.

### Bucket 3 — Remove internal language everywhere it appears
The final polish is not just about elegance.
It is about making sure the site sounds like a public-facing organization, not an internal planning system.
