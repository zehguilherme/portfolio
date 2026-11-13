import Link from 'next/link'
import { PERSONAL_INFO } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-surface-page border-border-header border-t">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <p className="text-text-secondary text-xs sm:text-sm">
          <span className="text-text-primary font-semibold">JG</span>
          <span aria-hidden="true" className="mx-2">
            ·
          </span>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos
          reservados.
        </p>
        <ul className="flex list-none items-center gap-5 p-0">
          <li>
            <Link
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-text-secondary hover:text-text-hero focus-visible:outline-focus-ring inline-flex min-h-11 items-center rounded px-1 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              E-mail
            </Link>
          </li>
          <li>
            <Link
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (abre em nova aba)"
              className="text-text-secondary hover:text-text-hero focus-visible:outline-focus-ring inline-flex min-h-11 items-center rounded px-1 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre em nova aba)"
              className="text-text-secondary hover:text-text-hero focus-visible:outline-focus-ring inline-flex min-h-11 items-center rounded px-1 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
