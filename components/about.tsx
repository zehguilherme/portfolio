import { SKILLS, PERSONAL_INFO } from '@/lib/constants'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Sobre Mim</h2>

            <p className="text-base text-muted-foreground mb-6">
              Sou um desenvolvedor front-end apaixonado por criar interfaces
              modernas e funcionais. Com experiência em Vue.js, Nuxt.js,
              React.js, Next.js, JavaScript, TypeScript, Sass (SCSS), Bootstrap,
              Tailwind CSS e Git, busco sempre entregar código limpo e
              performático.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Localizado em {PERSONAL_INFO.location}, estou sempre aberto a
              novas oportunidades e colaborações.
            </p>

            <div>
              <h3 className="text-xl font-medium mb-4">Habilidades</h3>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 bg-secondary rounded-full text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-1/2 mx-auto aspect-square rounded-xl overflow-hidden bg-muted">
            <Image
              src="/images/profile.png"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
