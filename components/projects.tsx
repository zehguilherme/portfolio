import { PROJECTS } from '@/lib/constants'
import ProjectCard from '@/components/project-card'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">Projetos</h2>

          <p className="text-muted-foreground max-w-xl">
            Uma seleção de projetos que demonstra minhas habilidades e
            experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
