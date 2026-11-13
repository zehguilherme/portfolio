# Hero mobile action layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Stack all four Hero action buttons at full width on mobile and label social actions there.

**Architecture:** Make the Hero action container a full-width column below `md`, and return it to its existing horizontal flex row at `md` and above. Show social link names beside their icons below `md`; hide names at `md` and wider.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS v4.

**Spec:** `docs/superpowers/specs/2026-11-13-hero-mobile-actions-design.md`

## Global Constraints

- Preserve all four actions, their order, labels, destinations, accessible names, current styles, and minimum 44px heights.
- Keep desktop presentation unchanged and use existing spacing tokens/classes.
- Do not add a dependency or reusable abstraction.

## Review Focus

- At 320px, 390px, and 767px, all four buttons stack vertically and each matches the action container width.
- At 320px, 390px, and 767px, GitHub and LinkedIn are visible beside their icons.
- At 768px, 1024px, and 1440px, all four actions retain the existing horizontal layout.
- At 768px and above, GitHub and LinkedIn remain icon-only.

---

### Task 1: Stack Hero actions on mobile

**Files:**

- Modify: `components/hero.tsx`
- Modify: `components/components.md`
- Modify: `DESIGN.md`
- Modify: `feature_list.json`, `progress.md`, `session-handoff.md`

**Steps:**

- [x] Stack all four Hero actions at full width below `md`; retain the horizontal layout at `md` and above.
- [x] Update the component and design docs to describe the responsive action layout; record feature and handoff evidence.
- [x] Verify in the browser at 320, 390, 767, 768, 1024, and 1440px: mobile actions stack at full width and tablet/desktop actions remain in one row.
- [x] Run `npm run lint`, `npx tsc --noEmit`, `npm run build`, targeted Prettier, JSON validation, and `git diff --check`.

### Task 2: Label social actions on mobile

**Files:**

- Modify: `components/hero.tsx`
- Modify: `components/components.md`
- Modify: `DESIGN.md`
- Modify: `feature_list.json`, `progress.md`, `session-handoff.md`

**Steps:**

- [x] Add visible GitHub and LinkedIn text beside the icons below `md`; hide the labels from `md` upward.
- [x] Update design and module documentation to describe the responsive labels.
- [x] Verify in the browser at 320, 390, 767, 768, 1024, and 1440px that names appear only below `md`, while full-width mobile buttons and the tablet/desktop icon-only row remain intact.
- [ ] Run `npm run lint`, `npx tsc --noEmit`, `npm run build`, targeted Prettier, JSON validation, and `git diff --check`.
