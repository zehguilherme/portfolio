import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon, GithubIcon } from '@/components/ui/icon'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    description: string
    tags: string[]
    image: string
    link: string
    repository: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full">
      <Card className="flex h-full flex-col rounded-2xl p-5 lg:rounded-3xl lg:p-6">
        <div className="mb-2 flex items-center justify-between gap-2 md:mb-4">
          <span className="bg-surface-soft text-action-hover border-border-surface font-mono-tech rounded-full border px-3 py-1 text-[11px] leading-4">
            {project.category}
          </span>
        </div>

        <h3 className="font-display text-text-primary text-xl leading-6 font-semibold tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="text-text-secondary mt-2 min-h-10 text-sm leading-5 md:min-h-20">
          {project.description}
        </p>

        <ul
          aria-label={`Tecnologias de ${project.title}`}
          className="mt-3 flex min-h-12 list-none flex-wrap content-center items-center gap-1 p-0 min-[375px]:gap-1.5 md:mt-4 md:min-h-14"
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="bg-surface-chip text-text-primary font-mono-tech rounded-full px-0.5 py-1 text-[11px] leading-4 min-[375px]:px-2.5"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="bg-surface-soft relative mt-3 aspect-[16/10] overflow-hidden rounded-xl sm:mt-4 sm:rounded-2xl">
          <Image
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <Button asChild variant="default" className="px-2">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title} (abre em nova aba)`}
            >
              <ExternalLinkIcon aria-hidden="true" />
              Ver Projeto
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="min-h-11 px-1.5"
          >
            <Link
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver repositório de ${project.title} (abre em nova aba)`}
            >
              <GithubIcon aria-hidden="true" /> GitHub
            </Link>
          </Button>
        </div>
      </Card>
    </article>
  )
}
