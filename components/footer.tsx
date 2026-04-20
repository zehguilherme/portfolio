import { PERSONAL_INFO } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
