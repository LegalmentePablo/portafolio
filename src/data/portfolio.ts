export type Lang = 'es' | 'en';

export interface NavLink {
  href: string;
  label: string;
}

export interface ExternalLink {
  href: string;
  label: string;
}

export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface CaseStudyItem {
  title: string;
  context: string;
  problem: string;
  role: string;
  outcomes: string[];
  stack: string[];
  status?: string;
  url?: string;
}

export interface CaseGroup {
  title: string;
  description: string;
  items: CaseStudyItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  href: string;
}

export interface Screenshot {
  src: string;
  label: string;
  alt: string;
  caption: string;
}

export interface FeaturedProject {
  title: string;
  label: string;
  heading: string;
  description: string;
  screenshots: Screenshot[];
  highlights: string[];
  stack: string[];
  note: string;
  galleryLabel: string;
  mascot: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface NowItem {
  figure: string;
  label: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface PortfolioData {
  lang: Lang;
  meta: {
    title: string;
    description: string;
    siteUrl: string;
    ogImagePath: string;
  };
  ui: {
    skipLink: string;
    mainNavLabel: string;
    langSwitchLabel: string;
    openMenu: string;
    closeMenu: string;
    themeToggle: string;
    viewDetails: string;
    roleLabel: string;
    outcomesLabel: string;
    stackLabel: string;
    visitLabel: string;
    sourceLabel: string;
    currentLabel: string;
    copyEmail: string;
    copied: string;
    backToTop: string;
  };
  navigation: NavLink[];
  hero: {
    name: string;
    role: string;
    lead: string;
    location: string;
    availability: string;
    primaryCta: ExternalLink;
    links: ExternalLink[];
    now: {
      title: string;
      company: string;
      items: NowItem[];
      linkLabel: string;
    };
  };
  sections: {
    experience: string;
    cases: string;
    projects: string;
    projectsIntro: string;
    skills: string;
    education: string;
    contact: string;
  };
  experience: ExperienceItem[];
  caseGroups: CaseGroup[];
  featured: FeaturedProject;
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  contact: {
    heading: string;
    message: string;
    email: string;
    phone: string;
    emailLabel: string;
    phoneLabel: string;
    links: ExternalLink[];
  };
  footer: string;
}

const linkedin = 'https://www.linkedin.com/in/pbuitragom/';
const github = 'https://github.com/LegalmentePablo';

export const portfolioData: PortfolioData = {
  lang: 'es',
  meta: {
    title: 'Pablo Buitrago Mejia · Ingeniero de software (AWS, backend e IA)',
    description:
      'Ingeniero de software en Medellín. Construyo backends serverless en AWS, sistemas de facturación y agentes de voz con IA, desde el diseño hasta producción.',
    siteUrl: 'https://portafolio-tau-ruddy-65.vercel.app',
    ogImagePath: '/og-cover.png'
  },
  ui: {
    skipLink: 'Saltar al contenido',
    mainNavLabel: 'Navegación principal',
    langSwitchLabel: 'Idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    themeToggle: 'Cambiar tema claro u oscuro',
    viewDetails: 'Ver detalle',
    roleLabel: 'Mi aporte',
    outcomesLabel: 'Resultado',
    stackLabel: 'Tecnologías',
    visitLabel: 'Visitar sitio',
    sourceLabel: 'Código',
    currentLabel: 'Actual',
    copyEmail: 'Copiar correo',
    copied: 'Copiado',
    backToTop: 'Volver arriba'
  },
  navigation: [
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#casos', label: 'Casos' },
    { href: '#leoapp', label: 'LeoApp' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contacto', label: 'Contacto' }
  ],
  hero: {
    name: 'Pablo Buitrago Mejia',
    role: 'Ingeniero de software. Backends en AWS, facturación y agentes de voz.',
    lead:
      'Llevo los sistemas de punta a punta, desde la regla de negocio hasta el despliegue. Hoy construyo la facturación y la analítica de una plataforma de contact center con IA para el sector salud.',
    location: 'Medellín, Colombia',
    availability: 'Abierto a roles remotos y proyectos freelance',
    primaryCta: { href: 'mailto:pbuitragom2@gmail.com', label: 'Escríbeme' },
    links: [
      { href: linkedin, label: 'LinkedIn' },
      { href: github, label: 'GitHub' }
    ],
    now: {
      title: 'Ahora',
      company: 'Boston Project',
      items: [
        { figure: '24', label: 'funciones Lambda en el backend donde construí la facturación mensual' },
        { figure: '7', label: 'integraciones externas en ese backend, de AWS Billing a WhatsApp' },
        { figure: '9', label: 'herramientas en el agente de voz que agenda citas (en desarrollo)' }
      ],
      linkLabel: 'Ver experiencia'
    }
  },
  sections: {
    experience: 'Experiencia',
    cases: 'Casos',
    projects: 'Proyectos personales',
    projectsIntro: 'Lo que construyo por mi cuenta para aprender o resolver algo propio.',
    skills: 'Habilidades',
    education: 'Formación',
    contact: 'Contacto'
  },
  experience: [
    {
      company: 'Boston Project',
      title: 'Ingeniero de software · Cloud, datos e IA',
      period: '08/2026 – hoy',
      current: true,
      summary:
        'Plataforma de contact center con IA para clínicas y prestadores de salud: agentes de voz, chat y WhatsApp, y una consola donde los clientes ven reportes, consumo y facturas.',
      highlights: [
        'Responsable de la facturación de la plataforma: el cálculo mensual, la revisión y la emisión, del backend a las pantallas.',
        'Construí la analítica del call center sobre los registros de Amazon Connect.',
        'Creé el agente de voz de una clínica y ajusté los agentes de otros clientes después de sus primeras jornadas con pacientes.'
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
        'Desarrollo de producto para clientes de distintos sectores, desde plataformas nuevas hasta sistemas que ya estaban en operación.',
      highlights: [
        'Gestioné y optimicé bases de datos SQL y NoSQL en producción.',
        'Implementé infraestructura como código en AWS y apoyé los despliegues.',
        'Desarrollé aplicaciones web con React, Vite y TypeScript.',
        'Mantuve y amplié, sobre código heredado, las apps de una empresa de extintores y de una de turismo, en React y Flutter, y publiqué sus versiones en Google Play.'
      ],
      stack: ['React', 'TypeScript', 'Python', 'AWS', 'IaC', 'Docker', 'Flutter', 'SQL / NoSQL']
    },
    {
      company: 'InGrapes',
      title: 'Desarrollador freelance',
      period: '11/2021 – 12/2021',
      summary:
        'Landing page comercial orientada a captar clientes, construida con componentes React reutilizables para que fuera fácil de ampliar.',
      highlights: [],
      stack: ['React', 'JavaScript', 'CSS']
    }
  ],
  caseGroups: [
    {
      title: 'En Boston Project',
      description: 'Los clientes se describen de forma genérica por confidencialidad.',
      items: [
        {
          title: 'Ciclo de facturación mensual automático',
          context: 'Plataforma de contact center con IA para el sector salud',
          problem:
            'Cada mes había que cobrarle a cada cliente lo que de verdad consumió en AWS y en llamadas, según su contrato, y poder explicar de dónde salía cada cifra.',
          role: 'Escribí la mayor parte de la facturación: las reglas de negocio, el código y las pruebas.',
          outcomes: [
            'Un ciclo mensual que acumula el consumo cada día y genera un borrador que una persona revisa antes de emitir.',
            'Una vez emitida, la factura ya no se puede modificar y queda con una huella para verificarla.',
            'El costo de AWS se reparte entre los clientes según su consumo real.',
            'La factura y su conciliación llegan al cliente en PDF por correo.'
          ],
          stack: ['Python', 'AWS Lambda', 'SAM', 'EventBridge', 'SQS', 'DynamoDB', 'S3', 'Cost Explorer', 'Billing API']
        },
        {
          title: 'Consola de clientes y reportería',
          context: 'Una sola aplicación para el equipo interno y los clientes, separados por permisos',
          problem:
            'Los clientes necesitaban ver su consumo, sus llamadas y su facturación sin acceder a la infraestructura, y el equipo interno necesitaba operar la facturación desde la misma herramienta.',
          role:
            'Construí las pantallas de facturación, los tableros del call center y de turnos, y la exportación de datos.',
          outcomes: [
            'Emisión de facturas en tres pasos y una conciliación lista para imprimir, cubiertas con pruebas end-to-end.',
            'Detalle del consumo de AWS por cliente y un mapa de calor de los turnos.',
            'Exportación a Excel de los reportes.'
          ],
          stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vitest', 'Playwright', 'AWS Amplify']
        },
        {
          title: 'Analítica del call center',
          context: 'Llamadas atendidas por agentes de voz y asesores humanos',
          problem:
            'Los registros de llamadas de Amazon Connect eran demasiado crudos para la reportería diaria de los clientes.',
          role: 'Diseñé el ETL y los permisos de acceso a los datos.',
          outcomes: [
            'Consultas con Athena que solo pueden leer: los permisos de IAM prohíben cualquier escritura.',
            'Resúmenes por hora en DynamoDB, que se recalculan cada hora y cada noche.',
            'Son la fuente de los tableros de la consola.'
          ],
          stack: ['Amazon Connect', 'Athena', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'IAM']
        },
        {
          title: 'Agente de voz para pacientes de una clínica',
          context: 'Pacientes que llaman a una clínica para gestionar sus citas',
          problem:
            'Los pacientes debían poder consultar, agendar y cancelar citas por teléfono, sin esperar a un asesor, contra los sistemas de agenda y autorizaciones de su aseguradora.',
          role: 'Creé el proyecto, integré los sistemas externos y diseñé las protecciones.',
          outcomes: [
            'Tres agentes que se pasan la llamada entre sí: uno agenda con 9 herramientas, otro responde preguntas generales con una base de conocimiento y otro da recomendaciones.',
            'Pruebas contra los sistemas reales que solo leen, para no tocar datos de pacientes.',
            'Las escrituras se simulan y se bloquean ante cualquier error, y una misma petición nunca se ejecuta dos veces.'
          ],
          stack: ['Python', 'Amazon Lex V2', 'Amazon Connect', 'Bedrock Knowledge Bases', 'S3 Vectors', 'AWS Lambda', 'DynamoDB', 'SAM'],
          status: 'En ambiente de desarrollo'
        }
      ]
    },
    {
      title: 'Antes de Boston',
      description: 'Proyectos para clientes en roles anteriores.',
      items: [
        {
          title: 'Plataforma multiagente para empresas',
          context: 'Chat empresarial con asistentes configurables por compañía',
          problem:
            'Cada empresa necesitaba un asistente que hablara de su negocio, con su base de conocimiento, y que atendiera por sus propias líneas de WhatsApp e Instagram.',
          role: 'Participé en la definición funcional, la arquitectura y el desarrollo desde cero.',
          outcomes: [
            'Onboarding que configura el asistente, el contexto y las reglas a partir del registro de la empresa.',
            'Modelos LLM elegidos según la necesidad del cliente, con una sola experiencia de chat.',
            'Integración con Meta Business para WhatsApp e Instagram.'
          ],
          stack: ['Python', 'React', 'Vite', 'AWS', 'LLMs', 'RAG'],
          url: 'https://bloxai.co/'
        },
        {
          title: 'Gestión y renovación de licencias',
          context: 'Empresa de gestión de licencias',
          problem:
            'La empresa quería saber, para su lista de clientes, quién tenía multas o licencias por vencer, sin consultarlo a mano.',
          role: 'Construí el producto completo: aplicación, backend y la automatización programada.',
          outcomes: [
            'Consulta automática cada 30 días o bajo demanda, a partir de una lista de documentos.',
            'Reportes con multas y vencimientos para el equipo comercial.',
            'Alertas por correo para renovaciones, pagos de multas y ofertas.'
          ],
          stack: ['Next.js', 'Docker', 'Web scraping', 'AWS ECS', 'ECR', 'Step Functions', 'CloudWatch']
        }
      ]
    }
  ],
  featured: {
    title: 'LeoApp',
    label: 'Proyecto personal · código privado',
    heading: 'El panel de control de mi PC',
    description:
      'Una app de escritorio para Windows que construí para mi día a día. Transcribe y resume mis reuniones, saca mis pendientes, revisa el correo, escribe scripts y mantiene el equipo al día. Todo corre con modelos locales en mi GPU: nada sale del PC.',
    galleryLabel: 'Pantallas de LeoApp',
    mascot: {
      src: '/leoapp/leo.webp',
      alt: 'Leo, un gato persa naranja, mirando de cerca a la cámara.',
      caption: 'Se llama LeoApp por Leo, mi gato. Su foto también es el icono de la app.'
    },
    screenshots: [
      {
        src: '/leoapp/inicio.webp',
        label: 'Inicio',
        alt: 'Pantalla de inicio de LeoApp con el estado de la GPU, los discos, las tareas programadas y los modelos de transcripción.',
        caption: 'El estado del equipo de un vistazo: GPU, discos, tareas, modelos y alertas. El modo juego libera la GPU.'
      },
      {
        src: '/leoapp/transcribir.webp',
        label: 'Transcribir',
        alt: 'Pantalla Transcribir de LeoApp con la elección de audio, modelos de voz y el resumen de la reunión.',
        caption: 'Dos modelos de voz en la GPU y una versión combinada; después, un modelo local escribe el resumen con decisiones y pendientes.'
      },
      {
        src: '/leoapp/pendientes.webp',
        label: 'Pendientes',
        alt: 'Pantalla Pendientes de LeoApp con tareas extraídas de reuniones, su fecha y el minuto en que se dijeron.',
        caption: 'Los pendientes salen solos del resumen de cada reunión, con el minuto exacto en que se dijeron.'
      },
      {
        src: '/leoapp/scripts.webp',
        label: 'Scripts',
        alt: 'Pantalla Scripts de LeoApp con scripts de PowerShell, su horario y acciones para probar, ejecutar o editar con IA.',
        caption: 'Describo la tarea, un modelo local escribe el PowerShell, se revisa por riesgos y queda programado en Windows.'
      },
      {
        src: '/leoapp/modelos.webp',
        label: 'Modelos',
        alt: 'Pantalla Modelos de LeoApp con los modelos de Hugging Face y de Ollama instalados y su tamaño.',
        caption: 'Modelos de Hugging Face y Ollama: tamaño, si caben en la GPU, descargar y borrar.'
      }
    ],
    highlights: [
      'Detecta cuándo termina una grabación de OBS y la transcribe y resume sola.',
      'Se le puede preguntar a una reunión: el modelo responde solo con lo que se dijo y cita el minuto.',
      'Revisa el correo con un modelo local que propone qué tirar, qué responder y qué ofertas de trabajo encajan; nunca envía nada.',
      'Actualiza los programas sin pedir permisos cada vez, mediante una tarea de Windows con permisos acotados.',
      'Respaldo semanal en Google Drive y restauración automática en un PC recién formateado.'
    ],
    stack: ['Python', 'NiceGUI', 'pywebview', 'Ollama', 'Hugging Face Transformers', 'PowerShell', 'uv', 'pytest'],
    note: 'Las capturas usan datos de ejemplo en lugar de reuniones y correos reales.'
  },
  projects: [
    {
      title: 'Predicción de consumo de sustancias psicoactivas',
      description:
        'Machine learning sobre la encuesta ENCSPA 2019 del DANE: análisis exploratorio, preprocesamiento, modelado, optimización con Optuna, interpretabilidad con SHAP y una app en Streamlit para predicción individual y por lotes.',
      stack: ['Python', 'scikit-learn', 'Optuna', 'SHAP', 'Streamlit'],
      href: 'https://github.com/LegalmentePablo/am-pa-drugs-prediction'
    },
    {
      title: 'Nos, asistente local para Windows',
      description:
        'Asistente híbrido que resuelve por reglas y recurre a un LLM local con Ollama solo cuando hace falta. Acciones en lista blanca, modo de prueba, voz opcional y logs en JSON.',
      stack: ['Python', 'Ollama', 'Ruff', 'Mypy', 'Pytest'],
      href: 'https://github.com/LegalmentePablo/Nos'
    },
    {
      title: 'Sistema de gestión de tareas',
      description:
        'Aplicación fullstack de tareas y reportes: API en Symfony con autenticación JWT y exportación a PDF, consumida por una SPA en Vue 3.',
      stack: ['PHP', 'Symfony', 'Vue 3', 'Pinia', 'MySQL'],
      href: 'https://github.com/LegalmentePablo/task-management-system'
    },
    {
      title: 'Driver Logistics',
      description:
        'App Android de entregas pensada para trabajar sin conexión: Room como fuente de verdad, actualizaciones optimistas y sincronización en segundo plano.',
      stack: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager'],
      href: 'https://github.com/LegalmentePablo/driverLogistics'
    }
  ],
  skills: [
    {
      title: 'Backend y cloud',
      items: ['Python', 'Node.js', 'AWS Lambda', 'API Gateway', 'SAM / CloudFormation', 'DynamoDB', 'S3', 'EventBridge', 'SQS', 'Step Functions', 'ECS / ECR', 'Cognito', 'Docker']
    },
    {
      title: 'Frontend y móvil',
      items: ['TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Astro', 'Flutter']
    },
    {
      title: 'IA y agentes',
      items: ['Amazon Bedrock', 'Lex V2', 'Amazon Connect', 'RAG / Knowledge Bases', 'LLMs', 'Diseño de prompts', 'Orquestación de agentes']
    },
    {
      title: 'Datos y calidad',
      items: ['SQL / NoSQL', 'Athena', 'ETL', 'scikit-learn', 'pytest', 'Vitest', 'Playwright', 'Git']
    }
  ],
  education: [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad de Medellín',
      period: '2018 – 2025'
    },
    {
      degree: 'Especialización en Ciencia de Datos e Inteligencia Artificial',
      institution: 'Universidad de Medellín',
      period: '2025 · en pausa'
    }
  ],
  contact: {
    heading: '¿Construimos algo?',
    message:
      'Si tu equipo necesita a alguien que lleve un backend, una integración o un agente de IA hasta producción, escríbeme. Respondo en menos de 24 horas.',
    email: 'pbuitragom2@gmail.com',
    phone: '+57 301 219 5869',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    links: [
      { href: linkedin, label: 'LinkedIn' },
      { href: github, label: 'GitHub' }
    ]
  },
  footer: 'Diseñado y construido por Pablo Buitrago Mejia.'
};
