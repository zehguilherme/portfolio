import { PROJECTS } from '@/lib/constants'
import ProjectCard from '@/components/project-card'

export default function Projects() {
  return (
    <section id="projects" className="bg-muted py-12">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-semibold">Projetos</h2>

          <p className="text-muted-foreground max-w-xl">
            Uma seleção de projetos que demonstra minhas habilidades e
            experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
