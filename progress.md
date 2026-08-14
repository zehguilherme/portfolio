# Progress

- Status: Sobre content updated and verified
- Project type: frontend
- Last updated: 2026-08-14

## Completed

- Moved local skills to `.agents/skills` as the single source for Codex and Opencode.
- Updated `SKILLS_CATEGORIES` in `lib/constants.ts` to match the Sobre narrative: Back-end gained `Node.js`, `SQL`, `Docker`, `Autenticação e Autorização`; Ferramentas gained `Vercel`. Lint + build pass; a11y clean (data-only change).
- Aligned docs with the current positioning: `PRODUCT.md` (purpose/positioning now "software developer, growing back-end"), `README.md`/`README-en.md` (description updated, screenshot regenerated from live home), `AGENTS.md` (Next.js ^16.3.0).
- Root `AGENTS.md` converted into a short index.
- Module docs added next to the detected areas.
- `feature_list.json` created with frontend UI features.
- `init.sh` and `session-handoff.md` added.
- Added Startup Workflow, Scope, one-feature rule, and End of Session sections to `AGENTS.md`; harness validates 100/100.
- Added `DESIGN.md` (design tokens) and `PRODUCT.md` (product context); referenced both from `AGENTS.md` and updated tech stack versions.

## Next Verification

- `opencode debug skill`
- `codex debug prompt-input`
- `npm run lint`
- `npm run build`
- Review the existing `tests/screenshots/` artifacts after UI changes

## Latest Evidence

- Removed the “Principais tecnologias” paragraph from the Sobre section; skill categories remain available below.

- `opencode debug skill`: `ui-accessibility-check` and `type-safety-staged` resolve from `.agents/skills`.
- `codex debug prompt-input`: both local skills appear in the Codex available skills list from project `.agents/skills`.
- `npm run lint`: passed.
- `npm run build`: passed.
- `npm run format:check`: failed on 14 files outside this migration that were already outside Prettier output.
