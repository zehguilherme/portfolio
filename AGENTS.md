# AGENTS.md

## Commands

- `npm run dev` - Development server on `localhost:3000`
- `npm run build` - Production build
- `npm run start` - Start the production server
- `npm run lint` - ESLint check

## Path Aliases

- `@/*` maps to the project root

## Design System

- Tailwind CSS v4 is configured in `app/globals.css` with `@theme`.
- Keep colors, radii, and fonts in `app/globals.css`; do not add `tailwind.config.ts`.
- Use the existing Slate & Monolith tokens and shadcn UI primitives.

## Tech Stack

- Next.js 16.2.9, React 19, TypeScript 6
- Tailwind CSS v4.2
- ESLint 10, Prettier, prettier-plugin-tailwindcss
- shadcn UI components

## Module Index

Read this file first, then the relevant module doc before editing code in that area.

| Module | Path | Doc | Verify |
|---|---|---|---|
| app | `app/` | `app/app.md` | `npm run build` |
| components | `components/` | `components/components.md` | `npm run lint` |
| ui | `components/ui/` | `components/ui/ui.md` | `npm run lint` |
| lib | `lib/` | `lib/lib.md` | `npm run build` |
| tests | `tests/` | `tests/tests.md` | review screenshots and run lint/build |
| docs/superpowers | `docs/superpowers/` | `docs/superpowers/superpowers.md` | keep plans and notes aligned |

## Working Rules

- Do not use `any`.
- Keep harness files short and local to the module they describe.
- Update the relevant module doc whenever code in that module changes.
- Treat `feature_list.json` and `progress.md` as current state, not archived history.
- Before claiming completion, run the repo verification commands and capture evidence.

## Definition of Done

- Root harness files exist: `feature_list.json`, `progress.md`, `init.sh`, `session-handoff.md`.
- Every detected module has a local doc.
- Verification commands are known and match the actual repo scripts.
