# Image Migration Guidance

This note records the current image strategy and migration shortlist for the VSF website so Codex can implement visual improvements without guessing.

## Why this exists

The current site design is stronger than the current image strategy.

The UI already feels intentional, but image usage is still mixed:
- some strong real project photos
- some legacy WordPress media
- some support or stock-like images
- some older marketing graphics

The goal is not to recreate the former WordPress homepage image-for-image.
The goal is to keep the strongest legacy visuals, prefer real field photography, and place each image where it best supports trust, clarity, and action.

## Core visual rule

Prefer this hierarchy:

1. Real field photos from VSF projects
2. Real contextual documentary photos
3. Legacy support graphics only when they help explain proof or transformation
4. Stock or stock-like visuals only as fallback support, never as flagship imagery

For launch-facing pages, the site should feel mostly real-photo-led.

## Source folders reviewed

### 1. Vetiver RDC
Key strengths:
- strongest current flagship field-photo library
- erosion-bank images
- nursery and propagation images
- field-row and planted-strip images
- project-sign images
- `Vetiver Highway.jpg`

### 2. San Rafael
Key strengths:
- strongest current landslide / slope / field-risk imagery
- dramatic but real terrain photos
- a few useful human/context shots

### 3. Marketing / Pictures
This folder contains a small set of legacy or older website images worth considering.
Most important assets in that folder:
- `WhatsApp-Image-2024-01-31-at-09.26.31-1.jpeg`
- `WhatsApp-Image-2024-02-28-at-15.12.55-1.jpeg`
- `Before_After.png`

It also contains Unsplash-style or stock-like images that should not become flagship site visuals.

## Key findings from legacy homepage review

The legacy English homepage clearly used at least these major visual assets:
- `Vetiver-Highway-1024x766.jpg`
- `vlcsnap-2022-10-21-14h15m27s059-1024x576.jpg`

The first one is already represented in the new site direction through `Vetiver Highway.jpg`.
The second one was part of the older partnership-oriented homepage flow and may still be worth recovering if it exists outside the current repo/media set.

## Recommended image roles by page

### Homepage hero
Primary recommendation:
- `Vetiver Highway.jpg`

Why:
- clear at a glance
- easy to crop for a homepage hero
- visibly communicates practical land protection
- more polished and stable than most WhatsApp images

Backup candidates from San Rafael if a more urgent slope-risk visual is wanted:
- `IMG_1231.HEIC`
- `IMG_1233 (1).HEIC`
- `IMG_1243.HEIC`
- `IMG_1303.HEIC`

Use these only if the team intentionally wants the homepage to feel more landslide-focused and less infrastructure-focused.

### Homepage secondary visual
Preferred legacy image:
- `WhatsApp-Image-2024-01-31-at-09.26.31-1.jpeg`

Why:
- real project image
- strong aerial/organized-land feel
- visually distinctive
- supports “how vetiver is applied” better than generic grass or stock images

Best placement:
- a secondary homepage block under the hero or in a “how it is applied / projects in practice” section

### Homepage human / partnership visual
Preferred image:
- `WhatsApp-Image-2024-02-28-at-15.12.55-1.jpeg`

Why:
- adds human presence
- shows people interacting with vetiver in a real setting
- improves trust and warmth

Best placement:
- About
- Get involved
- partnership/support section
- homepage support block if more human warmth is needed

### Vetiver explainer / education
Preferred images:
- the roots-in-bag image from Vetiver RDC
- the hand-holding-vetiver-clump image from Vetiver RDC

These are stronger explainer visuals than `Vetiver roots.jpg`.

Avoid using `Vetiver roots.jpg` as the main explainer image because it reads more like a portrait/photo-with-person than a clean educational plant visual.

### RDC flagship page
Primary hero candidates:
- riverbank erosion images from Vetiver RDC

Best types from that folder:
- exposed riverbank edge
- erosion-bank photos showing the site problem clearly
- planted-bank context where the intervention logic is visible

Why these are better than the highway image for RDC:
- they feel more documentary
- they communicate the environmental problem directly
- they reinforce RDC as a credibility/evidence page

Support visuals for RDC:
- `Before_After.png`
- nursery / propagation photos
- `Ferme Vetiver 3` sign images
- field-row / planted-strip photos
- deforested / burned landscape photos

Use `Before_After.png` as a support visual, not as the page hero.

### San Rafael page
Primary hero candidates:
- `IMG_1231.HEIC`
- `IMG_1233 (1).HEIC`
- `IMG_1243.HEIC`
- `IMG_1303.HEIC`

Preferred first picks:
- `IMG_1231.HEIC`
- `IMG_1233 (1).HEIC`

Why:
- clear slope/erosion visuals
- dramatic but real
- strong sky/terrain contrast
- immediately communicates the landslide-stability problem

Use lower PNG/community images as supporting images, not the hero.

### Story cards / project cards
Preferred image types:
- field rows / planted strips
- project-sign images like `Ferme Vetiver 3`
- nursery / propagation images
- erosion-bank images
- San Rafael slope images

The goal for cards is concreteness and project reality, not abstract beauty.

## Images to avoid on key public pages

Do not use these as homepage hero, flagship project hero, or other top-level public visuals unless there is a specific editorial reason:
- airplane wing / smoke image
- scale / sack documentation image
- generic close-up grass textures with no context
- blurry video thumbnails as cover images
- empty field shots with too much sky and too little story
- stock or stock-like Unsplash images as flagship page imagery
- older screenshot-style graphics for modern public page sections

## Specific notes on Marketing / Pictures

### Worth migrating
- `WhatsApp-Image-2024-01-31-at-09.26.31-1.jpeg`
- `WhatsApp-Image-2024-02-28-at-15.12.55-1.jpeg`
- `Before_After.png`

### Not recommended as flagship site imagery
- `dallas-reedy-LWdXKpVFSKg-unsplash-scaled.jpg`
- `renaldo-matamoro-CNHX_CmNJus-unsplash-scaled.jpg`
- `lance-asper-q6v4nAme7ds-unsplash-scaled.jpg`
- `Capture-decran-le-2022-11-14-a-12.52.43.png`

These can remain in the archive, but they should not define the site’s public visual identity.

## Implementation guidance for Codex

1. Do not perform a broad image swap everywhere at once.
2. Start with the homepage and flagship pages:
   - homepage hero
   - homepage secondary image block
   - RDC hero/support visuals
   - San Rafael hero
3. Prefer migrated local media or the chosen launch media base over legacy WordPress URLs where practical.
4. Standardize crop logic for project/story cards so image quality feels consistent.
5. Keep the homepage visually real-photo-led.
6. Use support graphics only where they add explanation, not where they replace authenticity.

## Minimum recommended implementation set

If time is limited, implement these first:

1. Keep `Vetiver Highway.jpg` as the homepage hero for now.
2. Add `WhatsApp-Image-2024-01-31-at-09.26.31-1.jpeg` as a homepage secondary visual.
3. Add `WhatsApp-Image-2024-02-28-at-15.12.55-1.jpeg` to About, Get involved, or a partnership-oriented section.
4. Replace RDC lead/support visuals with real riverbank-erosion images from Vetiver RDC.
5. Use `IMG_1231.HEIC` or `IMG_1233 (1).HEIC` as the San Rafael hero.
6. Use `Before_After.png` only as a secondary proof/result visual.

## Follow-up work

If more time is available, a later pass should:
- recover or confirm the older `vlcsnap-2022-10-21-14h15m27s059...` homepage partnership image if it still exists in backups
- create a small approved “launch image set” for the site
- map each approved image to a page role so future edits stay consistent
