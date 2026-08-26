import ciclomedDashboard from '../assets/projects/ciclomed-dashboard.png'
import ciclomedPacientes from '../assets/projects/ciclomed-pacientes.png'
import ciclomedMedicamentos from '../assets/projects/ciclomed-medicamentos.png'
import siftBusca from '../assets/projects/sift-busca.png'
import siftVagas from '../assets/projects/sift-vagas.png'
import siftFontes from '../assets/projects/sift-fontes.png'

export const profile = {
  name: 'João Pedro Francisco Batista Ramos',
  shortName: 'João Pedro',
  role: 'Desenvolvedor Back-End',
  roles: ['C# & .NET', 'ASP.NET & Web API', 'Azure & SQL Server', 'Razor & React'],
  tagline:
    'Construo APIs, integrações e sistemas corporativos com .NET. Também atuo no front-end, com Razor e React.',
  location: 'Volta Redonda / RJ',
  email: 'joaopedrofbr1@gmail.com',
  whatsapp: '5524999203432',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/joaofbr', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaofbr1/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/fbr.joao/', icon: 'instagram' },
]

export const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contato', label: 'Contato' },
]

export const stats = [
  { value: '3+', label: 'anos com C# e .NET' }
]

export const about = {
  paragraphs: [
    'Trabalho há mais de 3 anos com C# e .NET. No dia a dia, crio APIs REST, faço integrações com serviços externos e ajudo a modernizar sistemas legados que ainda rodam em produção. No banco, trabalho com SQL Server, Entity Framework e NHibernate, tanto na modelagem quanto na otimização das consultas, e uso o Azure (Functions, WebJobs e DevOps) para tarefas em segundo plano. Também atuo no front-end, com Razor e React.',
    'Foi durante minha trajetória acadêmica no IFRJ que descobri minha paixão pela programação. Comecei me identificando com o front-end, mas foi no meu primeiro estágio, explorando o back-end, que encontrei minha vocação. Hoje transito entre os dois lados com naturalidade.',
    'O projeto de que mais me orgulho foi liderar a modernização mobile de um ERP educacional, onde cuidei de todo o back-end: login com JWT, permissões por perfil e os endpoints que sustentam o aplicativo. No fim, o tempo dos gestores com tarefas administrativas caiu em até 50%. Gosto de entender bem o problema antes de partir para a solução e prezo por um código limpo e fácil de manter.',
  ],
  highlights: [
    { label: 'Graduação', value: 'Licenciatura em Computação, IFRJ (2022 - em andamento)' },
    { label: 'Técnico', value: 'Técnico em Informática, IFRJ (2019 - 2022)' },
    { label: 'Foco', value: 'Back-end .NET, com atuação também no front-end (Razor e React)' },
    { label: 'Localização', value: 'Volta Redonda / RJ' },
  ],
}

export const experiences = [
  {
    role: 'Desenvolvedor de Software',
    company: 'Sistema EGD',
    period: 'Fev 2024 - atual',
    summary:
      'Desenvolvo e mantenho o ERP da empresa, usado em produção por instituições de ensino, atuando do banco de dados às rotinas na nuvem.',
    bullets: [
      'Desenvolvimento e manutenção do ERP em C#, ASP.NET MVC, Razor e Web API, atuando principalmente no back-end',
      'Criação de APIs REST com Entity Framework e NHibernate, com o código organizado em camadas (Controller, Service e Repository)',
      'Integração com serviços externos: Firebase (autenticação e push) e APIs fiscais para emissão de NFS-e',
      'Rotinas serverless no Azure (Functions e WebJobs) para processamento em segundo plano',
      'Otimização de consultas no SQL Server e investigação de problemas em produção',
      'Refatoração de sistema legado para Web API e Blazor WebAssembly, separando as regras de negócio da tela',
      'Front-end do sistema em Razor, consumindo as APIs que eu mesmo desenvolvo',
    ],
    highlight: {
      title: 'EGD Portal Mobile (iOS/Android)',
      summary:
        'Liderei tecnicamente a virada do sistema legado para uma versão mobile-first e fiquei responsável por todo o back-end em .NET que sustenta o app.',
      bullets: [
        'Endpoints REST de gestão acadêmica e do dashboard gerencial',
        'Login com JWT e controle de permissões por perfil de usuário',
        'Serviço de notificações push integrado ao Firebase',
        'Front-end em React e empacotamento híbrido com Capacitor, com apoio do Claude Code',
        'Pipeline de CI/CD para publicação nas lojas',
        'Resultado: queda de 40% a 50% no tempo dos gestores com tarefas administrativas, com acesso de qualquer lugar',
      ],
    },
    tags: ['C#', 'ASP.NET MVC', 'Razor', 'Web API', 'Blazor WASM', 'React', 'Azure', 'SQL Server'],
  },
  {
    role: 'Estagiário Back-End',
    company: 'Sistema EGD',
    period: 'Jul 2023 - Fev 2024',
    summary:
      'Primeiro contato profissional com back-end, atuando na manutenção de sistemas em produção.',
    bullets: [
      'Manutenção dos sistemas e correção de bugs em ASP.NET MVC e C#',
      'Análise e ajuste de consultas no SQL Server para melhorar o desempenho',
    ],
    tags: ['C#', 'ASP.NET MVC', 'SQL Server'],
  }
]

