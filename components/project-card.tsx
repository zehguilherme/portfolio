import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ExternalLinkIcon, GithubIcon } from '@/components/ui/icon'
import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    link: string
    repository: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="bg-muted aspect-video overflow-hidden rounded-t-xl">
        {project.image ? (
          <div className="relative h-full w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="bg-secondary text-muted-foreground flex h-full w-full items-center justify-center">
            Project Image
          </div>
        )}
      </div>
      <CardContent className="flex flex-grow flex-col justify-between p-6">
        <div className="flex-grow">
          <CardTitle className="mb-2">{project.title}</CardTitle>

          <CardDescription className="mb-4">
            {project.description}
          </CardDescription>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full hover:underline"
          >
            <Button variant="link" className="w-full p-0">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Ver Projeto
            </Button>
          </Link>

          <Link
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full hover:underline"
          >
            <Button variant="link" className="w-full p-0">
              <GithubIcon className="mr-2 h-4 w-4" />
              Ver Repositório
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
