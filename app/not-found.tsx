import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-primary font-sans text-9xl font-semibold">404</h1>

      <h2 className="text-foreground text-center font-sans text-2xl font-medium">
        Página não encontrada
      </h2>

      <Button asChild>
        <Link href="/">Voltar para home</Link>
      </Button>
    </main>
  )
}
