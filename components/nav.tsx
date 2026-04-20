'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
<div className="flex items-center justify-between">
            <a
              href="#"
              className="text-xl font-semibold"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              JG
            </a>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm hover:text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Início
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-primary"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
              >
                Projetos
              </a>
              <a
                href="#about"
                className="text-sm hover:text-primary"
                onClick={(e) => handleSmoothScroll(e, 'about')}
              >
                Sobre
              </a>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t">
              <div className="flex flex-col gap-4 px-6 py-4">
                <a
                  href="#"
                  className="text-sm hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                >
                  Início
                </a>
                <a
                  href="#projects"
                  className="text-sm hover:text-primary"
                  onClick={(e) => {
                    handleSmoothScroll(e, 'projects')
                    setIsOpen(false)
                  }}
                >
                  Projetos
                </a>
                <a
                  href="#about"
                  className="text-sm hover:text-primary"
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
