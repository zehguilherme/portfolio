# app

## Purpose

Owns the Next.js app router entry points, root layout, metadata, and the home route shell.

## Boundaries

- Owns `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/globals.css`, and `app/icon.svg`.
- Does not own reusable sections or UI primitives; those live in `components/` and `components/ui/`.

## Key Files

- `app/layout.tsx` - metadata, font setup, early theme initialization, analytics, skip link
- The skip link uses Next.js `Link` to preserve consistent link handling.
- `app/robots.ts` - crawler access rules and sitemap reference
- `app/sitemap.ts` - public URL sitemap
- `app/page.tsx` - home route composition
- `app/icon.svg` - header-inspired JG favicon with system light/dark colors
- `app/globals.css` - light/dark semantic tokens, Tailwind theme bridge, and base styling including pointer cursors on links and buttons

## UI Surfaces

- `/` - portfolio landing page with nav, hero, projects, about, and footer
- `/icon.svg` - browser favicon based on the JG header wordmark with system-theme colors
- `404` - centered error page with return link
- `/robots.txt` - allows crawler access and references the sitemap
- `/sitemap.xml` - lists the public home URL

## Verification

- `npm run build`
- `npm run dev` for a quick browser check of route composition and metadata

## Constraints

- Keep layout-level concerns here only.
- Do not move section-specific logic into the root layout.
- Keep accessibility basics intact: skip link, semantic main content, and metadata.
- Keep local Clash Display files and license notes under `app/fonts/`.
- Apply the stored theme or system preference before first paint.
