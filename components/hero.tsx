import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/ui/icon'
import { PERSONAL_INFO } from '@/lib/constants'

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="scroll-mt-20">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)] items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)] lg:gap-16 lg:px-8 lg:py-16">
        <div className="order-1 min-w-0">
          <p className="text-action-primary mb-4 text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            {PERSONAL_INFO.role}
          </p>
          <h1
            id="hero-title"
            className="font-display text-text-hero mb-5 max-w-3xl text-[clamp(40px,10vw,56px)] leading-[0.98] font-semibold tracking-[-0.035em] lg:text-[clamp(40px,5.5vw,76px)]"
          >
            Olá, eu sou {PERSONAL_INFO.name}
          </h1>
          <p className="text-text-supporting mb-7 max-w-2xl text-base leading-[1.6] sm:text-lg">
            {PERSONAL_INFO.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="bg-action-primary text-text-on-action hover:bg-action-hover focus-visible:outline-focus-ring inline-flex min-h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Ver Projetos <span aria-hidden="true">↓</span>
            </Link>
            <Link
              href={`mailto:${PERSONAL_INFO.email}`}
              className="bg-surface-card text-text-primary border-border-surface hover:bg-surface-soft dark:hover:bg-surface-active dark:hover:border-border-interactive-hover focus-visible:outline-focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <MailIcon aria-hidden="true" /> E-mail
            </Link>
            <span
              aria-hidden="true"
              className="border-border-surface mx-1 hidden h-8 border-l sm:block"
            />
            <Link
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil no GitHub (abre em nova aba)"
              className="bg-surface-card text-text-primary border-border-surface hover:bg-surface-soft dark:hover:bg-surface-active dark:hover:border-border-interactive-hover focus-visible:outline-focus-ring inline-flex size-11 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <GithubIcon aria-hidden="true" />
            </Link>
            <Link
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil no LinkedIn (abre em nova aba)"
              className="bg-surface-card text-text-primary border-border-surface hover:bg-surface-soft dark:hover:bg-surface-active dark:hover:border-border-interactive-hover focus-visible:outline-focus-ring inline-flex size-11 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <LinkedInIcon aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative order-2 mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl lg:mx-0 lg:ml-auto lg:max-w-[400px] lg:rounded-3xl">
          <Image
            src="/images/profile.png"
            alt="José Guilherme"
            fill
            preload
            sizes="(max-width: 1023px) 80vw, 400px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
