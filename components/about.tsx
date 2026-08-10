import { SKILLS_CATEGORIES, PERSONAL_INFO } from '@/lib/constants'

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
            evolução e manutenção de aplicações web, com forte atuação em
            Front-end e experiência crescente em Back-end. Minha principal base
            técnica está no ecossistema JavaScript/TypeScript, trabalhando com
            React, Next.js, Node.js e tecnologias modernas para desenvolvimento
            web.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Atuei em projetos de diferentes contextos e modelos de negócio,
            desde a criação de interfaces e componentes até a evolução de
            aplicações existentes.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Entre as principais experiências que desenvolvi, destaco:
          </p>

          <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6 text-base leading-relaxed">
            <li>
              Desenvolvimento de aplicações web com React.js, Next.js, Vue.js,
              Nuxt.js, TypeScript e JavaScript, com boas práticas de
              componentização, separação de responsabilidades e código
              organizado, reutilizável e de fácil manutenção.
            </li>
            <li>
              Criação de componentes e interfaces responsivas, com foco em
              qualidade, consistência e experiência do usuário.
            </li>
            <li>Integração com APIs REST, GraphQL e serviços externos.</li>
            <li>
              Desenvolvimento de aplicações CRUD, formulários, validações,
              roteamento e regras de negócio.
            </li>
            <li>
              Implementação de testes automatizados com Jest e Testing Library.
            </li>
            <li>
              Utilização de soluções como Tailwind CSS e Bootstrap para
              construção e manutenção de interfaces.
            </li>
            <li>
              Experiência com deploy de aplicações e ambientes de execução,
              incluindo projetos publicados na Vercel.
            </li>
          </ul>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Meus projetos públicos no GitHub refletem essa evolução: comecei com
            aplicações em React.js e JavaScript e avancei para projetos mais
            completos com TypeScript, Next.js, APIs, GraphQL, testes
            automatizados e integrações com serviços externos.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Atualmente, aprofundo meus conhecimentos em Back-end com Node.js,
            APIs REST, autenticação e autorização, bancos de dados relacionais,
            SQL e Docker. Meu objetivo é atuar de forma completa no
            desenvolvimento de aplicações, compreendendo da interface à
            arquitetura, integração e infraestrutura dos sistemas.
          </p>

          <p className="text-muted-foreground mb-8 text-base leading-relaxed">
            Localizado em {PERSONAL_INFO.location}, estou sempre aberto a novas
            oportunidades.
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
