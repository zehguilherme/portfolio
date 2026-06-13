# AGENTS.md

## Commands

- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - ESLint check

## Path Aliases

- `@/*` maps to project root (e.g., `@/components/ui`)

## Design System ("Slate & Monolith")

**Tailwind CSS v4** - Config via `app/globals.css` @theme block (NO `tailwind.config.ts`).

Todas as cores, bordas arredondadas e fontes em `app/globals.css` @theme.

## Tech Stack

- Next.js 16.2.9, React 19.0.0, TypeScript 6
- Tailwind CSS v4.2.4
- ESLint 10, Prettier + prettier-plugin-tailwindcss
- Shadcn UI components

## UI Components (`components/ui/`)

- `button.tsx` - Button with variants (default, secondary, ghost, link)
- `card.tsx` - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `input.tsx` - Input field
- `label.tsx` - Label
- `icon.tsx` - Icon wrapper

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout (Inter font, metadata, Vercel Analytics)
│   ├── page.tsx        # Home page
│   ├── not-found.tsx   # 404 page
│   ├── icon.svg        # Favicon
│   └── globals.css     # Tailwind CSS v4 @theme config
├── components/
│   ├── ui/             # Shadcn UI components
│   ├── nav.tsx         # Navigation
│   ├── hero.tsx        # Hero section
│   ├── projects.tsx    # Projects grid
│   ├── project-card.tsx # Project card
│   ├── about.tsx       # About section
│   └── footer.tsx      # Footer
├── lib/
│   ├── utils.ts        # cn() utility
│   └── constants.ts    # PERSONAL_INFO, PROJECTS, SKILLS_CATEGORIES
├── public/
│   └── images/
│       ├── profile.png
│       ├── studio-amanda-borges.png
│       └── naturella.png
├── docs/superpowers/  # Implementation plans
├── tests/             # Playwright tests
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── .prettierrc
├── next.config.ts
├── next-env.d.ts
├── README.md
├── README-en.md
└── .gitignore
```

## TypeScript Guidelines

- **No `any`** — Use `unknown` quando o tipo for indeterminado, ou tipos genéricos. `any` desliga toda a verificação de tipo e não é permitido.

## Reference

- Implementation plan: `docs/superpowers/plans/2026-04-17-portfolio-implementation.md`
