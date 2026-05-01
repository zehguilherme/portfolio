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
    }
  }

  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState(null, '', window.location.pathname)
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsOpen(false)
            }}
          >
            JG
          </a>

          <button
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="hover:text-primary text-sm"
              onClick={(e) => {
                e.preventDefault()
                window.history.pushState(null, '', window.location.pathname)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Início
            </a>

            <a
              href="#projects"
              className="hover:text-primary text-sm"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              Projetos
            </a>

            <a
              href="#about"
              className="hover:text-primary text-sm"
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
                className="hover:text-primary text-sm"
                onClick={(e) => {
                  e.preventDefault()
                  window.history.pushState(null, '', window.location.pathname)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  setIsOpen(false)
                }}
              >
                Início
              </a>

              <a
                href="#projects"
                className="hover:text-primary text-sm"
                onClick={(e) => {
                  handleSmoothScroll(e, 'projects')
                  setIsOpen(false)
                }}
              >
                Projetos
              </a>

              <a
                href="#about"
                className="hover:text-primary text-sm"
                onClick={(e) => {
                  handleSmoothScroll(e, 'about')
                  setIsOpen(false)
                }}
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
