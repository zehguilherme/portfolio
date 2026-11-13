# Desktop About Section Layout

**Status:** Approved by the user on 2026-11-12.

## Intent

Improve the desktop About section's visual balance when the biography and skills columns contain different amounts of information. Keep the current mobile presentation and all content.

## Approaches considered

- **A. Equal-height cards:** stretch the shorter skills card to match the biography card. This aligns the card edges but leaves a large empty area inside the skills card.
- **B. Editorial columns (selected):** keep the current desktop two-column proportions and remove the independent card surfaces and borders. Separate the skills column with a subtle vertical divider. The content can end at different heights without making the layout look unfinished.
- **C. Wide stacked blocks:** put the biography and skills in full-width sections, with skills grouped in a multi-column band. This uses desktop width well but makes the section more vertical and changes its reading flow.

## Proposed design

At the existing desktop breakpoint, keep the biography and skills in the current 0.8:1.2 column grid. Remove each column's card background, border, radius, and desktop padding. Stretch the grid row so a full-height vertical divider and left padding separate the skills column. Preserve the current text, profile image and link, skill groups, reading order, focus styles, and mobile/tablet card styling.

## Scope

Change `components/about.tsx`, with the desktop-only presentation rule recorded in `DESIGN.md` and `components/components.md`. Do not rewrite content, change skill data, or alter the mobile layout.

## Review

Before implementation, approve this design or point out a change. After approval, write the implementation plan, then make the change and verify desktop appearance and existing mobile behavior.

## Approved mobile extension

The user approved extending the editorial style to mobile and tablet. Below `lg`, keep the content in one column without separate card surfaces and use a horizontal header-divider before the skills section. Preserve the current reading order, content, profile link, and page gutters; keep the desktop two-column layout and vertical divider unchanged.
