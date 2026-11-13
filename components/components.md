# components

## Purpose

Holds the page sections that compose the portfolio experience.

## Boundaries

- Owns `nav`, `theme-toggle`, `hero`, `projects`, `project-card`, `about`, `contact`, and `footer`.
- Does not own design tokens or low-level primitives.

## Key Files

- `components/nav.tsx` - sticky primary navigation with brand-adjacent desktop links, matching header controls, responsive menu, and Escape/focus handling
- Desktop navigation links use the header text color on hover, matching the reference site.
- Footer links use the same hover text color as desktop navigation links.
- Mobile menu links use the `surface-active` hover background in both themes.
- `components/theme-toggle.tsx` - persisted light/dark selection with transparent background and reference colors, border, and hover state
- The theme toggle uses the header divider color for its border, matching apps.oprimo.dev.
- `components/hero.tsx` - introduction, real profile photo, and contact actions
- Outlined hero and GitHub project buttons use a brighter surface and border on hover in dark mode; light hover colors remain unchanged.
- `components/projects.tsx` - responsive project grid
- `components/project-card.tsx` - semantic project article with aligned description/tag/image rows, naturally sized technology chips centered in their reserved slot, tighter mobile vertical spacing, compact chips below 375px, and paired Stitch-style outbound action buttons
- Project and skills technology pills use a brighter chip surface in dark mode; light mode is unchanged.
- `components/about.tsx` - complete biography and every skills category
- About content sits in the same bordered, rounded card as Contact, with a semantic white surface; it uses an editorial two-column layout on desktop and a stacked layout on mobile and tablet.
- `components/contact.tsx` - email, LinkedIn, and GitHub contact paths
- Contact card aligns to the same centered 1240px content container as Projects and About.
- Contact links share a diagonal arrow and underline hover state.
- `components/footer.tsx` - JG brand mark, outbound links, and dynamic copyright
- All section links use Next.js `Link`, including hash, email, and external destinations; existing link styling and attributes are preserved.

## Verification

- `npm run lint`
- Browser checks at 320, 390, 768, 1024, and 1440px
- Check navigation anchors, menu Escape/focus, reduced motion, external link labels, and both themes

## Constraints

- Use named exports for reusable components; Next.js route files retain required default exports.
- Preserve `#hero`, `#projects`, `#about`, `#contact`, and `#main-content` anchors.
- Keep project and skills data driven through `lib/constants.ts`.
- Project order: Ficha de Treino, Studio Amanda Borges, Naturella.
- Keep the complete existing About text and all skills categories.
