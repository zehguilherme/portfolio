'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { PERSONAL_INFO } from '@/lib/constants'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            {PERSONAL_INFO.role}
          </p>

          <h1 className="text-5xl font-semibold mb-6 leading-tight">
            Olá, eu sou{' '}
            <span className="text-primary">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="text-base text-muted-foreground mb-8 max-w-xl">
            {PERSONAL_INFO.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={(e) => handleSmoothScroll(e, 'projects')}>
              Ver Projetos
            </Button>

            <Button asChild variant="secondary">
              <a href="mailto:jgtomaine@hotmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Entrar em Contato
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
