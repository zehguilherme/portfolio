---
name: Portfolio — José Guilherme
description: Cool slate, paper, and teal identity for José Guilherme's software portfolio
colors:
  page-desktop: '#f5f6f7'
  page-mobile: '#f7f9ff'
  card: '#ffffff'
  surface-soft: '#eef4fd'
  surface-chip: '#e9eef7'
  surface-active: '#e3e9f2'
  text-hero: '#080e14'
  text-primary: '#161c22'
  text-supporting: '#4b5865'
  text-secondary-desktop: '#595f66'
  text-secondary-mobile: '#575f6b'
  text-auxiliary: '#3f484d'
  action: '#0f7898'
  action-hover: '#005e79'
  border-header: '#d9dfe5'
  border-surface: '#bec8ce'
  border-control: '#6f787e'
  border-interactive-hover: '#bec8ce'
  dark-border-interactive-hover: '#617789'
  dark-page: '#080e14'
  dark-section: '#0b121a'
  dark-card: '#0e1620'
  dark-surface-chip: '#1f3342'
  dark-border: '#23323f'
  dark-text-primary: '#f5f5f5'
  dark-text-secondary: '#9aa8b4'
  dark-action: '#78d2eb'
typography:
  display: 'Clash Display, sans-serif'
  body: 'Inter, sans-serif'
  technical: 'JetBrains Mono, monospace'
rounded:
  control: '12px'
  card-mobile: '16px'
  card-desktop: '24px'
  pill: '9999px'
spacing:
  unit: '4px'
  steps: '4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 64px'
---

# Design System: Portfolio — José Guilherme

## Identity

