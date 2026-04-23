import type {
  NavLink,
  SocialLink,
  ExperienceItem,
  ProjectItem,
  CaseStudyItem,
  EducationItem,
  ContactLink
} from './portfolio';

export const portfolioDataEn = {
  meta: {
    title: 'Pablo Buitrago Mejia | Software Development Engineer',
    heroTitle: 'Hi, I am',
    heroHighlight: 'Pablo Buitrago Mejia',
    heroSubtitle: 'Systems Engineer focused on product development, cloud, and data',
    valueProposition:
      'I build robust end-to-end solutions with a focus on quality, ownership, and measurable business outcomes.',
    location: 'Medellin, Antioquia',
    primaryCta: {
      label: 'Message me on LinkedIn',
      href: 'https://www.linkedin.com/in/pbuitragom/',
      icon: '/linkedin-icon.svg'
    },
    secondaryCta: {
      label: 'View my GitHub',
      href: 'https://github.com/LegalmentePablo',
      icon: '/github-icon.svg'
    }
  },
  about: {
    title: 'About Me',
    summary:
      'I am a serious, reliable, and accountable professional. I stand out for working with structure, delivering what I commit to, and maintaining clear communication with the team.',
    education:
      'As a Systems Engineer, I combine discipline and technical judgment to deliver useful, stable solutions designed for the long term.',
    socialLinks: [
      {
        href: 'https://www.linkedin.com/in/pbuitragom/',
        label: 'LinkedIn',
        icon: '/linkedin-icon.svg'
      },
      {
        href: 'https://github.com/LegalmentePablo',
        label: 'GitHub',
        icon: '/github-icon.svg'
      }
    ] satisfies SocialLink[]
  },
  navigation: [
    { href: '#inicio', label: 'Home' },
    { href: '#experiencia', label: 'Experience' },
    { href: '#casos', label: 'Professional Projects' },
    { href: '#educacion', label: 'Education' },
    { href: '#proyectos', label: 'Personal Projects' },
    { href: '#habilidades', label: 'Skills' },
    { href: '#contacto', label: 'Contact' }
  ] satisfies NavLink[],
  ui: {
    header: {
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    sections: {
      experience: 'Experience',
      professionalProjects: 'Professional Projects',
      education: 'Education',
      personalProjects: 'Personal Projects',
      skills: 'Technical Skills'
    },
    caseStudies: {
      roleLabel: 'My role',
      stackLabel: 'Technologies',
      pageLabel: 'Page',
      demoLabel: 'Demo'
    },
    projects: {
      ctaLabel: 'View on GitHub'
    },
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'Phone'
    }
  },
  experience: [
    {
      title: 'Software Development Engineer',
      company: 'Stellion Tech S.A.S',
      period: '09/2022 - 01/2026',
      description:
        'Development Engineer: managed and optimized databases, implemented Infrastructure as Code (IaC) in AWS, and built web applications using React/Vite + TypeScript. I also supported deployments and quality assurance.'
    }
  ] satisfies ExperienceItem[],
  caseStudies: [
    {
      title: 'Multi-Agent Platform',
      problem:
        'I built an enterprise chat platform where each company registration automatically configures the assistant, knowledge base, and prompts according to business needs. Each company can also integrate Meta Business for WhatsApp and Instagram lines.',
      role:
        'I contributed to functional definition, architecture, and end-to-end development from scratch.',
      stack: ['Python', 'Vite + React', 'AWS', 'LLMs', 'Knowledge Base + Prompt Engineering'],
      outcomes: [
        'Adaptive onboarding to configure assistant behavior, context, and rules automatically.',
        'LLM model integration based on each client need while preserving a unified chat experience.',
        'Strong knowledge + prompt flow aligned with each company business context.'
      ],
      repoUrl: 'https://bloxai.co/'
    },
    {
      title: 'Web App for License Management and Renewal',
      problem:
        'I developed a web app from scratch for a licensing company, with manual or automatic 30-day execution of a scraping workflow by ID list to gather relevant user data.',
      role:
        'I implemented the full flow: product, backend, and automation to turn results into business reports and outreach campaigns.',
      stack: ['Next.js', 'Docker', 'Web Scraping', 'Automation', 'AWS', 'ECR', 'ECS', 'Step Functions', 'CloudWatch'],
      outcomes: [
        'Business reporting with actionable data on fines and renewals.',
        'Automated email alerts for renewals, fine payments, and offers.',
        'Commercial use of captured data to improve renewal and discount sales.'
      ]
    },
    {
      title: 'Fire Extinguisher Company Application',
      problem:
        'An existing platform required continuous maintenance to fix bugs, stabilize flows, and add new business features.',
      role:
        'I joined an existing codebase and delivered bug fixes, targeted refactors, and functional evolution.',
      stack: ['React', 'AWS'],
      outcomes: [
        'Bug fixes on critical operational modules.',
        'New features delivered without disrupting ongoing operations.',
        'A more stable and maintainable codebase for future iterations.'
      ]
    },
    {
      title: 'Tourism Company Application',
      problem:
        'The product required better UX and reliability on web and mobile over an existing codebase.',
      role:
        'I joined the existing solution to fix bugs, extend features in React and Flutter, and support release management.',
      stack: ['React', 'AWS', 'Flutter', 'Google Play Console'],
      outcomes: [
        'Functional and stability improvements in web and mobile frontends.',
        'Resolution of inherited issues in existing components.',
        'Play Store release management with stronger quality control.'
      ]
    }
  ] satisfies CaseStudyItem[],
  projects: [
    {
      title: 'Psychoactive Substance Use Prediction',
      description:
        'Machine learning project using ENCSPA 2019 (DANE): EDA, preprocessing, modeling, Optuna optimization, SHAP interpretability, and a Streamlit app for individual and batch prediction.',
      href: 'https://github.com/LegalmentePablo/am-pa-drugs-prediction'
    },
    {
      title: 'Nos - Hybrid Local Assistant (Windows)',
      description:
        'Local MVP with rules-first architecture and Ollama LLM fallback: safe Windows actions, optional voice mode (STT), JSON logs, and local quality flow with Ruff, Mypy, and Pytest.',
      href: 'https://github.com/LegalmentePablo/Nos'
    }
  ] satisfies ProjectItem[],
  education: [
    {
      degree: 'Specialization in Data Science and Artificial Intelligence',
      institution: 'University of Medellin',
      period: '07/2025 - Paused'
    },
    {
      degree: 'Systems Engineering',
      institution: 'University of Medellin',
      period: '08/2018 - 12/2025'
    }
  ] satisfies EducationItem[],
  skills: [
    'Python',
    'LLMs',
    'Flutter',
    'JavaScript',
    'Node.js',
    'TypeScript',
    'SQL / NoSQL',
    'Agent orchestration',
    'Prompt engineering',
    'AWS',
    'IaC',
    'Docker',
    'Git',
    'React'
  ],
  contact: {
    title: 'Contact',
    message:
      'If you are building a product and need stronger backend, data, or cloud capabilities, let us talk. I usually reply in less than 24 hours.',
    email: 'pbuitragom2@gmail.com',
    phone: '+57 3012195869',
    links: [
      { href: 'https://www.linkedin.com/in/pbuitragom/', label: 'LinkedIn', icon: '/linkedin-icon.svg' },
      { href: 'https://github.com/LegalmentePablo', label: 'GitHub', icon: '/github-icon.svg' }
    ] satisfies ContactLink[]
  }
} as const;
