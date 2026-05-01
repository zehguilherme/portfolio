'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { PERSONAL_INFO } from '@/lib/constants'
import { MailIcon, GithubIcon, LinkedInIcon } from '@/components/ui/icon'

export default function Hero() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
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
    <section className="bg-background flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
            {PERSONAL_INFO.role}
          </p>

          <h1 className="mb-6 text-5xl leading-tight font-semibold">
            Olá, eu sou{' '}
            <span className="text-primary">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="text-muted-foreground mb-8 max-w-xl text-base">
            {PERSONAL_INFO.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="cursor-pointer"
            >
              Ver Projetos
            </Button>

            <Button asChild variant="outline">
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                <MailIcon className="mr-2 h-4 w-4" />
                E-mail
              </a>
            </Button>

            <Button asChild variant="outline">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button asChild variant="outline">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
