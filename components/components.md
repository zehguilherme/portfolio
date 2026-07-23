# components

## Purpose

Holds the page sections that compose the portfolio experience.

## Boundaries

- Owns `nav`, `hero`, `projects`, `project-card`, `about`, and `footer`.
- Does not own shared styling tokens or low-level primitives.

## Key Files

- `components/nav.tsx` - fixed navigation and hash scrolling
- `components/hero.tsx` - primary intro section and social actions
- `components/projects.tsx` - project grid section
- `components/project-card.tsx` - single project presentation
- `components/about.tsx` - bio and skills
- `components/footer.tsx` - outbound links and copyright

## Verification

- `npm run lint`
- Browser check on the home page after section-level changes

## Constraints

- Keep props explicit and local to each section.
- Preserve anchor targets used by navigation.
- Keep project and skills data driven through `lib/constants.ts`.
