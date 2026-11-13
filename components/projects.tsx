import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/constants'

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 py-10 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <header className="mb-7 sm:mb-8">
          <p className="text-action-primary mb-2 text-xs font-semibold tracking-[0.12em] uppercase">
            Trabalhos selecionados
          </p>
          <h2
            id="projects-title"
            className="font-display text-text-primary text-[26px] leading-8 font-bold tracking-[-0.025em] lg:text-4xl lg:leading-[44px]"
          >
            Projetos
          </h2>
          <p className="text-text-secondary mt-3 text-sm leading-5 sm:text-base sm:leading-6">
            Projetos que desenvolvi e publiquei.
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
