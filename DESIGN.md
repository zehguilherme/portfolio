---
name: Portfolio — José Guilherme
description: Cool-slate, quiet-precision portfolio of a front-end developer
colors:
  deep-slate-ink: '#0f172a'
  cool-paper: '#f9f9f9'
  white-card: '#ffffff'
  slate-body: '#2d3435'
  ledger-gray: '#596061'
  ledger-wash: '#f2f4f4'
  ledger-line: '#dde4e5'
  ash-violet: '#605c78'
  rust-clay: '#9f403d'
typography:
  display:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '3rem'
    fontWeight: 600
    lineHeight: 1.25
  headline:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '2.25rem'
    fontWeight: 600
  title:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 600
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
rounded:
  sm: '4px'
  md: '6px'
  lg: '12px'
  full: '9999px'
spacing:
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  xxl: '48px'
components:
  button-primary:
    backgroundColor: '{colors.deep-slate-ink}'
    textColor: '{colors.cool-paper}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
  button-secondary:
    backgroundColor: '{colors.ledger-wash}'
    textColor: '{colors.slate-body}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
  button-outline:
    backgroundColor: '{colors.cool-paper}'
    textColor: '{colors.slate-body}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
  button-ghost:
    textColor: '{colors.slate-body}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
  button-link:
    textColor: '{colors.deep-slate-ink}'
  card:
    backgroundColor: '{colors.white-card}'
    textColor: '{colors.slate-body}'
    rounded: '{rounded.lg}'
    padding: '24px'
  chip:
    backgroundColor: '{colors.ledger-wash}'
    textColor: '{colors.slate-body}'
    rounded: '{rounded.full}'
    padding: '4px 12px'
---

# Design System: Portfolio — José Guilherme

## Overview

**Creative North Star: "The Cool Ledger"**

José Guilherme's portfolio is a quiet, precise record of professional work — a ledger kept in cool slate and paper. The palette reads like a well-organized codebase: near-white paper surfaces (#f9f9f9), a single near-black ink reserved for interaction (#0f172a), and cool grays carrying structure and hierarchy. Nothing flashes, nothing shouts; the interface behaves like well-documented code — everything in its place, each element earning its contrast.

The system is flat by default. Depth is conveyed through tonal layering — paper background, wash-tinted section bands, white cards — with a single restrained shadow level reserved for cards and imagery. Typography is one family, Inter, expressing hierarchy through size and weight alone. The strongest statement on the page is the photograph and the projects, not the chrome.

Anti-references (confirmed): this is not a dark-terminal aesthetic, and it is not a colorful agency showroom. Saturated accents, gradient text, and shadow-lifted buttons would break the world.

**Key Characteristics:**

- Ink-on-paper contrast discipline: one near-black, one paper white, cool grays between
- Single-family typography; hierarchy by size and weight only
- Flat surfaces with tonal layering; one shadow level, sparingly used
- Restrained motion: color-shift hovers (200–300ms), no lifts or transforms
- Consistent focus treatment everywhere: 2px ring in Deep Slate Ink with 2px offset

## Colors

A cool-slate palette of one ink, paper-family whites, and ledger grays. Chroma is nearly absent; the two accents defined in tokens are available but unused on the current surface.

### Primary

