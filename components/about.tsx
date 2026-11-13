import Image from 'next/image'
import Link from 'next/link'
import { PERSONAL_INFO, SKILLS_CATEGORIES } from '@/lib/constants'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 py-10 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-card border-border-surface rounded-2xl border p-5 sm:p-8 lg:rounded-3xl lg:p-12">
          <header className="mb-6">
            <p className="text-action-primary mb-2 text-xs font-semibold tracking-[0.12em] uppercase">
              Perfil & fundamentos
            </p>
            <h2
              id="about-title"
              className="font-display text-text-primary text-[26px] leading-8 font-bold tracking-[-0.025em] lg:text-4xl lg:leading-[44px]"
            >
              Sobre
            </h2>
          </header>

          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch lg:gap-5">
            <article className="flex min-w-0 flex-col">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/profile.png"
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-text-primary text-xl font-semibold tracking-[-0.02em]">
                    José Guilherme
                  </h3>
                  <p className="text-action-primary mt-1 text-sm">
                    {PERSONAL_INFO.role}
                  </p>
                  <Link
                    href="https://github.com/zehguilherme"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil no GitHub (abre em nova aba)"
                    className="text-text-secondary hover:text-action-hover focus-visible:outline-focus-ring font-mono-tech mt-1 inline-flex min-h-11 items-center rounded text-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    github.com/zehguilherme
                  </Link>
                </div>
              </div>

              <div className="text-text-secondary space-y-4 text-sm leading-5 lg:text-base lg:leading-6">
                <p>
                  Desenvolvedor de software com 8 anos de experiência na
                  construção, evolução e manutenção de aplicações web, com
                  sólida atuação em Front-end e conhecimentos em expansão no
                  Back-end. Minha principal base técnica está no ecossistema
                  JavaScript/TypeScript, trabalhando com React, Next.js, Vue.js,
                  Nuxt.js e Node.js.
                </p>
                <p>
                  Ao longo da minha trajetória, participei de projetos em
                  diferentes contextos e modelos de negócio, atuando no
                  desenvolvimento de interfaces, criação de componentes,
                  integração com APIs, implementação de regras de negócio,
                  testes e manutenção de aplicações.
                </p>
                <p>Entre minhas principais experiências estão:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Desenvolvimento de aplicações web com React.js, Next.js,
                    Vue.js, Nuxt.js, TypeScript e JavaScript.
                  </li>
                  <li>
                    Criação de componentes reutilizáveis e interfaces
                    responsivas, com foco em qualidade, consistência e
                    experiência do usuário.
                  </li>
                  <li>
                    Integração com APIs REST, GraphQL e serviços externos.
                  </li>
                  <li>
                    Implementação de testes automatizados com Jest e Testing
                    Library.
                  </li>
                  <li>
                    Construção e manutenção de interfaces com Tailwind CSS e
                    Bootstrap.
                  </li>
                  <li>
                    Aplicação de boas práticas de desenvolvimento, como
                    componentização, separação de responsabilidades e
                    reutilização de código.
                  </li>
                </ul>
                <p>
                  Atualmente, venho ampliando meus conhecimentos em Back-end,
                  principalmente com Node.js, APIs REST, autenticação e
                  autorização, bancos de dados relacionais, SQL e Docker. Busco
                  evoluir para uma atuação cada vez mais completa no
                  desenvolvimento de aplicações, entendendo não apenas a
                  interface, mas também as regras de negócio, integrações e
                  arquitetura dos sistemas.
                </p>
                <p>
                  Busco oportunidades em desenvolvimento de software nas quais
                  eu possa contribuir com minha experiência, continuar evoluindo
                  tecnicamente e participar da construção de soluções de
                  qualidade que gerem valor para usuários e negócios.
                </p>
              </div>
            </article>

            <div className="border-border-header min-w-0 border-t pt-4 lg:border-0 lg:border-l lg:pt-0 lg:pl-8">
              <h3 className="font-display text-text-primary mb-2 text-xl font-bold tracking-[-0.02em]">
                Competências e tecnologias
              </h3>
              <div className="space-y-5">
                {Object.entries(SKILLS_CATEGORIES).map(([category, skills]) => (
                  <section
                    key={category}
                    aria-labelledby={`skills-${category.replaceAll(' ', '-').toLowerCase()}`}
                  >
                    <h4
                      id={`skills-${category.replaceAll(' ', '-').toLowerCase()}`}
                      className="text-text-primary mb-2 text-sm font-semibold"
                    >
                      {category}
                    </h4>
                    <ul className="flex list-none flex-wrap gap-2 p-0">
                      {skills.map((skill) => (
                        <li
                          key={skill}
                          className="bg-surface-chip text-text-primary font-mono-tech rounded-full px-3 py-1.5 text-xs"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