export const projects = [
  {
    title: 'EGD Portal Mobile',
    subtitle: 'Aplicativo iOS/Android · projeto de destaque',
    description:
      'Modernização mobile-first de um ERP educacional legado. Liderei tecnicamente a virada e fui responsável por todo o back-end em .NET que sustenta o app, dos endpoints à publicação nas lojas.',
    bullets: [
      'Back-end em .NET com os endpoints de gestão acadêmica e do dashboard gerencial',
      'Autenticação com JWT e permissões por perfil',
      'Serviço de notificações push integrado ao Firebase',
      'Front-end em React, desenvolvido com apoio do Claude Code',
      'Empacotamento híbrido com Capacitor e pipeline de CI/CD para as lojas',
      'Reduziu de 40% a 50% o tempo dos gestores com tarefas administrativas',
    ],
    tech: ['.NET', 'C#', 'Web API', 'JWT', 'Firebase', 'React', 'Capacitor', 'CI/CD', 'Claude Code'],
  },
  {
    title: 'CicloMed',
    subtitle: 'Ciclos de retirada de medicamentos · front-end + API',
    description:
      'Acompanha quando cada paciente precisa retirar seu medicamento de novo e avisa antes do prazo. Dividido em dois repositórios que se complementam: uma SPA em React e TypeScript e uma Web API em .NET 8.',
    bullets: [
      'Dashboard com total de pacientes, avisos próximos, atrasados e notificações do dia',
      'Cadastro de pacientes com medicamento, data da retirada atual e cálculo da próxima',
      'Status automático por paciente: em dia, aviso próximo ou atrasado',
      'Envio de aviso individual ou para todos os pacientes pendentes do dia',
      'Front-end em React 19 e TypeScript com Tailwind CSS, React Router e TanStack Query',
      'Formulários com React Hook Form e validação de esquema com Zod',
      'API em .NET 8 com endpoints de pacientes, medicações, notificações e dashboard',
      'Arquitetura em camadas nos dois lados (domínio, aplicação, infraestrutura e apresentação)',
      'Front-end containerizado com Docker e servido por nginx',
      'Desenvolvido com apoio do Claude Code no dia a dia',
    ],
    tech: [
      'React',
      'TypeScript',
      'Tailwind',
      '.NET 8',
      'C#',
      'Docker',
      'Claude Code',
    ],
    links: [
      { label: 'Front-end', href: 'https://github.com/joaofbr/CicloMed' },
      { label: 'API', href: 'https://github.com/joaofbr/CicloMed.API' },
    ],
    gallery: [
      {
        src: ciclomedDashboard,
        label: 'dashboard: avisos do dia e pendências',
        alt: 'Dashboard do CicloMed com os totais de pacientes, avisos próximos, atrasados e notificações do dia, e um painel para enviar avisos',
      },
      {
        src: ciclomedPacientes,
        label: 'pacientes: retiradas, prazos e status',
        alt: 'Tela de pacientes do CicloMed, em tabela com medicamento, retirada atual, próxima retirada e status de cada paciente',
      },
      {
        src: ciclomedMedicamentos,
        label: 'medicamentos: catálogo e ciclos',
        alt: 'Tela de medicamentos do CicloMed, listando nome, ciclo, descrição e situação de cada medicamento',
      },
    ],
  },
  {
    title: 'Sift',
    subtitle: 'Agregador de vagas',
    description:
      'Busca vagas em vários portais a partir das suas palavras-chave, ranqueia por relevância e funciona como uma caixa de entrada: só o que você decide fica salvo.',
    bullets: [
      'Coleta paralela em fontes como LinkedIn, Gupy, Remotive, RemoteOK, Arbeitnow, Himalayas e We Work Remotely',
      'Ranking ponderado por onde o termo aparece: título 3×, tags 2×, descrição 1×',
      'Suporte a termos de exclusão, para filtrar vagas fora do alvo',
      'O banco guarda apenas as decisões (interessado, aplicado, descartado), e o resto some entre buscas',
      'Back-end em Python com uma única dependência de runtime, SQLite e arquitetura limpa em quatro camadas',
      'Interfaces web em React com TypeScript e também por linha de comando',
      'Desenvolvido com apoio do Claude Code no dia a dia',
    ],
    tech: ['Python', 'SQLite', 'React', 'TypeScript', 'Vite', 'Clean Architecture', 'Claude Code'],
    links: [{ label: 'GitHub', href: 'https://github.com/joaofbr/sift' }],
    gallery: [
      {
        src: siftBusca,
        label: 'busca: palavras-chave, exclusões e localidade',
        alt: 'Tela de busca do Sift, com campos de palavras-chave, termos a descartar e filtro de localidade',
      },
      {
        src: siftVagas,
        label: 'vagas: para decidir, interesse, apliquei, descartadas',
        alt: 'Lista de vagas do Sift, com abas de triagem e botões para marcar interesse ou descartar',
      },
      {
        src: siftFontes,
        label: 'fontes: o que está ligado em cada busca',
        alt: 'Tela de fontes do Sift, com as origens de vagas e o estado ligado ou desligado de cada uma',
      },
    ],
  }
]

