export const PERSONAL_INFO = {
  name: 'José Guilherme',
  role: 'Desenvolvedor de Software',
  description:
    'Especializado em construir produtos na web que entregam resultado para o cliente e qualidade técnica para o time. Interfaces modernas, performance e boas práticas de desenvolvimento.',
  email: 'jgtomaine@hotmail.com',
  github: 'https://github.com/zehguilherme',
  linkedin:
    'https://www.linkedin.com/in/jos%C3%A9-guilherme-paro-monteiro-tomaine/',
  location: 'Bauru/SP, Brasil',
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Naturella',
    description:
      'Loja especializada na fabricação de peças decorativas em concreto',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/naturella.png',
    link: 'https://naturellastudio.vercel.app/',
    repository: 'https://github.com/zehguilherme/naturella',
  },
  {
    id: 2,
    title: 'Studio Amanda Borges',
    description:
      'Portfólio online da arquiteta Amanda Borges. Nele você pode conhecer um pouco mais sobre seus principais projetos, uma breve descrição sobre ela e como pode entrar em contato.',
    tags: [
      'Next.js',
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Jest',
      'Testing Library',
    ],
    image: '/images/studio-amanda-borges.png',
    link: 'https://studioamandaborges.vercel.app/',
    repository: 'https://github.com/zehguilherme/studio-amanda-borges',
  },
]

export const SKILLS_CATEGORIES: Record<string, string[]> = {
  'Front-end': [
    'Vue.js',
    'Nuxt.js',
    'React.js',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Sass (SCSS)',
    'Bootstrap',
    'Tailwind CSS',
    'HTML',
    'CSS',
  ],
  'Back-end': ['API REST', 'GraphQL'],
  'Qualidade e Testes': ['Jest', 'Testing Library'],
  'Controle de Versão': ['Git (GitFlow)'],
  Design: ['Figma'],
  Ferramentas: ['VS Code'],
  Metodologias: ['Scrum', 'Kanban'],
  Idiomas: ['Inglês (Técnico)'],
}
