# Hero mobile action layout

## Intent

Make all Hero actions easier to scan and tap on mobile. The current wrapping
leaves one social icon alone on a second line, while the supplied direction
calls for four full-width buttons stacked vertically. A follow-up request adds
visible GitHub and LinkedIn labels beside their icons on mobile only.

## Approaches

- Stack all four actions vertically at mobile widths, each taking the full
  content width. This follows the supplied visual direction and gives each
  action a clear, consistent row.
- Keep the current wrapping row. It preserves compact height but does not meet
  the requested mobile presentation.

Use the full-width mobile stack. At the `md` breakpoint and above, restore the
existing horizontal arrangement. Keep the icon buttons at least 44px high.

## Scope and constraints

Change only the Hero action layout in `components/hero.tsx`. Preserve action
order, labels, destinations, accessible names, colors, focus styles, and the
existing horizontal, icon-only presentation from `md` upward. Show provider
names below `md` (768px) and hide them at `md` and wider, following the design
system's mobile breakpoint. Verify narrow mobile, tablet, and desktop widths.
No new component or dependency is needed.
