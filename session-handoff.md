# Session Handoff

## Current State

Issue #282 redesign is implemented. Production build, lint, typecheck, responsive browser checks, screenshot capture, and documentation synchronization are complete.

Issue #291 aligns the two project action buttons to the same 14px semibold text and 12px corners.

Issue #292 refreshes `.github/img/portfolio-preview.png` from the published desktop portfolio; `README.md` and `README-en.md` both use this repository-relative image.

The Hero E-mail and icon-only GitHub/LinkedIn links use the shared outline Button primitive through `asChild`; E-mail has an 8px icon-label gap.

All primary and outline actions in the Hero and project cards now also use the shared Button primitive through `asChild`.

Dark-mode outline buttons match the theme toggle's transparent background, header-divider border, supporting text, and teal/text hover state.

Shared Button sets an 8px default gap between icon and label; icon-only buttons remain unchanged.

All shared Button variants and sizes use the same 12px radius in light and dark themes, matching the theme toggle.

Outline colors, border, hover, and focus styling are centralized in the Button outline variant, shared by the theme toggle and mobile-menu control.

The contact card now follows the centered 1240px section container used by Projects and About.

Footer links now use the same hover text color as desktop navigation links.

The footer brand mark now displays “JG”, matching Stitch; the copyright still uses José Guilherme.

Outlined hero and GitHub project buttons use brighter dark-mode hover colors, with light-mode colors preserved.

Mobile menu links use the stronger `surface-active` hover background in both themes.

Issue #290 aligns project category badges and technology chips with the About skills pills at every responsive size.

Hero actions stack at full content width below 768px and return to a horizontal row from that breakpoint upward.

GitHub and LinkedIn labels appear beside the icons only below 768px; larger screens remain icon-only.

Project card actions stack vertically at full width below 768px and return to equal-width columns from that breakpoint upward.

Technology chips now keep their natural height when the reserved tag slot has extra vertical space.

Mobile project cards use shorter description and technology slots and a smaller gap before previews; the 16px space between previews and actions now matches desktop.

Project and skills technology pills use a brighter `#1f3342` dark-mode surface; light-mode colors are unchanged.

Browser screenshots reviewed both pill groups in dark mode. Computed light chip remains `#e9eef7`; dark pill text contrast is 11.96:1.

The JG favicon now matches the header wordmark more closely and switches text color for the system light/dark theme.

About content uses the same bordered, rounded semantic card as Contact; mobile and tablet stack the content and use a horizontal divider before skills.

JSX links across the app and section components now use Next.js `Link`; existing styling, hrefs, and external-link attributes are preserved.

## Key Files

- `app/globals.css`, `app/layout.tsx` - semantic light/dark tokens, local fonts, early theme initialization
- `components/` - navigation, hero, project cards, biography, contact, and footer
- `DESIGN.md`, `components/components.md`, `feature_list.json`, `progress.md` - issue #291 design and state records
- `components/theme-toggle.tsx` - persisted theme control
- `app/fonts/` - self-hosted Clash Display WOFF2 and license/source note
- `DESIGN.md`, `PRODUCT.md`, module docs - synchronized design and product behavior
- `docs/superpowers/references/issue-282/` - original Stitch exports
- `tests/screenshots/issue-282-*.png` - production browser captures
- `feature_list.json`, `progress.md` - current feature and verification state

## Verification

- Issue #292: production browser capture of only the initial 1440×900 viewport saved to `.github/img/portfolio-preview.png` and visually reviewed; both README image references match. The GitHub repository page still shows its committed image until this change is pushed.
- Hero mobile actions: the full-width vertical stack was verified at 320, 390, and 767px; the horizontal layout was verified at 768, 1024, and 1440px. All action heights remain at least 44px, with no horizontal overflow.
- Hero social labels: browser checks at 320, 390, 767, 768, 1024, and 1440px verified visible names beside icons below 768px, icon-only buttons from 768px upward, 44px minimum height, and no horizontal overflow.
- Project card actions: verified at 320, 390, 767, 768, 1024, and 1440px. Buttons stack at full card width below 768px, remain equal-width columns above it, and keep at least 44px height without horizontal overflow.
- Repository-wide `npm run format:check` still reports pre-existing drift in 32 unrelated files; all files changed for the Hero layout pass targeted Prettier.
- Issue #290: lint, TypeScript, production build, targeted Prettier, and `git diff --check` passed. Browser computed styles for About and project pills match at 320, 390, 768, 1024, and 1440px with no horizontal overflow; these non-interactive chips introduce no keyboard controls.
- Issue #290: dark-mode browser check confirmed the shared `#1f3342` chip surface and `#f5f5f5` text. Repository-wide `npm run format:check` reports drift in 36 files; all six changed files pass targeted Prettier.
- Issue #291: `npm run lint`, `npx tsc --noEmit`, targeted Prettier check, and `git diff --check` passed. Static accessibility review confirmed 44px minimum action height, visible focus, descriptive labels, and safe new-tab attributes.
- Project preview/action spacing is now 16px across breakpoints. Lint, TypeScript, production build, targeted Prettier, JSON validation, and `git diff --check` passed; whole-repo `npm run format:check` still flags 28 unrelated files.
- Button radius normalization: ESLint, TypeScript, targeted Prettier, JSON validation, `git diff --check`, and production build passed; one transient font-resolution build error cleared on immediate retry.
- `/icon.svg` returned 200 and parsed as valid XML; production build includes the static icon route.
- Browser preview timed out; the icon was checked through the served SVG response and production build.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` passed after the favicon change.
- `npm run lint`, `npx tsc --noEmit`, `npm run build`, targeted Prettier, JSON parsing, and `git diff --check` passed after the About desktop change.
- Whole-repo `npm run format:check` still flags only pre-existing formatting drift in `package.json` and `package-lock.json`.
- Fresh-context review of the focused About patch found no issues.
- About browser review at 320px, 390px, 768px, 1023px, 1024px, and 1440px confirmed unboxed stacked content with a horizontal divider through 1023px and unboxed two-column content with a vertical divider from 1024px; there is no horizontal overflow.
- The desktop layout assertion failed against the original card styling and passed after the change.
- Production browser checked theme preference, project images, menu keyboard behavior, 404 recovery, and responsive widths 320/390/768/1024/1440.
- This spacing adjustment was reviewed in a 390px project-section screenshot; 1440px computed spacing values remained unchanged.
- `npm run lint`, `npx tsc --noEmit`, `npm run build`, targeted Prettier, JSON parse, and `git diff --check` passed. Whole-repo `npm run format:check` only flags package.json and package-lock.json. `init.sh` could not start because WSL Bash access is denied; ran lint/build directly.

## Notes

- The browser tool reports local Vercel Analytics requests as 404 because the local production server is not deployed. This is expected locally.
- No Git operation has been performed.
