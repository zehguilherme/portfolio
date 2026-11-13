# lib

## Purpose

Shared utilities and portfolio content constants.

## Boundaries

- Owns `lib/constants.ts` and `lib/utils.ts`.
- Does not own rendering or route concerns.

## Key Files

- `lib/constants.ts` - personal info, three projects with category strings, and every skills category
- `lib/utils.ts` - shared helpers such as `cn()`

## Verification

- `npm run build`
- `npm run lint`

## Constraints

- Keep content factual and normalized for the section components.
- Preserve project order: Ficha de Treino, Studio Amanda Borges, Naturella.
- Project categories are Web App, Website Institucional, and Catálogo Digital.