- **Deep Slate Ink** (#0f172a): The only saturated-dark element. Used for primary buttons, the "JG" mark, the name in the hero, and the focus ring. Near-black with a navy undertone.

### Neutral

- **Cool Paper** (#f9f9f9): Global background; also the base of outline buttons.
- **White Card** (#ffffff): Card and popover surfaces.
- **Slate Body** (#2d3435): Primary text — headings and body copy. A dark slate-green-gray.
- **Ledger Gray** (#596061): Secondary text — descriptions, footnotes, muted labels.
- **Ledger Wash** (#f2f4f4): Section bands (projects), ghost-button hover fills, image placeholder areas.
- **Ledger Line** (#dde4e5): All borders — cards, footer top rule, mobile nav divider, outline button strokes.

### Tertiary

- **Ash Violet** (#605c78): Defined in tokens; not used on the current surface. Available for future emphasis without breaking the world's quiet.

### Destructive

- **Rust Clay** (#9f403d): Defined in tokens for error semantics; not used on the current surface.

### Named Rules

**The Ink Rule.** Deep Slate Ink appears on interactive elements and the JG mark only. Its rarity on an otherwise paper page is what makes it read as authority.

## Typography

**Display Font:** Inter (with system-ui fallback)
**Body Font:** Inter (with system-ui fallback)

One family, loaded via next/font with the latin subset; the CSS variable `--font-inter` feeds `--font-sans`. The pairing is a single typeface — the quiet precision of the system rests on size, weight, and spacing doing all the work.

**Character:** Neutral grotesque, technical and legible; reads like a spec sheet, never decorative.

### Hierarchy

- **Display** (600, 3rem/48px, 1.25): Hero headline only.
- **Headline** (600, 2.25rem/36px): Section titles — "Projetos", "Sobre Mim".
- **Title** (600, 1.25rem/20px, -0.025em): Card titles; also the nav mark "JG".
- **Body** (400, 1rem/16px, 1.625): Paragraphs, at `max-w-xl` (hero) to `max-w-3xl` (about) line lengths.
- **Label** (500, 0.875rem/14px): Buttons and nav links.
- **Eyebrow** (400, 0.875rem/14px, 0.05em, uppercase): The role kicker above the hero name.

### Named Rules

**The Single-Family Rule.** Inter is the only typeface. Hierarchy is expressed through size, weight, and case — never by adding a second family.

## Layout

A single centered container of `max-w-7xl` (1280px) with `px-6` gutters on every section. Sections stack vertically: hero at `min-h-screen` with `py-32` breathing room; content sections at `py-12` with an inner wrapper at `py-4` (64px effective top/bottom rhythm). Two-column layouts appear at `lg` (hero: text left, photo right) and `md` (project cards). Mobile collapses to a single column; the nav becomes a hamburger below `md`. Breakpoints are Tailwind defaults — `sm` 640px, `md` 768px, `lg` 1024px. Horizontal rhythm uses 8px steps (gap-2/4/6/8; px-6 gutters); vertical rhythm uses 48px beats (py-12, py-32).

## Elevation & Depth

Flat by default. The system conveys depth through tonal layering — Cool Paper background, Ledger Wash section bands, White Card surfaces — and one restrained shadow level: Tailwind `shadow-sm` (0 1px 2px 0 rgb(0 0 0 / 0.05)) on cards and the hero profile photo. Interactive elements cast no shadows at rest or hover; state is expressed through color shifts only.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows exist on cards and imagery only, never on interactive elements, and never intensify on hover.

## Shapes

A restrained radius language: controls at 6px (`rounded-md`), cards at 12px (`rounded-xl`), and pills (`rounded-full`) for chips. Corners are gently softened but never decorative — the geometry stays quiet and functional. Card images clip to the card's top corners (`rounded-t-xl`). Borders appear only where surfaces separate.

### Named Rules

**The One-Border Rule.** Borders exist only where they separate surfaces: the card edge, the footer top rule, and the mobile nav dropdown divider. Nav and hero carry no chrome.

## Components

### Buttons

- **Shape:** 6px radius (rounded-md), height 40px (`h-10`), horizontal padding 16px.
- **Primary:** Deep Slate Ink background, paper text. Hover is a color shift to 90% ink; no lift.
- **Outline:** Paper background, Ledger Line border, Slate Body text; hover shifts to zinc-200 over 300ms.
- **Secondary:** Ledger Wash background; hover darkens to 80% over 200ms.
- **Ghost:** Transparent; hover fills Ledger Wash.
- **Link:** Ink text with `underline-offset-4`; underline appears on hover.
- **Focus:** All variants get a 2px ring in Deep Slate Ink with 2px offset (`ring-2 ring-ring ring-offset-2`) on `focus-visible`. Disabled: 50% opacity, no pointer events.

### Chips

- **Style:** Ledger Wash background, Slate Body text, pill radius. Two sizes: project tags (`text-xs`, 4px/12px padding) and skill badges (`text-sm`, 8px/16px padding).

### Cards / Containers

- **Corner Style:** 12px radius (rounded-xl).
- **Background:** White Card; the image area sits on Ledger Wash at `aspect-video` with `object-contain`.
- **Border:** 1px Ledger Line.
- **Shadow:** `shadow-sm` only (see Elevation).
- **Internal Padding:** 24px (p-6).

### Navigation

- **Style:** Fixed at top, paper background, no border. Mark "JG" at 20px semibold. Links at 14px, Ledger Gray at rest, shifting to Deep Slate Ink on hover.
- **Mobile:** Below `md`, a hamburger toggles a dropdown panel with a Ledger Line top border; Escape closes it; `aria-expanded` tracks state.

### Footer

- **Style:** Top border in Ledger Line, `py-12`; copyright line at 14px Ledger Gray; contact links mirror nav-link behavior.

### Inputs

Not documented: input and label primitives exist in the library but no form surface uses them. When forms arrive, extend this section rather than guessing.

## Do's and Don'ts

### Do:

- **Do** reserve Deep Slate Ink for interactive elements and the JG mark; everything else stays in the paper family.
- **Do** keep surfaces within the paper family — Cool Paper, White Card, Ledger Wash.
- **Do** use one shadow level (`shadow-sm`) on cards and imagery, and nowhere else.
- **Do** use 6px radius for controls, 12px for cards, pills for chips.
- **Do** express type hierarchy with size/weight — Inter only.
- **Do** keep the uppercase `tracking-wider` eyebrow pattern for kickers.
- **Do** apply the 2px ring focus treatment to every interactive element.

### Don't:

- **Don't** add a second typeface.
- **Don't** use saturated brand colors, gradients, or colorful accents — this is not an agency showroom.
- **Don't** use dark backgrounds — the paper world is light by definition (anti-reference: dark-terminal aesthetic).
- **Don't** lift buttons on hover or add shadow to interactive elements.
- **Don't** add borders that don't separate surfaces.