The visual direction follows the light desktop and mobile screens in [Stitch project 5719660689573789097](https://stitch.withgoogle.com/projects/5719660689573789097). Cool slate text, paper surfaces, and teal actions create a precise, approachable portfolio. The prior "Cool Ledger" restrictions against a second font and accent color no longer apply.

## References and extraction

The unmodified exports and screen IDs are recorded in [the issue #282 reference archive](docs/superpowers/references/issue-282/README.md). Desktop light is the primary visual reference; mobile light and the light mobile menu are separate references. Exports are evidence, not product content: do not carry over illustrative imagery, generic URLs, sample claims, 2025 copyright, or the mobile zoom restriction.

Desktop: `eb30dcea73a642d48a0ba3e8a4b2fabb`; mobile: `295e2de9e77b4bf0bc196a64828804cd`; menu open: `08d0f389f1a44cee9c3d4cd2f6cd5c95`.

## Typography

- Clash Display, locally hosted weights 500/600/700: brand mark and headings.
- Inter weights 400/500/600/700: body, navigation, controls.
- JetBrains Mono weights 400/500: technical metadata on desktop only.
- Desktop hero: Clash Display 600, `clamp(40px, 5.5vw, 76px)`, line-height .98, tracking -.035em.
- Mobile hero: Clash Display 600, `clamp(40px, 10vw, 56px)`, line-height .98, tracking -.035em.
- Section title desktop: Clash Display 700, 36/44px, tracking -.025em; mobile 600, 26/32px, tracking -.025em.
- Hero body: Inter 400, 18px desktop, 16px mobile, line-height 1.6.
- Body: Inter 400, 16/24px desktop and 14/20px mobile. Auxiliary: 14/20px desktop and 12/16px mobile.
- Technical metadata: JetBrains Mono, 12/16px or 13/18px.

Clash Display is from the official Fontshare CDN, with local files and source notes in `app/fonts/`. It is governed by the ITF Free Font License; see [Fontshare's license](https://www.fontshare.com/licenses/itf-free-font-license). Space Grotesk is only a fallback in the export and is not loaded.

## Colors

Use semantic tokens for all new styles. The effective rendered HTML includes local overrides to the generated token registry; the explicit responsive differences are retained below.

| Role                  | Desktop               | Mobile                |
| --------------------- | --------------------- | --------------------- |
| Page                  | `#f5f6f7`             | `#f7f9ff`             |
| Card                  | `#ffffff`             | `#ffffff`             |
| Soft surface          | `#eef4fd`             | `#eef4fd`             |
| Chips / inner surface | `#e9eef7`             | `#e9eef7`             |
| Active surface        | `#e3e9f2`             | `#e3e9f2`             |
| Hero/header text      | `#080e14`             | `#080e14`             |
| Main text             | `#161c22`             | `#161c22`             |
| Supporting text       | `#4b5865`             | `#4b5865`             |
| Secondary text        | `#595f66`             | `#575f6b`             |
| Auxiliary text        | `#3f484d`             | `#3f484d`             |
| Action / hover        | `#0f7898` / `#005e79` | `#0f7898` / `#005e79` |
| Action text           | `#ffffff`             | `#ffffff`             |
| Header divider        | `#d9dfe5`             | `#d9dfe5`             |
| Surface border        | `#bec8ce`             | `#bec8ce`             |
| Control outline       | `#6f787e`             | `#6f787e`             |
| Theme toggle border   | Header divider        | Header divider        |
| Theme toggle icon     | Supporting text       | Supporting text       |

Opacity variants in the light HTML are the sticky header at `#f5f6f7/95` and the mobile menu panel at `#f5f6f7/98`; both use backdrop blur. Normal text needs 4.5:1 contrast and large text 3:1. Measured token pairs: primary text/page 15.86:1; desktop secondary/page 5.97:1; supporting/page 6.73:1; mobile secondary/page 6.13:1; action/white 5.05:1; action hover/white 7.30:1; control outline/page 4.16:1. Surface borders are structural; use the stronger control-outline token for interactive boundaries where 3:1 is needed.

## Dark mode

Dark mode follows the Stitch dark screens after the light sections were completed. Semantic roles switch to page `#080e14`, section `#0b121a`, card `#0e1620`, chip `#1f3342`, border `#23323f`, primary text `#f5f5f5`, secondary text `#9aa8b4`, and accent `#78d2eb`. White text remains on accent surfaces; dark text `#080e14` is used on the aqua primary action. Measured dark pairs: secondary/page 7.97:1 and dark action text/aqua 11.28:1.

The header theme toggle stores an explicit selection in local storage. On first visit, an inline head script applies the operating-system preference before the page paints; without a saved choice, the system preference wins. The theme toggle does not appear until both light and dark styles are available.

## Layout and interaction

- Maximum width 1240px; gutters 16px mobile, 24px tablet, 32px desktop.
- Breakpoints: mobile below 768px; tablet 768–1023px; desktop from 1024px.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 64px.
- Project card padding 20px mobile, 24px desktop. Hero vertical padding 28/30px mobile plus main spacing, 64/36px desktop.
- Control and button radius 12px; card radius 16px mobile and 24px desktop; pill radius 9999px is reserved for tags and chips. Media radii are separate.
- 1px borders, subtle shadows, 150–200ms transitions.
- Visible 2px focus indicator with 2px offset; targets at least 44×44px.
- Links and buttons use the pointer cursor.
- Desktop navigation links use the header text color on hover.
- Mobile menu links use the `surface-active` background on hover in light and dark themes.
- Desktop navigation links sit beside the brand mark on the left; theme controls stay on the right.
- The JG favicon follows the header wordmark, with dark text in light system mode and light text in dark system mode.
- Hero and project actions all use the shared Button primitive: primary links use the default variant, E-mail and GitHub links use the outline variant, and social links use the icon size. Every button uses the theme toggle's 12px radius in both themes. Icon-and-label buttons have an 8px gap by default. Project card actions are equal-width and spaced 16px below the preview; keep each action at least 44px tall and icon-only links named accessibly.
- Icon-only social links keep 44px square targets.
- Outline buttons and the theme toggle share a transparent background, header-divider border, supporting text, teal border/header text on hover, 12px radius, and 2px focus indicator in both themes.
- Technology pills use the brighter `#1f3342` surface in dark mode; light-mode chip colors remain unchanged.
- The About section uses the same bordered, rounded semantic card surface as Contact, with an editorial two-column layout and full-height divider on desktop, and a stacked flow with a horizontal divider before skills on mobile and tablet.
- Project cards align descriptions and technology tags in reserved slots so preview images share a top edge. On mobile, the description and tag slots and the gap before the preview are shorter; the 16px gap between the preview and actions matches desktop. Chips keep their natural height and center within the tag slot. They use reduced padding and gaps below 375px; action buttons stay at the card bottom.
- Theme toggle uses the outline Button variant with a transparent background. Its border uses the header divider token and its icons use supporting text at rest; on hover, the border changes to action teal and the icons to header text. Moon and sun icons are 18px.
- The mobile menu button uses the same outline Button variant as the theme toggle.
- Honor reduced motion and browser zoom.

## Migration status

All sections use semantic tokens. Legacy color tokens were removed after their consumers migrated. Both themes are available without duplicating components, and the responsive light values retain the desktop/mobile differences from the rendered exports.
