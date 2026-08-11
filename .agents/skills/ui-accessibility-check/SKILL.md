---
name: ui-accessibility-check
description: |
  Use after ANY frontend interface change (components, pages,
  features, bug fixes) in this portfolio, before marking work
  complete. Trigger: "accessibility", "a11y", "WCAG", "contrast",
  "focus", "keyboard", "component", "interface", "UI", "page",
  "layout", any frontend visual change.
---

## Checklist

Token source: colors are HEX in `app/globals.css` (`@theme`, shadcn names).
`DESIGN.md` is the source for the names (deep-slate-ink, cool-paper...). There
are no HSL tokens — if you look for them, you are following the wrong checker.

- [ ] WCAG AA contrast: normal text >= 4.5:1, large text/UI >= 3:1, always between tokens (e.g.: `muted-foreground` on `background` = 6.1:1, passes)
- [ ] No hardcoded colors outside tokens — including on hover (e.g.: `hover:bg-zinc-200` in `components/ui/button.tsx` is not a token; report it)
- [ ] DESIGN.md ↔ globals.css drift: every `--color-*` in `@theme` must have an equivalent in DESIGN.md with the same HEX (e.g.: `--color-primary-foreground: #faf7fb` ≠ cool-paper `#f9f9f9` is drift)
- [ ] Visible focus on every interactive element: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` (real token: `--color-ring`). The skip-link uses `focus:` on purpose — do not "fix" it
- [ ] Keyboard: Tab/Shift+Tab in logical order, Enter activates, Escape closes the mobile menu
- [ ] `aria-label` on icon-only buttons/links (e.g.: menu toggle, social links)
- [ ] `target="_blank"` links with `rel="noopener noreferrer"` and an "opens in new tab" hint in the `aria-label` (hero does it; footer and project-card do not — report it)
- [ ] `prefers-reduced-motion`: `scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })` in ALL scroll handlers (hero.tsx does it; nav.tsx does not — report it)
- [ ] Structure: `lang="pt-BR"` on html, skip-link pointing to `#main-content`, h1→h2→h3 hierarchy, `alt` on images
- [ ] Hover/focus/active/disabled states mapped. No forms in use → "error" state has no surface: skip it, do not invent

## How to verify

1. `npm run dev` + keyboard navigation on the `/` and 404 routes.
2. Check the contrast pairs with the real token HEX values.
3. Compare the HEX of every color used in `className` against `@theme` and DESIGN.md.

## Output

Findings in `file:line` format + suggested fix. No findings → declare "clean" and proceed with the normal repo verification (`npm run lint`, `npm run build`).
