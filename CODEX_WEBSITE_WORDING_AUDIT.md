# CODEX_WEBSITE_WORDING_AUDIT.md

## Purpose

This document replaces the older `CORTEX_WORDING_BRIEF.md` as the **working source of truth for OpenAI tools**, especially **Codex**.

The old file was useful as a strategic prompt, but it was not specific enough for implementation. This audit is meant to help Codex understand:
- what is already working
- what still reads poorly in the public site
- which pages need tightening versus full rewrites
- which wording patterns should be removed
- what "done" looks like page by page

This is not a generic brand memo.
This is a **repo-aware execution brief for the public website copy**.

---

## Executive Summary

The wording migration is **partly successful, but not finished**.

The site is now much better than the legacy WordPress version at introducing vetiver first. The strongest improvement is that the site no longer starts purely with NGO identity language. That shift is correct.

However, the wording is still uneven.

### Current reality
- **Home is directionally strong** and should be tightened, not rebuilt from scratch.
- **The reusable vetiver explainer is strong** and should remain a core source of truth.
- **About is serviceable but still too institutional** and still explains VSF more through values than through practical proof.
- **Get Involved is still weak** and reads too much like migrated WordPress / legacy NGO copy.
- **Some project pages still use internal-facing language** that should never appear on a public site.

### Most important conclusion
The remaining work is **not** to rewrite everything.
The remaining work is to:
1. protect the parts that already work
2. remove internal / vague / inherited language
3. rewrite the pages that are still clearly unfinished
4. keep every page understandable to a cold visitor who has never heard of vetiver

---

## What Is Already Working

### 1. Vetiver-first framing
The new site is strongest when it begins with the plant, its use, and the practical problem it solves.

That strategic direction is correct and should be preserved.

### 2. The reusable vetiver explanation layer
The repo already contains strong reusable wording in `lib/vetiver-copy.ts`.

This matters because Codex should **reuse and refine** this copy rather than inventing a new explanation on every page.

### 3. The home page structure
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

That is the right model.
The remaining problem is that some pages still explain these paths weakly or in legacy language.

---

## What Still Sounds Wrong

### 1. Internal language leaking into public copy
Some pages still sound like repo notes, internal stakeholder language, or operational summaries.

Examples of phrases or patterns that should be removed from public-facing copy:
- `donor-safe`
- `public evidence`
- `pilot path`
- `field path`
- `support route`
- `project intake` when used as visible page wording
- `stays readable without exposing sensitive field detail`

These may be acceptable in internal docs.
They are not good public website language.

### 2. NGO-general wording replacing concrete explanation
Some sections still say broad things like:
- resilience
- regeneration
- climate action
- support our work
- community resilience

These are not wrong, but they become weak when they are not tied to a visible land, water, slope, farming, or infrastructure problem.

VSF becomes more persuasive when the copy says what vetiver actually helps do:
- slow runoff
- hold soil in place
- stabilize slopes
- protect roads and fields
- reduce dependency on costly agricultural inputs
- help communities test practical solutions locally

### 3. Legacy WordPress content still visible in wording quality
A page can technically work but still feel migrated.

Signals of unfinished migrated copy include:
- generic headings
- repetitive calls to “support our work”
- awkward HTML-heavy structure
- filler sections like “Spread the word” with no strategic depth
- language that sounds like a nonprofit brochure instead of a clear public website

### 4. Too much institutional self-description
Whenever the site starts talking too early about:
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

## Page-by-Page Audit For Codex

## Home
**File:** `components/home-page.tsx`

### Status
**Keep and tighten. Do not rebuild from scratch.**

### What is good
- Strong hero sequence
- Vetiver introduced early
- Clear practical framing
- CTA structure is mostly correct

### What still needs work
The page still contains phrases that sound a bit too internal, abstract, or strategic rather than public-facing.

Examples to tighten:
- `public evidence`
- `field work`
- `plant-based technology`
- `technical support, partnerships, and public evidence`

These ideas are valid, but the phrasing should become more human and more concrete.

### Preferred direction
Make the visitor feel:
- this plant is surprisingly useful
- this organization helps real communities apply it
- I understand why this matters in practical terms

### Acceptance criteria
Home succeeds when a first-time visitor can understand in a few seconds:
- what vetiver is
- what it helps do
- why VSF exists
- where to click next

---

## About
**File:** `components/about-page.tsx`

### Status
**Needs partial rewrite.**

### Main problem
The page is better than legacy copy, but it still leans too much on organizational framing.

It explains VSF through:
- values
- shared priorities
- partnership language

more than through:
- the practical problem
- what vetiver makes possible
- why VSF had to exist to move this work forward

### What Codex should do
Rebuild the page around this sequence:
1. why vetiver matters
2. why a group like VSF is needed
3. what VSF actually does in practice
4. how evidence, education, and project support fit together

### What to reduce
Reduce the emotional and visual weight of generic values cards unless each one is tied to a visible example.

### Acceptance criteria
The About page should answer:
- Why does VSF exist?
- Why vetiver?
- What does VSF actually do?
- Why should a donor or partner trust the approach?

It should not feel like a standard nonprofit About page.

---

## Get Involved
**File:** `content/en/pages/get-involved.mdx`

### Status
**Major rewrite required. This remains one of the weakest pages in the public site.**

### Main problem
This page still reads like migrated WordPress content.

It contains several signs of unfinished copy migration:
- legacy HTML blob structure
- generic headings
- weak section hierarchy
- soft NGO language
- filler CTA logic
- old-style image blocks

