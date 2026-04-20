# Portfólio José Guilherme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a portfolio website for José Guilherme (Front-end Developer) using Next.js 16.2.4, TypeScript, Tailwind CSS, and Shadcn UI, following the "Slate & Monolith" design system.

**Architecture:** This is a new Next.js 16.2.4 project with App Router. The design system "Slate & Monolith" provides light mode with primary slate-900 (#0f172a), Inter font, and a minimalist editorial approach without borders. Shadcn UI components will be customized with these tokens.

**Tech Stack:** Next.js 16.2.4, TypeScript, ESLint, Prettier, Tailwind CSS, Shadcn UI

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx           # Home page (Hero, Projects, About, Contact)
│   ├── globals.css        # Global styles with Tailwind
│   └── favicon.ico
├── components/
│   ├── ui/               # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── ...
│   ├── nav.tsx            # Navigation header
│   ├── hero.tsx           # Hero section
│   ├── projects.tsx      # Project cards grid
│   ├── project-card.tsx   # Individual project card
│   ├── about.tsx         # About section
│   ├── contact.tsx      # Contact section
│   └── footer.tsx       # Footer
├── lib/
│   ├── utils.ts          # Utility functions
│   └── constants.ts     # Portfolio data (projects, skills)
├── public/
│   └── images/          # Project images (placeholder)
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── .eslintrc.json       # ESLint configuration
└── package.json
```

---

## Task 1: Initialize Next.js 16.2.4 Project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `.eslintrc.json`
- Create: `.prettierrc`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.2.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    "lucide-react": "^0.468.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-icons": "^1.3.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "^16.2.4",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "prettier": "^3.4.2"
  }
}
```

- [ ] **Step 2: Create Next.js configuration**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "tsBuildInfoFile": "node_modules/.cache/tsbuildinfo",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create Tailwind configuration with Slate & Monolith tokens**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9f9f9',
        foreground: '#2d3435',
        primary: {
          DEFAULT: '#0f172a',
          foreground: '#faf7fb',
        },
        secondary: {
          DEFAULT: '#f4f4f5',
          foreground: '#2d3435',
        },
        muted: {
          DEFAULT: '#f2f4f4',
          foreground: '#596061',
        },
        accent: {
          DEFAULT: '#f2f4f4',
          foreground: '#2d3435',
        },
        destructive: {
          DEFAULT: '#9f403d',
          foreground: '#fff7f6',
        },
        border: '#dde4e5',
        input: '#dde4e5',
        ring: '#0f172a',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#2d3435',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#2d3435',
        },
        tertiary: {
          DEFAULT: '#605c78',
          foreground: '#fcf7ff',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.3' }],
        'body-md': ['0.875rem', { lineHeight: '1.6' }],
        'label-sm': ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Create PostCSS configuration**

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

- [ ] **Step 6: Create ESLint configuration**

```json
{
  "extends": ["next/core-web-vitals"]
}
```

- [ ] **Step 7: Create Prettier configuration**

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

- [ ] **Step 8: Install dependencies**

```bash
npm install
```

---

## Task 2: Create Core Application Files

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx`
- Create: `lib/utils.ts`
- Create: `lib/constants.ts`

- [ ] **Step 1: Create lib/utils.ts**

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create lib/constants.ts**

```typescript
export const PERSONAL_INFO = {
  name: 'José Guilherme',
  role: 'Front-end Developer',
  description: 'Desenvolvedor front-end especializado em criar interfaces modernas e funcionais.',
  email: 'email@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: 'Brasil',
};

export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com React e Node.js',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: '/images/project-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados',
    tags: ['Next.js', 'D3.js', 'TypeScript'],
    image: '/images/project-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'Aplicativo móvel para gestão de tarefas',
    tags: ['React Native', 'TypeScript'],
    image: '/images/project-3.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Portfolio V1',
    description: 'Primeira versão do portfólio pessoal',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project-4.jpg',
    link: '#',
  },
];

export const SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'CSS',
  'Tailwind CSS',
  'Git',
  'Node.js',
];
```

- [ ] **Step 3: Create app/globals.css**

```css
@import 'tailwindcss';

@theme {
  --font-sans: var(--font-inter), system-ui, sans-serif;

  --color-background: #f9f9f9;
  --color-foreground: #2d3435;

  --color-primary: #0f172a;
  --color-primary-foreground: #faf7fb;

  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #2d3435;

  --color-muted: #f2f4f4;
  --color-muted-foreground: #596061;

  --color-card: #ffffff;
  --color-card-foreground: #2d3435;

  --radius-lg: 0.5rem;
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
}

