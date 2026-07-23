# tests

## Purpose

Holds verification artifacts for the portfolio experience.

## Boundaries

- Owns browser screenshots and future test assets under `tests/`.
- Does not own production code.

## Current Artifacts

- `tests/screenshots/hero-desktop.png`
- `tests/screenshots/hero-mobile.png`
- `tests/screenshots/hero-mobile-centered.png`
- `tests/screenshots/hero-mobile-final.png`
- `tests/screenshots/hero-mobile-snapshot.txt`
- `tests/screenshots/hero-snapshot.txt`

## Verification

- Review the current screenshots when changing the hero or layout.
- Run `npm run lint`
- Run `npm run build`

## Constraints

- Keep any future browser tests aligned with the actual routes and section anchors.
- Replace stale screenshots when the UI changes in a visible way.