### What Codex should do
Rewrite the page around **clear visitor paths**, not generic participation language.

Recommended structure:
1. Start with one sentence that reconnects the visitor to vetiver
2. Offer four clear paths:
   - Learn about vetiver
   - Donate / support field work
   - Partner with VSF
   - Propose a project
3. Make each path concrete
4. Remove filler sections that do not help conversion or understanding

### What to remove or replace
Replace weak sections like:
- “Spread the word” as a major content block
- vague climate-action phrasing
- repetitive support language

### Acceptance criteria
This page should feel like a **decision page**, not a brochure.
A visitor should immediately understand which path fits them.

---

## Projects Gateway
**Files:**
- `components/projects-page.tsx`
- `content/en/pages/projects.mdx`

### Status
**Directionally improved, but still needs wording discipline.**

### What is good
The gateway logic is much stronger than before:
- flagship proof hub
- live project path
- proposal path

That is a strong information architecture for VSF.

### What still needs work
The wording should stay public and plain.
Whenever the page starts sounding like internal portfolio classification language, it gets colder.

### Codex focus
Keep the structure, but make sure every card answers:
- what this page/project is
- why it matters publicly
- what the user can do next

### Acceptance criteria
The projects layer should feel like a public portfolio gateway, not an internal taxonomy.

---

## San Rafael Project Page
**File:** `app/(en)/projects/san-rafael/page.tsx`

### Status
**Needs wording cleanup.**

### Main problem
This page still contains internal-facing wording that is not appropriate for a public website.

Examples:
- `donor-safe`
- `public page stays donor-safe`
- `pilot path`
- `stays concrete enough to support and disciplined enough to learn from`

This reads like internal comms, not a donor-facing or public-facing project page.

### What Codex should do
Rewrite this page so it sounds like:
- a real field project
- a clear public explanation
- a credible invitation to follow or support the work

### Better direction
Instead of explaining how the page is managed internally, explain:
- what the project is trying to do
- why the site matters
- what supporters can understand from it
- how this work could inform future replication

### Acceptance criteria
A public visitor should never feel they are reading internal portfolio management language.

---

## Vetiver Explainer / Reusable Copy Layer
**File:** `lib/vetiver-copy.ts`

### Status
**Strong base. Refine, do not replace.**

### What Codex should do
Use this file as a source of truth for consistent wording across pages.

### Improvement direction
Reduce abstract phrases when a clearer version is available.
For example:
- prefer practical benefit language over internal organizational language
- keep explanations short and visual
- keep proof points concrete and easy to reuse

### Acceptance criteria
This file should remain the cleanest reusable source for:
- what vetiver is
- what it can do
- why VSF matters

---

## Stories / Articles
**Relevant files include:**
- `components/story-card.tsx`
- article CTA / routing helpers
- individual post frontmatter and post templates

### Status
**Improving, but wording still needs discipline.**

### What is good
The site is moving toward routing stories into clearer next steps.
That is correct.

### What still needs work
Stories should not end in vague inspiration.
They should route readers toward a clear next step without sounding mechanical.

### Acceptance criteria
Every article should leave the reader with one obvious next action:
- learn more
- view a project
- support work
- contact VSF

---

## Copy Patterns Codex Should Remove

Codex should actively look for and remove these patterns from public-facing copy:

### Internal / operational phrases
- donor-safe
- public evidence
- field path
- support route
- intake route
- portfolio gateway when overused in visible copy
- readable without exposing sensitive detail

### Weak nonprofit filler
- support our work
- make a difference
- community resilience
- regeneration movement
- climate action
- environmental and social impact

These can sometimes remain in limited places, but they should never carry the main burden of explanation.

### Generic language that hides the real value
- sustainable solutions
- long-term impact
- practical possibilities

These phrases are acceptable only when followed by something specific.

---

## Preferred Wording Patterns

Codex should prefer language like this:

### Explaining vetiver
- Vetiver is a deep-rooted grass used to slow runoff and hold soil in place.
- When planted in lines, vetiver helps stabilize slopes, protect land, and retain water where it is needed.
- It is a low-cost, practical tool that can be used in many climates and landscapes.

### Explaining what VSF does
- VSF helps communities learn how to use vetiver in real conditions.
- VSF supports education, site-level guidance, field testing, and project visibility.
- VSF helps turn plant knowledge into practical action on the ground.

### Explaining projects
- This project shows how vetiver can be used in a real site.
- This page explains the local problem, the practical response, and the next step for support or partnership.
- What is learned here can inform other projects facing similar land and water challenges.

### Explaining support
- Support the field work
- Follow a live project
- Back practical proof
- Propose a new initiative
- Partner around a specific need

---

## Exact Files Codex Should Review Next

### Highest priority
- `content/en/pages/get-involved.mdx`
- `components/about-page.tsx`
- `app/(en)/projects/san-rafael/page.tsx`

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

Codex should think about the remaining wording work in three buckets:

### Bucket 1 — Protect what already works
Do not destroy the good vetiver-first structure already established on Home and in the reusable explainer.

### Bucket 2 — Rewrite what is still obviously unfinished
Treat `Get Involved` and parts of `About` and `San Rafael` as still unfinished public copy.

### Bucket 3 — Remove internal language everywhere it appears
The final polish is not only about grammar or elegance.
It is about making sure the website sounds like a public-facing organization, not like an internal planning system.
