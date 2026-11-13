# components/ui

## Purpose

Reusable UI primitives for the portfolio.

## Boundaries

- Owns `button.tsx`, `card.tsx`, `input.tsx`, `label.tsx`, and `icon.tsx`.
- Stays generic and free of page-specific behavior.

## Key Files

- `components/ui/button.tsx` - pill-shaped button variants with semantic theme colors and visible focus
- `components/ui/card.tsx` - responsive card surface and layout primitives
- `components/ui/input.tsx` - semantic input colors, focus, and disabled state
- `components/ui/label.tsx` - accessible label primitive
- `components/ui/icon.tsx` - SVG wrappers, including menu icons and 18px theme icons matching apps.oprimo.dev

## Verification

- `npm run lint`
- `npm run build`

## Constraints

- Use the semantic light/dark tokens in `app/globals.css`.
- Keep targets at least 44px and preserve visible focus states.
- Do not introduce `any` in component props or wrappers.
