---
name: type-safety-staged
description: |
  Check TypeScript type safety on git-staged files before completing work
  or committing. No `any`, no implicit any, explicit type annotations
  everywhere. Single Next.js project at the repo root (no frontend/ or
  backend/ split). Trigger: "commit", "commitar", "finalizar", "pronto",
  "completar", "tipagem", "typescript", "any", "staged", "acabou",
  "complete", "finish", "git", any conclusion of feature/bug work.
---

## Workflow

1. **List staged TypeScript files:**

   ```bash
   git diff --cached --name-only --diff-filter=ACM -- '*.ts' '*.tsx'
   ```

   If none → stop.

2. **Run `tsc --noEmit`** (tsconfig already has `strict: true`, covering `noImplicitAny`, `strictNullChecks`, etc.):

   ```bash
   npx tsc --noEmit
   ```

   If type errors → fix before proceeding.

3. **Scan each staged file for type violations** — check the actual diff lines:

   ```bash
   git diff --cached -U0 -- '*.ts' '*.tsx'
   ```
   - `any` em variáveis, parâmetros e retornos — proibido. Criar `type` ou `interface` próprio.
   - Parâmetros de função sem tipo (`function foo(param)`, `const fn = (param) =>`)
   - Retornos de função sem tipo (`function foo() {`, `const fn = (): any =>`)
   - `// @ts-ignore` e `// @ts-expect-error` — proibidos sem justificativa em comentário

4. **Report and fix** — cada violação encontrada deve ser corrigida no arquivo antes de prosseguir. Re-executar `tsc --noEmit` após correções.

5. **Confirm** — após todas as correções, rodar `npm run lint && npm run format:check` nos módulos afetados.

## Observações

- `tsc --noEmit` com `strict: true` já pega implicit any, null checks, etc. — é a verificação mais confiável.
- O foco é no **diff staged**, não no arquivo inteiro — mas se o arquivo inteiro falhar no typecheck, todo ele precisa ser corrigido.
