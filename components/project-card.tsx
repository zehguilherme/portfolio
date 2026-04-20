import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
    <Card className="h-full flex flex-col">
      <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
        {project.image ? (
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
            Project Image
          </div>
        )}
      </div>
      <CardContent className="p-6 flex flex-col justify-between flex-grow">
        <div className="flex-grow">
          <CardTitle className="mb-2">{project.title}</CardTitle>
          <CardDescription className="mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 group">
            <Button variant="link" className="p-0 hover:underline">
              Ver Projeto →
            </Button>
          </a>
          <a href={project.repository} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 group">
            <Button variant="link" className="p-0 hover:underline">
              Ver Repositório ↗
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