export const skillGroups = [
  {
    title: 'Linguagens',
    items: [
      { name: 'C#', icon: 'csharp' },
      { name: 'SQL', icon: 'database' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    title: 'Back-End',
    items: [
      { name: '.NET', icon: 'dotnet' },
      { name: 'ASP.NET MVC', icon: 'dotnet' },
      { name: 'Web API', icon: 'api' },
      { name: 'Autenticação JWT', icon: 'api' },
      { name: 'Azure Functions', icon: 'cloud' },
      { name: 'WebJobs', icon: 'cloud' },
    ],
  },
  {
    title: 'Front-End',
    items: [
      { name: 'Razor', icon: 'dotnet' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Blazor WebAssembly', icon: 'blazor' },
      { name: 'MudBlazor', icon: 'ui' },
    ],
  },
  {
    title: 'Dados',
    items: [
      { name: 'SQL Server', icon: 'database' },
      { name: 'Entity Framework', icon: 'database' },
      { name: 'NHibernate', icon: 'database' },
      { name: 'Dapper', icon: 'database' },
      { name: 'Otimização de queries', icon: 'database' },
    ],
  },
  {
    title: 'Cloud, Mobile & DevOps',
    items: [
      { name: 'Azure', icon: 'azure' },
      { name: 'Azure DevOps', icon: 'devops' },
      { name: 'CI/CD', icon: 'devops' },
      { name: 'Capacitor', icon: 'capacitor' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    title: 'Ferramentas & Práticas',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Scrum', icon: 'workflow' },
      { name: 'Kanban', icon: 'kanban' },
      { name: 'Claude Code', icon: 'ai' },
    ],
  },
]

export const contactConfig = {
  formspreeId: '',
  get endpoint() {
    return this.formspreeId ? `https://formspree.io/f/${this.formspreeId}` : null
  },
}
