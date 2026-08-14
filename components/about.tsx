import { SKILLS_CATEGORIES } from '@/lib/constants'

export default function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="bg-background scroll-mt-20 py-12"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <h2 className="mb-6 text-4xl font-semibold text-pretty">Sobre Mim</h2>

        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Desenvolvedor de software com 8 anos de experiência na construção,
            evolução e manutenção de aplicações web, com sólida atuação em
            Front-end e conhecimentos em expansão no Back-end. Minha principal
            base técnica está no ecossistema JavaScript/TypeScript, trabalhando
            com React, Next.js, Vue.js, Nuxt.js e Node.js.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Ao longo da minha trajetória, participei de projetos em diferentes
            contextos e modelos de negócio, atuando no desenvolvimento de
            interfaces, criação de componentes, integração com APIs,
            implementação de regras de negócio, testes e manutenção de
            aplicações.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Entre minhas principais experiências estão:
          </p>

          <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6 text-base leading-relaxed">
            <li>
              Desenvolvimento de aplicações web com React.js, Next.js, Vue.js,
              Nuxt.js, TypeScript e JavaScript.
            </li>
            <li>
              Criação de componentes reutilizáveis e interfaces responsivas, com
              foco em qualidade, consistência e experiência do usuário.
            </li>
            <li>Integração com APIs REST, GraphQL e serviços externos.</li>
            <li>
              Implementação de testes automatizados com Jest e Testing Library.
            </li>
            <li>
              Construção e manutenção de interfaces com Tailwind CSS e
              Bootstrap.
            </li>
            <li>
              Aplicação de boas práticas de desenvolvimento, como
              componentização, separação de responsabilidades e reutilização de
              código.
            </li>
          </ul>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Atualmente, venho ampliando meus conhecimentos em Back-end,
            principalmente com Node.js, APIs REST, autenticação e autorização,
            bancos de dados relacionais, SQL e Docker. Busco evoluir para uma
            atuação cada vez mais completa no desenvolvimento de aplicações,
            entendendo não apenas a interface, mas também as regras de negócio,
            integrações e arquitetura dos sistemas.
          </p>

          <p className="text-muted-foreground mb-8 text-base leading-relaxed">
            Busco oportunidades em desenvolvimento de software nas quais eu
            possa contribuir com minha experiência, continuar evoluindo
            tecnicamente e participar da construção de soluções de qualidade que
            gerem valor para usuários e negócios.
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills]) => (
            <div key={category}>
              <h3 className="mb-2 text-xl font-medium">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
