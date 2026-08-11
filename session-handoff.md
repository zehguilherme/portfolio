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
- `app/app.md`, `components/components.md`, `components/ui/ui.md`, `lib/lib.md`, `tests/tests.md`, `docs/superpowers/superpowers.md`

## Verification

- `opencode debug skill`
- `codex debug prompt-input`
- `npm run lint`
- `npm run build`
- `npm run format:check` currently reports pre-existing formatting drift outside this migration

## Notes

- The app is a frontend-only Next.js portfolio with a single home route and a 404 page.
- Existing screenshot artifacts live under `tests/screenshots/`.
- 2026-08-11: `lib/constants.ts` `SKILLS_CATEGORIES` updated (Back-end: +Node.js, SQL, Docker, Autenticação e Autorização; Ferramentas: +Vercel). Lint/build verified.
- 2026-08-11: Docs aligned to current positioning — `PRODUCT.md`, `README.md`/`README-en.md` (description + regenerated `home.png`), `AGENTS.md` (Next.js ^16.3.0).
- 2026-08-11: `.github/img/home.png` re-captured as viewport-only (1280x800, first visible area, no scroll). `profile.png` untouched.
- 2026-08-11: `.github/img/home.png` re-captured with scrollbar hidden via injected CSS (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`).
- 2026-08-11: Local skills moved from `.opencode/skills` to `.agents/skills`; Opencode loads that shared folder without project-local `.opencode` config.
