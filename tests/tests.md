# tests

## Purpose

Holds browser screenshots and future test assets for the portfolio experience.

## Boundaries

- Owns verification screenshots and test assets under `tests/`.
- Does not own production code.

## Current Artifacts

- Existing hero screenshots and snapshots: `tests/screenshots/hero-*`
- Issue #282 references: `docs/superpowers/references/issue-282/`
- Issue #282 checks: `tests/screenshots/issue-282-desktop-light.png`, `tests/screenshots/issue-282-mobile-light.png`, `tests/screenshots/issue-282-mobile-dark.png`, and `tests/screenshots/issue-282-mobile-menu.png`

## Verification

- Review screenshots after changing a section or theme.
- Check 320, 390, 768, 1024, and 1440px widths, including the mobile menu.
- Verify anchors, Escape and focus restoration, theme persistence/system preference, contact destinations, all project links, reduced motion, and the 404 recovery link.
- Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`.

## Constraints

- Keep browser checks aligned with actual routes, anchors, and factual content.
- Do not add tests that only repeat CSS class names.
