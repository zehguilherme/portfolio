# components/ui

## Purpose

Reusable UI primitives for the portfolio.

## Boundaries

- Owns `button.tsx`, `card.tsx`, `input.tsx`, `label.tsx`, and `icon.tsx`.
- Should stay generic and free of page-specific behavior.

## Key Files

- `components/ui/button.tsx` - variant button primitive
- `components/ui/card.tsx` - card layout primitives
- `components/ui/input.tsx` - text input primitive
- `components/ui/label.tsx` - form label primitive
- `components/ui/icon.tsx` - icon wrappers and SVG helpers

## Verification

- `npm run lint`
- `npm run build`

## Constraints

- Prefer extending existing primitives instead of adding new one-off controls.
- Keep variant names aligned with the theme tokens in `app/globals.css`.
- Do not introduce `any` in component props or wrappers.