:root {
  --font-inter: 'Inter', sans-serif;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-background);
  color: var(--color-foreground);
}
```

- [ ] **Step 4: Create app/layout.tsx**

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'José Guilherme - Front-end Developer',
  description: 'Portfólio de José Guilherme, desenvolvedor front-end especializado em criar interfaces modernas e funcionais.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 5: Create app/page.tsx**

```typescript
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
```

---

## Task 3: Create Shadcn UI Base Components

**Files:**
- Create: `components/ui/button.tsx`
- Create: `components/ui/card.tsx`
- Create: `components/ui/input.tsx`
- Create: `components/ui/label.tsx`

- [ ] **Step 1: Create Button component**

```typescript
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

- [ ] **Step 2: Create Card component**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border border-border bg-card	text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

- [ ] **Step 3: Create Input component**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
```

- [ ] **Step 4: Create Label component**

```typescript
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

---

## Task 4: Create Portfolio Components

**Files:**
- Create: `components/nav.tsx`
- Create: `components/hero.tsx`
- Create: `components/projects.tsx`
- Create: `components/project-card.tsx`
- Create: `components/about.tsx`
- Create: `components/contact.tsx`
- Create: `components/footer.tsx`

- [ ] **Step 1: Create Navigation component**

```typescript
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-semibold">
            JG
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm hover:text-primary">
              Projetos
            </a>
            <a href="#about" className="text-sm hover:text-primary">
              Sobre
            </a>
            <a href="#contact" className="text-sm hover:text-primary">
              Contato
            </a>
            <Button size="sm">Baixar CV</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Create Hero component**

```typescript
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-label-sm text-muted-foreground uppercase tracking-wider mb-4">
            {PERSONAL_INFO.role}
          </p>
          <h1 className="text-display-lg font-semibold mb-6">
            Olá, eu sou <span className="text-primary">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-body-md text-muted-foreground mb-8 max-w-xl">
            {PERSONAL_INFO.description}
          </p>
          <div className="flex gap-4">
            <Button>Ver Projetos</Button>
            <Button variant="secondary">Entrar em Contato</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create ProjectCard component**

```typescript
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/button';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:bg-muted transition-colors cursor-pointer">
      <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <CardContent className="p-6">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-4">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="link" className="p-0">
          Ver Projeto →
        </Button>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 4: Create Projects component**

```typescript
import { PROJECTS } from '@/lib/constants';
import ProjectCard from '@/components/project-card';

export default function Projects() {
  return (
    <section id="projects" className="py-30 bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-22">
        <div className="mb-12">
          <h2 className="text-display-md font-semibold mb-4">Projetos</h2>
          <p className="text-muted-foreground max-w-xl">
            Uma seleção de projetos que demonstra minhas habilidades e experiência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create About component**

```typescript
import { SKILLS, PERSONAL_INFO } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-display-md font-semibold mb-6">Sobre Mim</h2>
            <p className="text-body-md text-muted-foreground mb-6">
              Sou um desenvolvedor front-end apaixonado por criar interfaces modernas e
              funcionais. Com experiência em React, Next.js e TypeScript, busco sempre
              entregar código limpo e performant.
            </p>
            <p className="text-body-md text-muted-foreground mb-8">
              Localizado em {PERSONAL_INFO.location}, estou sempre aberto a novas
              oportunidades e colaborações.
            </p>
            <div>
              <h3 className="text-headline-sm font-medium mb-4">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 bg-secondary rounded-full text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-xl" />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create Contact component**

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-30 bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-22">
        <div className="max-w-xl mx-auto">
          <h2 className="text-display-md font-semibold mb-4 text-center">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Tem um projeto em mente? Vamos conversar.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e responderei o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <textarea
                    id="message"
                    placeholder="Sua mensagem..."
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Create Footer component**

```typescript
import { PERSONAL_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href={PERSONAL_INFO.github} className="text-sm text-muted-foreground hover:text-primary">
              GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} className="text-sm text-muted-foreground hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 8: Update app/page.tsx to include Nav**

```typescript
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

---

## Task 5: Verify Build and Lint

**Files:**
- Run: `npm run build`
- Run: `npm run lint`

- [ ] **Step 1: Install dependencies run build**

Run: `npm install && npm run build`
Expected: Build completes successfully without errors

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No lint errors

- [ ] **Step 3: Start development server (optional test)**

Run: `npm run dev`
Verify: Application runs on http://localhost:3000

---

## Execution Choice

**Plan complete and saved to `docs/superpowers/plans/2026-04-17-portfolio-implementation.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**