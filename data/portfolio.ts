export const technologies = [
  'Python',
  'React',
  'Next.js',
  'FastAPI',
  'Angular',
  'Docker',
  'MySQL',
  'CI/CD',
  'TypeScript',
  'Tailwind CSS'
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Plataforma de Gestão Comercial',
    description:
      'Sistema web para controle de vendas, estoque e indicadores em tempo real com dashboard analítico.',
    technologies: ['React', 'FastAPI', 'MySQL', 'Docker'],
    liveUrl: 'https://menezesdigital.com.br',
    githubUrl: 'https://github.com/'
  },
  {
    title: 'API de Automação de Processos',
    description:
      'Arquitetura backend robusta para automação de tarefas operacionais, integração com serviços e filas.',
    technologies: ['Python', 'FastAPI', 'Docker', 'CI/CD'],
    liveUrl: 'https://menezesdigital.com.br',
    githubUrl: 'https://github.com/'
  },
  {
    title: 'Portal Institucional Moderno',
    description:
      'Website performático com experiência responsiva, SEO otimizado e interface moderna orientada à conversão.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://menezesdigital.com.br',
    githubUrl: 'https://github.com/'
  },
  {
    title: 'Painel Administrativo Corporativo',
    description:
      'Aplicação para monitoramento de operações, permissões avançadas e integrações internas com pipelines.',
    technologies: ['Angular', 'TypeScript', 'MySQL', 'CI/CD'],
    liveUrl: 'https://menezesdigital.com.br',
    githubUrl: 'https://github.com/'
  }
];
