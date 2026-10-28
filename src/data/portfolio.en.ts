import type { PortfolioData } from './portfolio';

const linkedin = 'https://www.linkedin.com/in/pbuitragom/';
const github = 'https://github.com/LegalmentePablo';

export const portfolioDataEn: PortfolioData = {
  lang: 'en',
  meta: {
    title: 'Pablo Buitrago Mejia · Software Engineer (AWS, backend and AI)',
    description:
      'Software engineer in Medellín, Colombia. I build serverless backends on AWS, billing systems and AI voice agents, from design to production.',
    siteUrl: 'https://portafolio-tau-ruddy-65.vercel.app',
    ogImagePath: '/og-cover.png'
  },
  ui: {
    skipLink: 'Skip to content',
    mainNavLabel: 'Main navigation',
    langSwitchLabel: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    themeToggle: 'Toggle light or dark theme',
    viewDetails: 'View details',
    roleLabel: 'My part',
    outcomesLabel: 'Outcome',
    stackLabel: 'Technologies',
    visitLabel: 'Visit site',
    sourceLabel: 'Source',
    currentLabel: 'Current',
    copyEmail: 'Copy email',
    copied: 'Copied',
    backToTop: 'Back to top'
  },
  navigation: [
    { href: '#experiencia', label: 'Experience' },
    { href: '#casos', label: 'Case studies' },
    { href: '#proyectos', label: 'Projects' },
    { href: '#habilidades', label: 'Skills' },
    { href: '#contacto', label: 'Contact' }
  ],
  hero: {
    name: 'Pablo Buitrago Mejia',
    role: 'Software engineer. AWS backends, billing and voice agents.',
    lead:
      'I take systems end to end, from the business rule to the deployment. Today I build billing and analytics for an AI contact-center platform in healthcare.',
    location: 'Medellín, Colombia',
    availability: 'Open to remote roles and freelance projects',
    primaryCta: { href: 'mailto:pbuitragom2@gmail.com', label: 'Email me' },
    links: [
      { href: linkedin, label: 'LinkedIn' },
      { href: github, label: 'GitHub' }
    ],
    now: {
      title: 'Now',
      company: 'Boston Project',
      items: [
        { figure: '24', label: 'Lambda functions in the backend where I built monthly billing' },
        { figure: '7', label: 'external integrations in that backend, from AWS Billing to WhatsApp' },
        { figure: '9', label: 'tools in the voice agent that books appointments (in development)' }
      ],
      linkLabel: 'See experience'
    }
  },
  sections: {
    experience: 'Experience',
    cases: 'Case studies',
    projects: 'Personal projects',
    projectsIntro: 'Things I build on my own to learn or to solve a problem of my own.',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact'
  },
  experience: [
    {
      company: 'Boston Project',
      title: 'Software Engineer · Cloud, data and AI',
      period: '08/2026 – now',
      current: true,
      summary:
        'AI contact-center platform for clinics and healthcare providers: voice, chat and WhatsApp agents, plus a console where clients see reports, usage and invoices.',
      highlights: [
        'Responsible for the platform’s billing: monthly calculation, review and issuance, from the backend to the screens.',
        'Built call-center analytics on top of Amazon Connect records.',
        'Created a clinic’s voice agent and tuned other clients’ agents after their first days with patients.'
      ],
      stack: [
        'Python',
        'AWS Lambda',
        'SAM',
        'API Gateway',
        'DynamoDB',
        'EventBridge',
        'SQS',
        'Athena',
        'Cognito',
        'Next.js',
        'React',
        'TypeScript',
        'Playwright'
      ]
    },
    {
      company: 'Stellion Tech S.A.S.',
      title: 'Software Development Engineer',
      period: '09/2022 – 01/2026',
      summary:
        'Product development for clients across industries, from new platforms to systems already in operation.',
      highlights: [
        'Managed and optimized SQL and NoSQL databases in production.',
        'Implemented infrastructure as code on AWS and supported deployments.',
        'Built web applications with React, Vite and TypeScript.',
        'Maintained and extended, on legacy code, the apps of a fire-extinguisher company and a tourism company in React and Flutter, and shipped their Google Play releases.'
      ],
      stack: ['React', 'TypeScript', 'Python', 'AWS', 'IaC', 'Docker', 'Flutter', 'SQL / NoSQL']
    },
    {
      company: 'InGrapes',
      title: 'Freelance developer',
      period: '11/2021 – 12/2021',
      summary:
        'A commercial landing page focused on lead capture, built from reusable React components so it was easy to extend.',
      highlights: [],
      stack: ['React', 'JavaScript', 'CSS']
    }
  ],
  caseGroups: [
    {
      title: 'At Boston Project',
      description: 'Clients are described generically for confidentiality.',
      items: [
        {
          title: 'Automated monthly billing cycle',
          context: 'AI contact-center platform for healthcare',
          problem:
            'Every month, each client had to be charged for what it actually used in AWS and calls, according to its contract, with every figure explainable.',
          role: 'Wrote most of the billing domain: the business rules, the code and the tests.',
          outcomes: [
            'A monthly cycle that accumulates usage every day and produces a draft a person reviews before issuing.',
            'Once issued, an invoice can no longer be changed and carries a fingerprint to verify it.',
            'AWS cost is split among clients by their actual usage.',
            'Clients receive the invoice and its reconciliation as PDFs by email.'
          ],
          stack: ['Python', 'AWS Lambda', 'SAM', 'EventBridge', 'SQS', 'DynamoDB', 'S3', 'Cost Explorer', 'Billing API']
        },
        {
          title: 'Client console and reporting',
          context: 'One application for the internal team and clients, separated by permissions',
          problem:
            'Clients needed to see their usage, calls and invoices without touching the infrastructure, and the internal team needed to run billing from the same tool.',
          role: 'Built the billing screens, the call-center and shift dashboards, and data export.',
          outcomes: [
            'Three-step invoice issuance and a print-ready reconciliation, covered by end-to-end tests.',
            'Per-client AWS usage breakdown and a shift heat map.',
            'Excel export of the reports.'
          ],
          stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vitest', 'Playwright', 'AWS Amplify']
        },
        {
          title: 'Call-center analytics',
          context: 'Calls handled by voice agents and human agents',
          problem: 'Amazon Connect call records were too raw for clients’ daily reporting.',
          role: 'Designed the ETL and the data-access permissions.',
          outcomes: [
            'Athena queries that can only read: IAM permissions forbid any write.',
            'Hourly summaries in DynamoDB, recomputed every hour and every night.',
            'They feed the console dashboards.'
          ],
          stack: ['Amazon Connect', 'Athena', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'IAM']
        },
        {
          title: 'Voice agent for a clinic’s patients',
          context: 'Patients calling a clinic to manage their appointments',
          problem:
            'Patients had to be able to check, book and cancel appointments by phone, without waiting for an agent, against their insurer’s scheduling and authorization systems.',
          role: 'Created the project, integrated the external systems and designed the safeguards.',
          outcomes: [
            'Three agents that hand the call to each other: one books with 9 tools, one answers general questions from a knowledge base and one gives recommendations.',
            'Read-only tests against the real systems, so patient data is never touched.',
            'Writes are simulated and blocked on any error, and the same request never runs twice.'
          ],
          stack: ['Python', 'Amazon Lex V2', 'Amazon Connect', 'Bedrock Knowledge Bases', 'S3 Vectors', 'AWS Lambda', 'DynamoDB', 'SAM'],
          status: 'In development environment'
        }
      ]
    },
    {
      title: 'Before Boston',
      description: 'Client projects from previous roles.',
      items: [
        {
          title: 'Multi-agent platform for businesses',
          context: 'Business chat with assistants configured per company',
          problem:
            'Each company needed an assistant that knew its business and knowledge base, and answered on its own WhatsApp and Instagram lines.',
          role: 'Contributed to the functional definition, architecture and development from scratch.',
          outcomes: [
            'Onboarding that configures the assistant, context and rules from the company’s sign-up.',
            'LLM models chosen per client need, behind a single chat experience.',
            'Meta Business integration for WhatsApp and Instagram.'
          ],
          stack: ['Python', 'React', 'Vite', 'AWS', 'LLMs', 'RAG'],
          url: 'https://bloxai.co/'
        },
        {
          title: 'License management and renewal',
          context: 'License management company',
          problem:
            'The company wanted to know which of its clients had fines or licenses about to expire, without checking by hand.',
          role: 'Built the whole product: application, backend and the scheduled automation.',
          outcomes: [
            'Automatic lookups every 30 days or on demand, from a list of ID numbers.',
            'Reports on fines and expirations for the sales team.',
            'Email alerts for renewals, fine payments and offers.'
          ],
          stack: ['Next.js', 'Docker', 'Web scraping', 'AWS ECS', 'ECR', 'Step Functions', 'CloudWatch']
        }
      ]
    }
  ],
  projects: [
    {
      title: 'Psychoactive substance use prediction',
      description:
        'Machine learning on Colombia’s ENCSPA 2019 survey (DANE): exploratory analysis, preprocessing, modeling, Optuna tuning, SHAP interpretability and a Streamlit app for single and batch predictions.',
      stack: ['Python', 'scikit-learn', 'Optuna', 'SHAP', 'Streamlit'],
      href: 'https://github.com/LegalmentePablo/am-pa-drugs-prediction'
    },
    {
      title: 'Nos, a local assistant for Windows',
      description:
        'A hybrid assistant that answers with rules first and calls a local LLM through Ollama only when needed. Allow-listed actions, dry-run mode, optional voice and JSON logs.',
      stack: ['Python', 'Ollama', 'Ruff', 'Mypy', 'Pytest'],
      href: 'https://github.com/LegalmentePablo/Nos'
    },
    {
      title: 'Task management system',
      description:
        'Full-stack task and reporting app: a Symfony API with JWT authentication and PDF export, consumed by a Vue 3 SPA.',
      stack: ['PHP', 'Symfony', 'Vue 3', 'Pinia', 'MySQL'],
      href: 'https://github.com/LegalmentePablo/task-management-system'
    },
    {
      title: 'Driver Logistics',
      description:
        'Offline-first Android delivery app: Room as the source of truth, optimistic updates and background sync.',
      stack: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager'],
      href: 'https://github.com/LegalmentePablo/driverLogistics'
    }
  ],
  skills: [
    {
      title: 'Backend and cloud',
      items: ['Python', 'Node.js', 'AWS Lambda', 'API Gateway', 'SAM / CloudFormation', 'DynamoDB', 'S3', 'EventBridge', 'SQS', 'Step Functions', 'ECS / ECR', 'Cognito', 'Docker']
    },
    {
      title: 'Frontend and mobile',
      items: ['TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Astro', 'Flutter']
    },
    {
      title: 'AI and agents',
      items: ['Amazon Bedrock', 'Lex V2', 'Amazon Connect', 'RAG / Knowledge Bases', 'LLMs', 'Prompt design', 'Agent orchestration']
    },
    {
      title: 'Data and quality',
      items: ['SQL / NoSQL', 'Athena', 'ETL', 'scikit-learn', 'pytest', 'Vitest', 'Playwright', 'Git']
    }
  ],
  education: [
    {
      degree: 'B.Sc. in Systems Engineering',
      institution: 'Universidad de Medellín',
      period: '2018 – 2025'
    },
    {
      degree: 'Specialization in Data Science and Artificial Intelligence',
      institution: 'Universidad de Medellín',
      period: '2025 · paused'
    }
  ],
  contact: {
    heading: 'Shall we build something?',
    message:
      'If your team needs someone to take a backend, an integration or an AI agent all the way to production, email me. I reply within 24 hours.',
    email: 'pbuitragom2@gmail.com',
    phone: '+57 301 219 5869',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    links: [
      { href: linkedin, label: 'LinkedIn' },
      { href: github, label: 'GitHub' }
    ]
  },
  footer: 'Designed and built by Pablo Buitrago Mejia.'
};
