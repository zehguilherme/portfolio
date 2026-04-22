# Skill: updating-agents-md

> Automatically update `AGENTS.md` when project structure or specifications change significantly.

## When to Use

- File/folder created, deleted, or renamed in `app/`, `components/`, `lib/`, `public/`
- Dependencies added/removed in `package.json`
- Design tokens modified in `app/globals.css`
- New commands added to `package.json` scripts
- UI components added/removed in `components/ui/`

## Workflow

### 1. Detect Changes

Run these checks to identify what changed:

```
glob: app/**/*.{ts,tsx,css}
glob: components/**/*.{ts,tsx}
glob: lib/**/*.{ts}
glob: public/**/*
read: package.json
read: app/globals.css
read: AGENTS.md
```

### 2. Compare State

Diff current state against what AGENTS.md documents:
- **Project Structure**: Check `app/`, `components/`, `lib/` trees
- **UI Components**: Check `components/ui/` for new/removed components
- **Tech Stack**: Compare `package.json` versions
- **Design Tokens**: Check `app/globals.css` @theme block
- **Commands**: Check `package.json` scripts

### 3. Update AGENTS.md

If changes detected, update these sections:

#### Commands Section
```markdown
## Commands

- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build
- ...
```

Extract from `package.json` scripts.

#### Project Structure Section
```markdown
## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── nav.tsx
│   └── ...
```
```

Use current file tree.

#### UI Components Section
```markdown
## UI Components (`components/ui/`)

- `button.tsx` - Button with variants
- `card.tsx` - Card components
```

List files in `components/ui/`.

#### Tech Stack & Design System
Update versions from `package.json` and tokens from `app/globals.css`.

### 4. Summarize

Print summary of changes:
- Files added/removed
- New UI components
- Tech stack updates
- Design token changes