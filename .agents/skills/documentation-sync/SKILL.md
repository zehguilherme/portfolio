---
name: documentation-sync
description: |
  Use after any non-documentation change in this portfolio and before declaring
  the work complete. Review the affected living documentation and update only
  facts made stale by the change. Trigger for changes to app routes, components,
  UI primitives, content constants, tests or screenshots, dependencies, scripts,
  configuration, accessibility behavior, or design tokens. Do not trigger a new
  sync for documentation-only edits, and never rewrite historical plans.
---

## Workflow

1. Identify files changed by the current task. Preserve unrelated working-tree
   changes; do not treat every existing diff as part of this task.
2. Read the changed implementation and compare it with the applicable living
   documents below. Update only statements that are now inaccurate.
3. Keep documentation factual and minimal. Do not create a document merely
   because a possible future change is mentioned.
4. Review the documentation diff against the implementation before completion.
   Validate every modified JSON file. If no living document is affected, report
   that the review required no documentation edit.

## Project document map

| Change area                                              | Review and update when facts change                                                                                         |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `app/` routes, layout, metadata, or global CSS           | `app/app.md`; `DESIGN.md` for tokens or visual rules; `README.md`, `README-en.md`, or `PRODUCT.md` for public product facts |
| `components/` sections                                   | `components/components.md`; `DESIGN.md` for visual-system rules; `PRODUCT.md` or README files for public content            |
| `components/ui/` primitives                              | `components/ui/ui.md`; `DESIGN.md` when variants, tokens, accessibility, or interaction rules change                        |
| `lib/` utilities or constants                            | `lib/lib.md`; `PRODUCT.md` and README files when portfolio content, links, or positioning change                            |
| `tests/` screenshots or verification assets              | `tests/tests.md` when artifacts, routes, or verification practice changes                                                   |
| tracked feature behavior, status, evidence, or milestone | `feature_list.json`, `progress.md`, and `session-handoff.md`                                                                |
| dependencies, scripts, or repository-wide rules          | `README.md`, `README-en.md`, and `AGENTS.md` only when their stated facts become inaccurate                                 |

The living project context also includes `PRODUCT.md` and `DESIGN.md`. Keep
`AGENTS.md` accurate when commands, paths, module boundaries, or required
workflow changes. `docs/superpowers/` contains historical plans and is excluded
from routine synchronization; edit it only when the planning scope itself is
intentionally revised.

## Feature and continuity rules

- Update `feature_list.json` only when a tracked feature's behavior, scope,
  status, verification, or evidence changes. Keep it valid JSON.
- Update `progress.md` when the current state, next step, or meaningful history
  changes; do not manufacture history for routine refactors.
- Update `session-handoff.md` when files, completed work, verification results,
  blockers, or continuation instructions change. Preserve its format.
- Do not duplicate the full design specification in summary documents.
- For a visual or functional UI change, document the behavior and relevant
  accessibility expectations in the affected module and design documents.

## Completion report

State which living documents were updated, or state that none were affected.
Mention JSON validation and any verification command that was run. Do not claim
documentation is synchronized until the implementation and documentation diff
have been compared.
