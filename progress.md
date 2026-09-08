# Progress

- Status: Project order updated in portfolio
- Project type: frontend
- Last updated: 2026-09-07

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
- Added `.agents/skills/documentation-sync/SKILL.md` for frontend-aware living-document synchronization; integrated it into `AGENTS.md` and clarified that `docs/superpowers/` is historical.
- Added the Ficha de Treino project card with its local screenshot, live URL, repository, and technology tags; synchronized product, module, feature, and handoff documentation.
- Ordered the projects section as Ficha de Treino, Studio Amanda Borges, and Naturella.
- Added native Next.js `robots.txt` and `sitemap.xml` metadata routes for the public home URL.
- Verified with `npx tsc --noEmit`, `npm run lint`, `npm run build`, Prettier, JSON parsing, and `git diff --check`; browser AX/screenshot inspection confirmed the card at mobile width.

## Next Verification

- `opencode debug skill`
- `codex debug prompt-input`
- `npm run lint`
- `npm run build`
- Review the existing `tests/screenshots/` artifacts after UI changes

## Latest Evidence

- Removed the “Principais tecnologias” paragraph from the Sobre section; skill categories remain available below.
- Generated `/robots.txt` allows all crawlers and references `/sitemap.xml`; generated `/sitemap.xml` lists the public home URL.

- `opencode debug skill`: `ui-accessibility-check` and `type-safety-staged` resolve from `.agents/skills`.
- `opencode debug skill` is unavailable in the current shell; local skill files and frontmatter were reviewed directly.
- `codex debug prompt-input`: both local skills appear in the Codex available skills list from project `.agents/skills`.
- `npm run lint`: passed.
- `npm run build`: passed.
- `npm run format:check`: failed on 14 files outside this migration that were already outside Prettier output.
