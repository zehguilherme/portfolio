import Link from 'next/link'
import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/ui/icon'
import { PERSONAL_INFO } from '@/lib/constants'

const contacts = [
  {
    label: 'E-mail',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    action: 'Enviar e-mail',
    icon: MailIcon,
  },
  {
    label: 'LinkedIn',
    value: PERSONAL_INFO.name,
    href: PERSONAL_INFO.linkedin,
    action: 'Acessar perfil',
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: '@zehguilherme',
    href: PERSONAL_INFO.github,
    action: 'Ver repositórios',
    external: true,
    icon: GithubIcon,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 py-10 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-card border-border-surface rounded-2xl border p-5 sm:p-8 lg:rounded-3xl lg:p-12">
          <header className="mb-6">
            <p className="text-action-primary mb-2 text-xs font-semibold tracking-[0.12em] uppercase">
              Contato direto
            </p>
            <h2
              id="contact-title"
              className="font-display text-text-primary text-[26px] leading-8 font-bold tracking-[-0.025em] lg:text-4xl lg:leading-[44px]"
            >
              Vamos conversar?
            </h2>
            <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-5 sm:text-base sm:leading-6">
              Entre em contato para discutir novos projetos, colaborações ou
              oportunidades de desenvolvimento.
            </p>
          </header>

          <ul className="grid list-none gap-3 p-0 md:grid-cols-3">
            {contacts.map(
              ({ label, value, href, action, external, icon: Icon }) => (
                <li
                  key={label}
                  className="bg-surface-soft border-border-surface rounded-2xl border p-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="text-action-primary mb-4 size-5"
                  />
                  <p className="text-text-secondary font-mono-tech text-xs uppercase">
                    {label}
                  </p>
                  <p className="text-text-primary mt-1 text-sm font-semibold break-words">
                    {value}
                  </p>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={
                      external ? `${action} (abre em nova aba)` : action
                    }
                    className="text-action-primary hover:text-action-hover focus-visible:outline-focus-ring mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {action} <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
