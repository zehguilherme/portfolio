# lib

## Purpose

Shared utilities and content constants.

## Boundaries

- Owns `lib/constants.ts` and `lib/utils.ts`.
- Does not own rendering logic or route concerns.

## Key Files

- `lib/constants.ts` - personal info, project data, and skills categories
- `lib/utils.ts` - shared helpers such as `cn()`

## Verification

- `npm run build`
- `npm run lint`

## Constraints

- Keep content data normalized and easy for sections to consume.
- Avoid duplicating strings that already belong in constants.
