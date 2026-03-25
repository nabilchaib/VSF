# VSF Brand Reference

This folder keeps the current brand inputs used for the Next.js rebuild.

## Sources

- Graphic charter PDF: [`/Users/nabil.chaibdraa/Downloads/VSF-logo-Mini-Charte.pdf`](/Users/nabil.chaibdraa/Downloads/VSF-logo-Mini-Charte.pdf)
- Charter cover rasterized locally for quick reference: [`/Users/nabil.chaibdraa/Perso/VSF/data/brand/cover.png`](/Users/nabil.chaibdraa/Perso/VSF/data/brand/cover.png)
- Elementor global site settings: [`/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/site-settings.json`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/site-settings.json#L1)
- Header template: [`/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/templates/1169.json`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/templates/1169.json#L1)
- Home page template: [`/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/content/page/125.json`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/content/page/125.json#L1)
- Current logo assets: [`/Users/nabil.chaibdraa/Perso/VSF/extracted/uploads/2025/04/cropped-VSF-LOGO_Plan-de-travail-1-scaled.webp`](/Users/nabil.chaibdraa/Perso/VSF/extracted/uploads/2025/04/cropped-VSF-LOGO_Plan-de-travail-1-scaled.webp), [`/Users/nabil.chaibdraa/Perso/VSF/extracted/uploads/2025/04/VSF-LOGO_Plan-de-travail-1.webp`](/Users/nabil.chaibdraa/Perso/VSF/extracted/uploads/2025/04/VSF-LOGO_Plan-de-travail-1.webp), [`/Users/nabil.chaibdraa/Perso/VSF/extracted/uploads/2024/01/logo-icon.png`](/Users/nabil.chaibdraa/Perso/VSF/extracted/uploads/2024/01/logo-icon.png)

## Confirmed Tokens

These values come from Elementor site settings and page/template exports, so they are stronger references than the visual cover alone.

### Colors

- Primary green: `#6AA63F`
- Secondary green: `#75BE2B`
- Light moss background: `#D1D9B4`
- Secondary light green: `#CAD996`
- Accent dark: `#232323`
- Text gray: `#6C6C6C`
- White: `#FFFFFF`
- Dark border/overlay used on the home hero CTA: `#14261C`

Sources:
- [`site-settings.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/site-settings.json#L1)
- [`page-125-home.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/content/page/125.json#L1)

### Typography

- Base body font family: `Montserrat`
- Body weight: `400`
- Heading family: `Montserrat`
- Heading weight baseline: `700`
- Home hero highlight weight: `900` for the big `VETIVER` word
- Header nav weight: `500`

Sizing references:
- `h1`: `70px` desktop, `42px` tablet, `28px` mobile
- `h2`: `34px` desktop, `40px` tablet, `24px` mobile
- `h3`: `26px` desktop, `20px` mobile
- Header nav items: `17px`
- Header donate button: `13px`, uppercase, `1.4px` letter spacing

Sources:
- [`site-settings.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/site-settings.json#L1)
- [`templates/1169.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/templates/1169.json#L1)
- [`page-125-home.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/content/page/125.json#L1)

### Layout

- Main container width: `1170px`
- Widget spacing baseline: `10px`
- Breakpoints:
  - tablet: `768px`
  - desktop: `1025px`
- Header:
  - sticky
  - white background
  - soft shadow `rgba(0,0,0,0.15)` with `24px` blur
  - three-column composition: logo / centered nav / donate CTA

Sources:
- [`site-settings.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/site-settings.json#L1)
- [`templates/1169.json#L1`](/Users/nabil.chaibdraa/Perso/VSF/extracted/vsf-template/templates/1169.json#L1)

## Visual Direction From The Charter Cover

The rasterized cover in [`cover.png`](/Users/nabil.chaibdraa/Perso/VSF/data/brand/cover.png) confirms the intended visual language:

- Grass photography is a legitimate branded surface, not incidental decoration.
- The bright VSF green band should be treated as a core brand field.
- The logo is comfortable in black/dark ink on a light green surface.
- The overall tone is clean, structured, environmental, and not decorative-heavy.

## Current Guidance For The Next.js Rebuild

- Prefer the confirmed greens over the temporary earthy palette used in the earliest scaffold.
- Use `Montserrat` as the visible brand typeface unless the PDF later confirms a different secondary family.
- Keep the header bright, sticky, and structured around the horizontal logo.
- Use grass or field photography intentionally in hero sections, not as generic stock filler.
- Keep CTAs rounded and high-contrast with the secondary green.

## Gaps Still Not Fully Recovered

I was able to capture the charter cover, but not all PDF pages programmatically in this environment. That means these rules are still pending direct confirmation from the full PDF:

- official clear-space rules
- minimum logo size
- monochrome/reversed logo variants beyond what is visible in the assets
- any secondary typography family
- any formal iconography, illustration, or pattern rules

If we need those exact rules later, the next step is to manually inspect the remaining PDF pages and append them here.
