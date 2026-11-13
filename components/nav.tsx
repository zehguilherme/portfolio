'use client'

import * as React from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@/components/ui/icon'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { href: '#projects', label: 'Projetos' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
]

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuButtonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="border-border-header bg-surface-page/95 sticky top-0 z-50 border-b backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-6">
          <Link
            href="#hero"
            className="font-display text-text-hero focus-visible:outline-focus-ring rounded-md text-2xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            JG
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-text-secondary hover:text-text-hero focus-visible:outline-focus-ring rounded-md px-1 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            id="nav-menu-toggle"
            type="button"
            className="text-text-supporting focus-visible:outline-focus-ring border-border-header hover:border-action-primary hover:text-text-hero flex size-11 items-center justify-center rounded-xl border bg-transparent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        <ul
          id="mobile-navigation"
          hidden={!isOpen}
          className={`bg-surface-page border-border-header absolute top-full right-0 left-0 flex-col gap-1 border-b px-4 py-3 shadow-md sm:px-6 md:hidden ${isOpen ? 'flex' : 'hidden'}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="text-text-primary hover:bg-surface-active focus-visible:outline-focus-ring flex min-h-11 items-center rounded-xl px-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
