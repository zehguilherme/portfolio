import { SKILLS_CATEGORIES, PERSONAL_INFO } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" tabIndex={-1} className="scroll-mt-20 bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <h2 className="mb-6 text-4xl font-semibold text-pretty">Sobre Mim</h2>

        <div className="max-w-prose">
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Tenho 8 anos de experiência em desenvolvimento de software, com foco
            nos últimos 6 anos em Front-end. Trabalho principalmente com Vue.js,
            Nuxt.js, React e Next.js, além de TypeScript e JavaScript no
            desenvolvimento da lógica das aplicações.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Na estilização, utilizo Sass (SCSS), Bootstrap e Tailwind CSS para
            criação de interfaces responsivas e bem organizadas. Também faço uso
            de Git no controle de versão e colaboração em equipe.
          </p>

          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Minha trajetória é marcada pela atuação em projetos de diferentes
            contextos, com foco em performance, manutenibilidade e boas práticas
            de desenvolvimento.
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
