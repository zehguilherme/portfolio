# About Desktop Editorial Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Present the About biography and skills as desktop editorial columns without separate cards, leaving the mobile and tablet appearance unchanged.

**Architecture:** Keep the existing About component and 0.8:1.2 desktop grid. Apply desktop-only utilities to remove both column cards and add a subtle divider before the skills column. Update the module/design docs and feature evidence.

**Tech Stack:** Next.js 16, React 19, TypeScript 6, Tailwind CSS v4.

**Spec:** `docs/superpowers/specs/2026-11-12-about-desktop-layout-design.md`

## Global Constraints

- Preserve all biography, profile, contact-link, and skills content.
- Preserve the existing mobile and tablet card layout below the current `lg` breakpoint.
- Use existing semantic design tokens; do not add dependencies or alter skill data.

## Review Focus

- Below 1024px, both existing About cards must retain their current surfaces and spacing.
- At 1024px and wider, the two content columns must have no independent card surfaces or borders.
- The vertical divider must use the existing header divider token and remain decorative.
- Profile link focus treatment and semantic heading/section structure must remain intact.
- All skill categories and biography paragraphs must remain present and in their current reading order.

### Task 1: Apply and document the desktop editorial layout

**Files:**

- Modify: `components/about.tsx`
- Modify: `components/components.md`
- Modify: `DESIGN.md`
- Modify: `feature_list.json`
- Modify: `progress.md`
- Modify: `session-handoff.md`

**Interfaces:**

- Consumes: Existing `PERSONAL_INFO`, `SKILLS_CATEGORIES`, and design tokens.
- Produces: The same About content with a desktop-only editorial presentation.

- [x] **Step 1: Apply desktop-only layout utilities**

Keep the existing grid columns. Remove card backgrounds, borders, radius, and padding only at `lg`; stretch the grid row and add the existing header-divider border and left padding to the skills column at `lg`. Keep all base classes for mobile/tablet.

- [x] **Step 2: Synchronize living documentation**

Document the desktop editorial columns in `DESIGN.md` and `components/components.md`; append current behavior to the tracked feature and handoff files.

- [x] **Step 3: Verify the layout and project checks**

Run `npm run lint`, `npx tsc --noEmit`, `npm run build`, targeted Prettier, JSON parsing, and `git diff --check`. Review the About section in the browser at 390px, 1024px, and 1440px. Expected: 390px retains the current cards; desktop uses the unboxed two-column layout with a divider.

Result: lint, typecheck, build, targeted Prettier, JSON parsing, and diff check passed. Browser review confirmed the mobile cards remain and the desktop columns share the full-height divider. Whole-repo `npm run format:check` still flags only pre-existing formatting in `package.json` and `package-lock.json`.

Review: a fresh-context reviewer found no issues in the focused patch.
