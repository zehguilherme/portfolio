# Session Handoff

## Current State

The modular harness is in place for the portfolio app. Local skills now live in `.agents/skills` for shared Codex and Opencode use.

## Key Files

- `AGENTS.md` - root index and working rules
- `feature_list.json` - active UI feature list
- `progress.md` - current harness status
- `init.sh` - baseline verification entry point
- `DESIGN.md` - design system source of truth
- `PRODUCT.md` - product context
- `.agents/skills/` - local skills shared by Codex and Opencode
- `.agents/skills/documentation-sync/SKILL.md` - living-document synchronization workflow
- `public/images/ficha-treino.png` - Ficha de Treino project card screenshot
- `app/app.md`, `components/components.md`, `components/ui/ui.md`, `lib/lib.md`, `tests/tests.md`, `docs/superpowers/superpowers.md`
- `app/robots.ts` and `app/sitemap.ts` - native crawler metadata routes

## Verification

- `opencode debug skill`
- `codex debug prompt-input`
- `npm run lint`
- `npm run build`
- `npm run format:check` currently reports pre-existing formatting drift outside this migration
- `git diff --check` passed; the new skill and Markdown files were formatted with Prettier
- `npx tsc --noEmit`, `npm run lint`, `npm run build`, and `git diff --check` passed for the metadata routes

## Notes

- 2026-08-14: Removed the “Principais tecnologias” paragraph from components/about.tsx. Lint, typecheck, Prettier, diff-check, and build passed; no new accessibility findings.

- The app is a frontend-only Next.js portfolio with a single home route and a 404 page.
- The app publishes `/robots.txt` and `/sitemap.xml` for crawler discovery.
- Existing screenshot artifacts live under `tests/screenshots/`.
- 2026-08-11: `lib/constants.ts` `SKILLS_CATEGORIES` updated (Back-end: +Node.js, SQL, Docker, Autenticação e Autorização; Ferramentas: +Vercel). Lint/build verified.
- 2026-08-11: Docs aligned to current positioning — `PRODUCT.md`, `README.md`/`README-en.md` (description + regenerated `home.png`), `AGENTS.md` (Next.js ^16.3.0).
- 2026-08-11: `.github/img/home.png` re-captured as viewport-only (1280x800, first visible area, no scroll). `profile.png` untouched.
- 2026-08-11: `.github/img/home.png` re-captured with scrollbar hidden via injected CSS (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`).
- 2026-08-11: Local skills moved from `.opencode/skills` to `.agents/skills`; Opencode loads that shared folder without project-local `.opencode` config.
- 2026-09-07: Added the frontend-specific `documentation-sync` skill, made it required before completion in `AGENTS.md`, and excluded historical `docs/superpowers/` plans from routine synchronization.
- 2026-09-07: Added Ficha de Treino to `lib/constants.ts` and synchronized the project documentation; `components/projects.tsx` required no logic change.
- 2026-09-07: Reordered `PROJECTS` to Ficha de Treino, Studio Amanda Borges, and Naturella; rendering logic remains unchanged.
- 2026-09-07: Typecheck, lint, build, Prettier, JSON parsing, and diff-check passed. Browser inspection confirmed the new card image, tags, and outbound links at `http://localhost:3000/#projects` (683px mobile viewport); Python Playwright helper was unavailable because Python is not installed.
