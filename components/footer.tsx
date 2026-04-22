import { PERSONAL_INFO } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-background border-border border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-muted-foreground hover:text-primary text-sm"
            >
              E-mail
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-sm"
            >
              GitHub
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
