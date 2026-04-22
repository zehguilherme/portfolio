import { SKILLS_CATEGORIES, PERSONAL_INFO } from '@/lib/constants'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-semibold">Sobre Mim</h2>

            <p className="text-muted-foreground mb-6 text-base">
              Sou um desenvolvedor front-end apaixonado por criar interfaces
              modernas e funcionais. Com experiência em Vue.js, Nuxt.js,
              React.js, Next.js, JavaScript, TypeScript, Sass (SCSS), Bootstrap,
              Tailwind CSS e Git, busco sempre entregar código limpo e
              performático.
            </p>

            <p className="text-muted-foreground mb-8 text-base">
              Localizado em {PERSONAL_INFO.location}, estou sempre aberto a
              novas oportunidades e colaborações.
            </p>

            <div className="space-y-4">
              {Object.entries(SKILLS_CATEGORIES).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="mb-2 text-xl font-medium">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted relative mx-auto aspect-square w-1/2 overflow-hidden rounded-xl">
            <Image
              src="/images/profile.png"
              alt="Foto de perfil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
