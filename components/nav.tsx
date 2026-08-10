'use client'

import * as React from 'react'
import { MenuIcon, XIcon } from '@/components/ui/icon'

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const hash = window.location.hash.slice(1)

    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      window.history.pushState(null, '', `#${targetId}`)
      element.scrollIntoView({ behavior: 'smooth' })
      element.focus({ preventScroll: true })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.history.pushState(null, '', window.location.pathname)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToTop(e)
    setIsOpen(false)
  }

  const handleHomeClick = scrollToTop

  const handleHomeMobileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToTop(e)
    setIsOpen(false)
  }

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleProjectsMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    handleSmoothScroll(e, 'projects')
    setIsOpen(false)
  }

  const handleAboutMobileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, 'about')
    setIsOpen(false)
  }

  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="focus-visible:ring-ring rounded-sm text-xl font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            onClick={handleLogoClick}
          >
            JG
          </a>

          <button
            className="focus-visible:ring-ring cursor-pointer rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="hover:text-primary focus-visible:ring-ring rounded-sm text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              onClick={handleHomeClick}
            >
              Início
            </a>

            <a
              href="#projects"
              className="hover:text-primary focus-visible:ring-ring rounded-sm text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              Projetos
            </a>

            <a
              href="#about"
              className="hover:text-primary focus-visible:ring-ring rounded-sm text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              onClick={(e) => handleSmoothScroll(e, 'about')}
            >
              Sobre
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="bg-background border-border absolute top-full right-0 left-0 border-t md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              <a
                href="#"
                className="hover:text-primary focus-visible:ring-ring rounded-sm text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                onClick={handleHomeMobileClick}
              >
                Início
              </a>

              <a
                href="#projects"
                className="hover:text-primary focus-visible:ring-ring rounded-sm text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                onClick={handleProjectsMobileClick}
              >
                Projetos
              </a>

              <a
                href="#about"
                className="hover:text-primary focus-visible:ring-ring rounded-sm text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                onClick={handleAboutMobileClick}
              >
                Sobre
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
