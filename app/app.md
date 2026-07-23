# app

## Purpose

Owns the Next.js app router entry points, root layout, metadata, and the home route shell.

## Boundaries

- Owns `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/globals.css`, and `app/icon.svg`.
- Does not own reusable sections or UI primitives; those live in `components/` and `components/ui/`.

## Key Files

- `app/layout.tsx` - global metadata, font setup, analytics, skip link
- `app/page.tsx` - home route composition
- `app/not-found.tsx` - 404 fallback
- `app/globals.css` - theme tokens and base styling

## UI Surfaces

- `/` - portfolio landing page with nav, hero, projects, about, and footer
- `404` - centered error page with return link

## Verification

- `npm run build`
- `npm run dev` for a quick browser check of route composition and metadata

## Constraints

- Keep layout-level concerns here only.
- Do not move section-specific logic into the root layout.
- Keep accessibility basics intact: skip link, semantic main content, and metadata.
