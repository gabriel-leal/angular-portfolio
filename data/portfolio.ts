export const technologies = [
  'Python',
  'FastAPI',
  'node.ts',
  'React',
  'Next.js',
  'Angular',
  'Docker',
  'MySQL',
  'PostgreSQL',
  'CI/CD',
  'TypeScript',
  'Tailwind CSS'
];

export type Experiences = {
  title: string;
  company: string
  description: string;
  technologies: string[];
  period: string;
};

export const experiences: Experiences[] = [
  {
    title: 'Suporte Técnico',
    company: 'Softpool Sistemas',
    description: 'atuando com suporte técnico ao usuário, atualização de sistemas, manutenção de computadores e redes, instalação de windows, configuração de impressoras e configuração de SQL Server.',
    technologies: ['Windows', 'SQL Server', 'Redes', 'Hardware'],
    period: '02/2025 - 09/2025'
  },
  {
    title: 'Desenvolvedor Visual Basic',
    company: 'T&T Sistemas',
    description: 'atuando com desenvolvimento de sistemas em Visual Basic, manutenção de sistemas legados, integração com banco de dados SQL Server, desenvolvimento de relatórios com Crystal Reports e suporte técnico aos usuários.',
    technologies: ['vb6', 'SQL Server', 'Crystal Reports', 'Hardware'],
    period: '09/2025 - atual'
  },
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
    title: 'projeto de tela de Cadastro de Usuários com React',
    description:
      'tela de cadastro de usuários com React',
    technologies: ['React', 'TypeScript', 'CSS'],
    liveUrl: 'https://gabriel-leal.github.io/cadastro-React/',
    githubUrl: 'https://github.com/gabriel-leal/cadastro-React'
  },
  {
    title: 'Inscrição de um evento musical',
    description:
      'tela de inscrição de um evento musical com python e FastAPI com validação de QR code e frontend com Angular',
    technologies: ['Python', 'FastAPI', 'Docker', 'Angular', 'mysql'],
    liveUrl: '',
    githubUrl: 'https://github.com/gabriel-leal/musical'
  },
  {
    title: 'projeto acadêmico, gerador de Qr Code em python!',
    description:
      'projeto acadêmico de geração de QR Code em python',
    technologies: ['Python', 'QR Code'],
    liveUrl: 'https://menezesdigital.com.br/qrcode',
    githubUrl: ''
  },
  {
    title: 'API de Wokout',
    description:
      'projeto acadêmico de API de Wokout em Python',
    technologies: ['Python', 'FastAPI', 'postgreSQL'],
    liveUrl: '',
    githubUrl: 'https://github.com/gabriel-leal/workout_api-main'
  }
];
