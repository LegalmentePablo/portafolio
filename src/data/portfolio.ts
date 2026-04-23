export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  href: string;
}

export interface CaseStudyItem {
  title: string;
  problem: string;
  role: string;
  stack: string[];
  outcomes: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface StandardItem {
  title: string;
  description: string;
}

export interface InsightItem {
  title: string;
  summary: string;
  href: string;
}

export interface ContactLink {
  href: string;
  label: string;
  icon: string;
}

export const portfolioData = {
  meta: {
    title: 'Pablo Buitrago Mejia | Software Development Engineer',
    heroTitle: 'Hola, soy',
    heroHighlight: 'Pablo Buitrago Mejia',
    heroSubtitle: 'Ingeniero de Sistemas enfocado en desarrollo de producto, cloud y datos',
    valueProposition:
      'Construyo soluciones robustas de principio a fin, con enfoque en calidad, responsabilidad y resultados medibles para el negocio.',
    location: 'Medellín, Antioquia',
    primaryCta: {
      label: 'Escríbeme por LinkedIn',
      href: 'https://www.linkedin.com/in/pbuitragom/',
      icon: '/linkedin-icon.svg'
    },
    secondaryCta: {
      label: 'Ver mi GitHub',
      href: 'https://github.com/LegalmentePablo',
      icon: '/github-icon.svg'
    }
  },
  about: {
    title: 'Sobre Mí',
    summary:
      'Soy una persona seria, responsable y comprometida con hacer bien las cosas. Me caracterizo por trabajar con orden, cumplir lo que prometo y mantener una comunicación clara.',
    education:
      'Como Ingeniero de Sistemas, combino disciplina y criterio técnico para entregar soluciones útiles, estables y pensadas para el largo plazo.',
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
    { href: '#inicio', label: 'Inicio' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#casos', label: 'Proyectos Profesionales' },
    { href: '#educacion', label: 'Educación' },
    { href: '#proyectos', label: 'Proyectos Personales' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contacto', label: 'Contacto' }
  ] satisfies NavLink[],
  ui: {
    header: {
      menu: 'Menú',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú'
    },
    sections: {
      experience: 'Experiencia',
      professionalProjects: 'Proyectos Profesionales',
      education: 'Educación',
      personalProjects: 'Proyectos Personales',
      skills: 'Habilidades Técnicas'
    },
    caseStudies: {
      roleLabel: 'Mi aporte',
      stackLabel: 'Tecnologías',
      pageLabel: 'Página',
      demoLabel: 'Demo'
    },
    projects: {
      ctaLabel: 'Ver en GitHub'
    },
    contact: {
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono'
    }
  },
  experience: [
    {
      title: 'Software Development Engineer',
      company: 'Stellion Tech S.A.S',
      period: '09/2022 - 01/2026',
      description:
        'Ingeniero de Desarrollo: gestioné y optimicé bases de datos, implementé infraestructura como código (IaC) en AWS y desarrollé aplicaciones web con React/Vite + TypeScript. También brindé soporte en despliegues y aseguramiento de calidad.'
    }
  ] satisfies ExperienceItem[],
  caseStudies: [
    {
      title: 'Plataforma Multiagente',
      problem:
        'Desarrollé un chat empresarial donde, desde el registro de cada compañía, se adapta automáticamente el asistente, base de conocimiento y prompts según su negocio. Donde cada empresa puede integrar su Meta Business para hacer uso de sus lineas de WhastApp e Instagram.',
      role:
        'Participé en la definición funcional, arquitectura y desarrollo desde cero.',
      stack: [
        'Python',
        'Vite + React',
        'AWS',
        'LLMs',
        'Knowledge Base + Prompt Engineering'
      ],
      outcomes: [
        'Onboarding empresarial adaptable para configurar automáticamente comportamiento, contexto y reglas del asistente.',
        'Integración de modelos LLM según necesidad del cliente, manteniendo una experiencia unificada en el chat.',
        'Flujo robusto de conocimiento + prompts para respuestas alineadas al negocio de cada empresa.'
      ],
      repoUrl: 'https://bloxai.co/'
    },
    {
      title: 'App web para gestión y renovación de licencias',
      problem:
        'Desarrollé una aplicación web desde cero para una empresa de licencias, con ejecución manual o automática cada 30 días que realiza scraping por cédula mediante una lista para consultar información relevante para el cliente.',
      role:
        'Implementé el flujo: producto, backend y automatización para transformar los resultados en reportes empresariales y campañas de contacto.',
      stack: ['Next.js', 'Docker', 'Web Scraping', 'Automatización', 'AWS', 'ECR', 'ECS', 'Step Functions', 'CloudWatch'],
      outcomes: [
        'Generación de reportes para la empresa con información accionable de multas y vencimientos.',
        'Alertas automáticas por correo a usuarios registrados para renovaciones, pagos de multas y ofertas.',
        'Uso comercial de la data capturada para impulsar ventas de renovaciones y descuentos.'
      ]
    },
    {
      title: 'Aplicación de empresa de extintores',
      problem:
        'La plataforma ya existente requería mantenimiento continuo para corregir errores, estabilizar flujos y agregar nuevas funcionalidades de negocio.',
      role:
        'Entré a trabajar sobre código escrito por otros desarrolladores, realizando correcciones, refactorizaciones puntuales y evolución funcional.',
      stack: ['React', 'AWS'],
      outcomes: [
        'Corrección de bugs en módulos críticos del flujo operativo.',
        'Nuevas funcionalidades implementadas sin interrumpir la operación existente.',
        'Base de código más estable y mantenible para siguientes iteraciones.'
      ],
    },
    {
      title: 'Aplicación para empresa de turismo',
      problem:
        'El producto necesitaba mejorar experiencia de usuario y confiabilidad en web y móvil sobre una base de código ya construida.',
      role:
        'Me integré a una solución existente para corregir bugs, extender funcionalidades en React y Flutter, y apoyar el proceso de publicación.',
      stack: ['React', 'AWS', 'Flutter', 'Google Play Console'],
      outcomes: [
        'Mejoras funcionales y de estabilidad en frontend web y móvil.',
        'Resolución de incidencias heredadas en componentes existentes.',
        'Publicación y seguimiento de versiones en Play Store con mayor control de calidad.'
      ],
    }
  ] satisfies CaseStudyItem[],
  projects: [
    {
      title: 'Predicción de Consumo de Sustancias Psicoactivas',
      description:
        'Proyecto de ML con datos ENCSPA 2019 (DANE): EDA, preprocesamiento, modelado, optimización con Optuna, interpretabilidad con SHAP y app en Streamlit para predicción individual y por lotes.',
      href: 'https://github.com/LegalmentePablo/am-pa-drugs-prediction'
    },
    {
      title: 'Nos - Asistente Local Híbrido (Windows)',
      description:
        'MVP local con arquitectura rules-first y fallback LLM con Ollama: acciones seguras en Windows, modo voz opcional (STT), logs JSON y flujo de calidad con Ruff, Mypy y Pytest.',
      href: 'https://github.com/LegalmentePablo/Nos'
    }
  ] satisfies ProjectItem[],
  education: [
    {
      degree: 'Especialización en Ciencia de Datos e Inteligencia Artificial',
      institution: 'Universidad de Medellín',
      period: '07/2025 - Pausado'
    },
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad de Medellín',
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
    title: 'Contacto',
    message:
      'Si estás construyendo un producto y necesitas fortalecer backend, datos o cloud, conversemos. Respondo en menos de 24 horas.',
    email: 'pbuitragom2@gmail.com',
    phone: '+57 3012195869',
    links: [
      { href: 'https://www.linkedin.com/in/pbuitragom/', label: 'LinkedIn', icon: '/linkedin-icon.svg' },
      { href: 'https://github.com/LegalmentePablo', label: 'GitHub', icon: '/github-icon.svg' }
    ] satisfies ContactLink[]
  }
} as const;
