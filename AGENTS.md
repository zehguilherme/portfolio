# AGENTS.md

## Commands

- `npm run dev` - Development server on `localhost:3000`
- `npm run build` - Production build
- `npm run start` - Start the production server
- `npm run lint` - ESLint check

## Path Aliases

- `@/*` maps to the project root

## Design System

- `DESIGN.md` is the source of truth for colors, radii, and typography.
- Tailwind CSS v4 is configured in `app/globals.css` with `@theme`; keep tokens in sync with `DESIGN.md`.
- Do not add `tailwind.config.ts`.
- Use the existing tokens and shadcn UI primitives.

## Tech Stack

- Next.js ^16.3.0, React 19, TypeScript 6
- Tailwind CSS v4.3
- ESLint 10, Prettier, prettier-plugin-tailwindcss
- shadcn UI components

## Module Index

Read this file first, then the relevant module doc before editing code in that area.

| Module           | Path                | Doc                               | Verify                                |
| ---------------- | ------------------- | --------------------------------- | ------------------------------------- |
| app              | `app/`              | `app/app.md`                      | `npm run build`                       |
| components       | `components/`       | `components/components.md`        | `npm run lint`                        |
| ui               | `components/ui/`    | `components/ui/ui.md`             | `npm run lint`                        |
| lib              | `lib/`              | `lib/lib.md`                      | `npm run build`                       |
| tests            | `tests/`            | `tests/tests.md`                  | review screenshots and run lint/build |
| docs/superpowers | `docs/superpowers/` | `docs/superpowers/superpowers.md` | keep plans and notes aligned          |

## Startup Workflow

1. Read this file.
2. Read `feature_list.json` and `progress.md` to find the active feature.
3. Read `PRODUCT.md` for product context and the module doc for the area you will edit.
4. Then write code and verify it.

## Scope

- In scope: `app/` routes, `components/` and `components/ui/`, `lib/`, `tests/`.
- Out of scope: backend, API routes, auth, database, CMS — this is a frontend-only Next.js portfolio.
- Stay within the active feature; do not refactor unrelated code.

## Working Rules

- Work on one feature at a time; finish and verify it before starting another.
- Never use `export default`; always use named exports.
- Do not use `any` — every variable, parameter, and function return must have an explicit type. If the needed type does not exist, create your own `type` or `interface`. Validate with `npm run lint && npm run format:check` in each module before concluding — use the `type-safety-staged` skill (`.agents/skills/`).
- After any modification, run `npm run lint` and `npm run format` in the modified directory before concluding.
- Keep harness files short and local to the module they describe.
- Update the relevant module doc whenever code in that module changes.
- Treat `feature_list.json` and `progress.md` as current state, not archived history.
- Before claiming completion, run the repo verification commands and capture evidence.
- After any UI change, run the `ui-accessibility-check` skill (`.agents/skills/`) before claiming completion.

## Git Workflow

- Commit messages must be in English following Conventional Commits (`tipo(escopo): descrição`), consistent with the existing history (e.g.: `feat`, `fix`, `ci`, `chore`, `docs`).
- No git operation (commit, push, merge, rebase, create PR, etc.) may be executed without explicit user authorization.

## Definition of Done

- Root harness files exist: `feature_list.json`, `progress.md`, `init.sh`, `session-handoff.md`.
- Every detected module has a local doc.
- Verification commands are known and match the actual repo scripts.

## End of Session

1. Update `feature_list.json` with the feature status and evidence.
2. Update `progress.md` with what was done and the next step.
3. Update `session-handoff.md` with blockers, files touched, and current state.
4. Run `init.sh` (or the repo verification commands) and record the output.
