import { Users, Factory, Target, Shield, Building2 } from "lucide-react";
import { CollaborationModelData, CollaborationComparison } from "@/types/collaborationModel";

// Datos de comparación compartidos entre todos los modelos
export const collaborationComparisons: CollaborationComparison[] = [
  {
    model: "Talent as a Service",
    timeToStart: "1-2 semanas",
    commitment: "Flexible",
    bestFor: "Ampliar equipos",
    responsibility: "Compartida"
  },
  {
    model: "Software Factory OnDemand",
    timeToStart: "2-4 semanas",
    commitment: "Por proyecto",
    bestFor: "Desarrollo ágil",
    responsibility: "100% KPaz"
  },
  {
    model: "Turnkey Projects",
    timeToStart: "2-4 semanas",
    commitment: "Proyecto completo",
    bestFor: "Soluciones end-to-end",
    responsibility: "100% KPaz"
  },
  {
    model: "Applications Managed",
    timeToStart: "2-4 semanas",
    commitment: "Largo plazo",
    bestFor: "Mantenimiento continuo",
    responsibility: "Compartida"
  },
  {
    model: "Business Process Outsourcing",
    timeToStart: "4-8 semanas",
    commitment: "Largo plazo",
    bestFor: "Procesos operativos",
    responsibility: "100% KPaz"
  }
];

// Datos centralizados de todos los modelos de colaboración
export const collaborationModelsData: Record<string, CollaborationModelData> = {
  "talent-as-service": {
    id: "talent-as-service",
    title: "Talent as a Service (TaaS)",
    subtitle: "Flexibilidad, velocidad y talento validado para escalar tus proyectos.",
    description: "Te conectamos con profesionales o equipos completos según lo que tu negocio necesita, sin fricciones ni esperas.",
    icon: Users,
    image: "/lovable-uploads/fad04388-e1a9-48d6-9b58-ea8cd3c44aad.png",
    gradient: "from-[#2e4bce] to-indigo-600",
    useCases: [
      "Necesitas escalar rápidamente tu equipo técnico para un proyecto específico",
      "Buscas expertise especializado que no tienes internamente",
      "Quieres reducir costos de contratación y onboarding",
      "Necesitas flexibilidad para ajustar el tamaño del equipo según demanda",
      "Buscas acceso a talento global sin las fricciones de contratación directa",
      "Necesitas más capacidad, pero sin aumentar headcount. Flexible y sin burocracia."
    ],
    benefits: [
      {
        title: "Flexibilidad total",
        description: "Escalas el equipo según necesidades",
        icon: "users" as const
      },
      {
        title: "Talento validado",
        description: "Profesionales con experiencia comprobada",
        icon: "shield" as const
      },
      {
        title: "Rápida incorporación",
        description: "Equipos operativos en menos de 2 semanas",
        icon: "zap" as const
      },
      {
        title: "Costo competitivo",
        description: "Hasta 40% menos que contratar localmente",
        icon: "trending" as const
      }
    ],
    examples: [
      {
        industry: "Startup Tecnológica",
        description: "Staff augmentation con 5 desarrolladores senior para acelerar el desarrollo de su MVP.",
        results: "Lanzamiento 4 meses antes de lo planeado, ahorro de $200K en costos"
      },
      {
        industry: "Empresa Manufacturera",
        description: "Dedicated team para digitalización completa de procesos de producción y calidad.",
        results: "Automatización del 80% de procesos manuales en 8 meses"
      },
      {
        industry: "Corporativo Financiero",
        description: "Equipo especializado en AI/ML para desarrollo de motor de recomendaciones de inversión.",
        results: "Incremento del 25% en conversión de leads calificados"
      }
    ],
    whyKPaz: {
      title: "¿Por qué KPaz para Talent as a Service?",
      description: "Gran red de profesionales certificados con experiencia en proyectos globales y metodologías ágiles comprobadas.",
      highlights: [
        "Red de talento pre-validado técnicamente",
        "Respuesta en días, no semanas",
        "Garantía de fit técnico y cultural"
      ]
    },
    faqs: [
      {
        question: "¿Cuál es la diferencia entre Staff Augmentation y Dedicated Teams?",
        answer: "Staff Augmentation te permite incorporar profesionales individuales que se integran a tu equipo existente, mientras que Dedicated Teams son equipos completos que trabajan de forma autónoma en tus proyectos bajo nuestra gestión."
      },
      {
        question: "¿Qué tan rápido puedo tener talento operativo?",
        answer: "En promedio, podemos tener profesionales operativos en 1-2 semanas desde la definición de perfiles. Para equipos completos, el tiempo puede extenderse a 2-3 semanas dependiendo de la complejidad de los roles."
      },
      {
        question: "¿Cómo garantizan el fit cultural?",
        answer: "Realizamos entrevistas de fit cultural además de las técnicas, evaluamos soft skills específicas para tu industria y ofrecemos un período de prueba inicial para asegurar la integración exitosa."
      },
      {
        question: "¿Puedo escalar o reducir el equipo según mis necesidades?",
        answer: "Sí, la flexibilidad es una de las principales ventajas del modelo TaaS. Puedes ajustar el tamaño del equipo con avisos de 30 días, sin penalizaciones por cambios de scope."
      },
      {
        question: "¿Qué pasa si un profesional no cumple con las expectativas?",
        answer: "Ofrecemos reemplazo inmediato sin costo adicional. Nuestro proceso de validación técnica y cultural reduce significativamente estos casos, pero cuando ocurren, los resolvemos rápidamente."
      },
      {
        question: "¿Puedo contratar internamente a los talentos asignados después de un tiempo?",
        answer: "Sí, siempre es posible contratar a los profesionales internamente. Durante los primeros 6 meses aplica un cargo por reclutamiento y selección. Después de este período mínimo, puedes internalizarlos sin costo adicional, solo requiere un aviso previo de 30 días."
      }
    ],
    cta: {
      title: "¿Necesitas ampliar tu equipo rápidamente?",
      description: "Conversemos sobre el perfil que necesitas y te conectamos con el talento ideal en menos de 2 semanas."
    }
  },

  "software-factory-ondemand": {
    id: "software-factory-ondemand",
    title: "Software Factory OnDemand",
    subtitle: "Tu fábrica, tu ritmo.",
    description: "Para negocios con backlogs cambiantes y prioridades dinámicas, obtén flexibilidad, eficiencia y calidad. Paga solo por lo que usas.",
    icon: Factory,
    image: "/lovable-uploads/85f68e1e-0cc3-473c-b070-21a08463371c.png",
    gradient: "from-blue-500 to-indigo-600",
    useCases: [
      "Tienes un backlog que cambia constantemente y necesitas flexibilidad para adaptarte rápidamente",
      "Necesitas escalamiento rápido de recursos en momentos específicos o picos de trabajo",
      "Buscas un flujo constante de desarrollo pero con volúmenes variables",
      "Quieres optimizar costos pagando solo por lo que realmente utilizas",
      "Necesitas acceso a equipos multidisciplinarios completos sin contratación interna",
      "Buscas metodologías ágiles probadas que maximicen la productividad del desarrollo"
    ],
    benefits: [
      {
        title: "Flexibilidad Total",
        description: "Escala tu equipo según necesidades del proyecto",
        icon: "zap" as const
      },
      {
        title: "Eficiencia Garantizada",
        description: "Metodologías probadas que maximizan productividad",
        icon: "trending" as const
      },
      {
        title: "Calidad Asegurada",
        description: "Procesos de QA integrados en cada etapa",
        icon: "shield" as const
      },
      {
        title: "Gestión Transparente",
        description: "Visibilidad completa del progreso en tiempo real",
        icon: "users" as const
      }
    ],
    examples: [
      {
        industry: "E-commerce en Crecimiento",
        description: "Desarrollo de nuevas funcionalidades para plataforma durante temporadas altas, escalando el equipo 3x durante Black Friday.",
        results: "300% de escalamiento exitoso, zero downtime durante picos, ROI positivo en 2 meses"
      },
      {
        industry: "Fintech Emergente",
        description: "Desarrollo ágil de features de compliance mientras se mantiene el producto core con equipos flexibles.",
        results: "50% reducción en time-to-market, 100% compliance alcanzado, equipo escalado según necesidad"
      },
      {
        industry: "Empresa de Manufactura",
        description: "Mantenimiento y evolución de sistemas ERP usando bolsas de horas para desarrollos puntuales y soporte continuo.",
        results: "Reducción 60% en costos fijos, flexibilidad total para demandas variables, tiempo de respuesta 48 horas máximo"
      }
    ],
    whyKPaz: {
      title: "¿Por qué KPaz para Software Factory OnDemand?",
      description: "Nuestra experiencia en metodologías ágiles, combinada con equipos multidisciplinarios certificados, nos permite ofrecer una fábrica de software flexible y eficiente.",
      highlights: [
        "Reducción de hasta 40% en costos vs. equipos internos",
        "Metodologías ágiles y DevOps probadas",
        "Escalabilidad instantánea y modelo transparente"
      ]
    },
    faqs: [
      {
        question: "¿Cómo funciona el modelo de facturación con bolsas de horas?",
        answer: "Contratas un paquete de horas que se van consumiendo según tus necesidades de desarrollo o mantención. Facturas solo por las horas realmente utilizadas con transparencia total en el tracking de tiempo y entregables. Puedes pausar, acelerar o cambiar de foco sin penalizaciones."
      },
      {
        question: "¿Qué tan rápido puedo escalar el equipo hacia arriba o abajo?",
        answer: "Podemos escalar hacia arriba o abajo en un plazo de 48-72 horas, dependiendo de los perfiles requeridos. Esta flexibilidad es una de las principales ventajas del modelo Factory OnDemand."
      },
      {
        question: "¿Cómo aseguran la calidad en un modelo tan flexible?",
        answer: "Mantenemos estándares de calidad rigurosos con procesos de QA integrados, code reviews obligatorios, testing automatizado y metodologías ágiles comprobadas. La flexibilidad no compromete la calidad."
      },
      {
        question: "¿Puedo cambiar las prioridades del backlog frecuentemente?",
        answer: "Sí, nuestro modelo está diseñado específicamente para adaptarse a cambios de prioridades y requisitos cambiantes. Esta agilidad es fundamental para responder a las necesidades dinámicas del negocio."
      },
      {
        question: "¿Qué diferencia hay con contratar un equipo interno?",
        answer: "Factory OnDemand te da acceso inmediato a equipos especializados, metodologías probadas, tecnologías de vanguardia y escalabilidad instantánea, todo con costos operativos menores y modelo de facturación por uso real."
      },
      {
        question: "¿Incluyen project management y metodologías ágiles?",
        answer: "Sí, todos nuestros equipos incluyen Project Manager dedicado, metodologías ágiles (Scrum/Kanban), herramientas de gestión y colaboración, reportes detallados y soporte técnico continuo."
      }
    ],
    cta: {
      title: "¿Listo para tener tu propia fábrica de software?",
      description: "Conversemos sobre tu backlog y diseñemos un modelo de colaboración flexible que se adapte a tus necesidades."
    }
  },

  "turnkey-projects": {
    id: "turnkey-projects",
    title: "Turnkey Projects",
    subtitle: "Soluciones completas entregadas listas para usar, desde el concepto hasta la implementación.",
    description: "Nos encargamos de todo el proyecto de principio a fin. Tú defines los objetivos, nosotros entregamos la solución completa funcionando.",
    icon: Target,
    image: "/lovable-uploads/b3d0a614-fef6-4dc4-8009-e4dd855fc68e.png",
    gradient: "from-[#2e4bce] to-indigo-600",
    useCases: [
      "Necesitas desarrollar una solución de principio a fin con entregables definidos",
      "Tu equipo interno no tiene la capacidad o foco para liderar el proyecto",
      "Buscas evitar fricciones y asegurar cumplimiento en plazos y calidad",
      "Requieres un solo punto de responsabilidad para todo el proyecto",
      "Quieres certeza en costos y tiempos desde el inicio",
      "Necesitas demostrar resultados concretos y medibles en corto plazo"
    ],
    benefits: [
      {
        title: "Aceleración de entregas",
        description: "Proyectos completados hasta 40% más rápido",
        icon: "zap" as const
      },
      {
        title: "Disminución de riesgos",
        description: "Responsabilidad total en calidad y plazos",
        icon: "shield" as const
      },
      {
        title: "Fácil comunicación",
        description: "Un solo punto de contacto para todo",
        icon: "users" as const
      },
      {
        title: "Carga operativa reducida",
        description: "Tu equipo se enfoca en el core business",
        icon: "trending" as const
      }
    ],
    examples: [
      {
        industry: "Sector Bancario",
        description: "Desarrollo completo de plataforma de banca digital para una institución financiera regional.",
        results: "Reducción del 35% en tiempos de entrega vs. desarrollo interno"
      },
      {
        industry: "E-commerce",
        description: "Implementación integral de marketplace B2B con sistema de pagos y logística.",
        results: "Lanzamiento exitoso en 6 meses con 0 incidentes críticos"
      },
      {
        industry: "Salud",
        description: "Desarrollo de sistema de gestión hospitalaria con integración de expedientes electrónicos.",
        results: "Mejora del 50% en eficiencia operativa del hospital"
      }
    ],
    whyKPaz: {
      title: "¿Por qué KPaz para Turnkey Projects?",
      description: "Nuestra experiencia en gestión ágil, combinada con un ecosistema de talento validado, nos permite asumir proyectos completos con seguridad y resultados.",
      highlights: [
        "Más de 10 años gestionando proyectos complejos",
        "Metodologías ágiles comprobadas",
        "Equipos multidisciplinarios certificados"
      ]
    },
    faqs: [
      {
        question: "¿Qué diferencia hay entre Turnkey Projects y Software Factory OnDemand?",
        answer: "Turnkey Projects asume la responsabilidad completa del proyecto desde el análisis hasta la entrega final, mientras que Software Factory OnDemand se enfoca en el desarrollo ágil con mayor participación del cliente en la gestión del proyecto."
      },
      {
        question: "¿Cómo garantizan el cumplimiento de plazos y presupuesto?",
        answer: "Utilizamos metodologías ágiles comprobadas, definimos alcances claros desde el inicio y mantenemos comunicación constante. Nuestro equipo de project managers certificados monitorea el progreso diariamente y gestiona proactivamente cualquier riesgo."
      },
      {
        question: "¿Qué pasa si durante el desarrollo surgen cambios en los requerimientos?",
        answer: "Manejamos los cambios a través de un proceso de control de cambios estructurado. Evaluamos el impacto en tiempo y costo, y acordamos con el cliente antes de implementar cualquier modificación al alcance original."
      },
      {
        question: "¿Incluyen mantenimiento posterior a la entrega?",
        answer: "Sí, todos nuestros proyectos Turnkey incluyen un período de garantía post-entrega. Adicionalmente, ofrecemos planes de mantenimiento y soporte continuo a través de nuestro modelo Applications Managed."
      },
      {
        question: "¿Cómo aseguran la calidad del producto final?",
        answer: "Implementamos procesos de QA desde el día uno, con testing automatizado, revisiones de código continuas y validaciones de usuario en cada sprint. Además, realizamos auditorías de calidad independientes antes de cada entrega."
      },
      {
        question: "¿Puedo tener visibilidad del progreso durante el desarrollo?",
        answer: "Absolutamente. Proporcionamos dashboards en tiempo real, demos regulares cada 2 semanas, y reportes de progreso semanales. También tienes acceso directo a nuestro project manager asignado para cualquier consulta."
      }
    ],
    cta: {
      title: "¿Quieres saber si este modelo es el adecuado para ti?",
      description: "Conversemos sin compromiso y diseñemos juntos la mejor forma de avanzar."
    }
  },

  "applications-managed": {
    id: "applications-managed",
    title: "Applications Managed",
    subtitle: "Tu software, siempre operativo y en constante evolución.",
    description: "Nos encargamos de mantener, evolucionar y monitorear tus aplicaciones y plataformas para que tú te enfoques en el negocio.",
    icon: Shield,
    image: "/lovable-uploads/0442e563-6635-4280-b6ad-5bb3e5b99cae.png",
    gradient: "from-[#2e4bce] to-indigo-600",
    useCases: [
      "Tienes aplicaciones críticas que requieren monitoreo 24/7",
      "Tu equipo interno necesita enfocarse en innovación, no en mantenimiento",
      "Buscas garantías de disponibilidad y performance",
      "Necesitas evolucionar aplicaciones legacy sin interrumpir la operación",
      "Quieres costos predecibles para el mantenimiento de software",
      "Requieres un partner que asuma la operación con gobernanza y mejora continua"
    ],
    benefits: [
      {
        title: "Disponibilidad garantizada",
        description: "SLA de hasta un 99,9% de uptime asegurado",
        icon: "shield" as const
      },
      {
        title: "Costos predecibles",
        description: "Modelo de suscripción mensual fija",
        icon: "trending" as const
      },
      {
        title: "Evolución continua",
        description: "Mejoras y actualizaciones regulares",
        icon: "zap" as const
      },
      {
        title: "Soporte especializado",
        description: "Equipos expertos en tu tecnología",
        icon: "users" as const
      }
    ],
    examples: [
      {
        industry: "Fintech",
        description: "Gestión completa de aplicaciones de pagos digitales con alta disponibilidad y cumplimiento normativo.",
        results: "99.98% de uptime mantenido durante 2 años consecutivos"
      },
      {
        industry: "Retail",
        description: "Mantenimiento y evolución de plataforma e-commerce con más de 1M de transacciones mensuales.",
        results: "Reducción del 60% en incidentes críticos año tras año"
      },
      {
        industry: "Manufactura",
        description: "Modernización progresiva de sistemas ERP legacy manteniendo operación 24/7.",
        results: "Migración exitosa sin downtime en operaciones críticas"
      }
    ],
    whyKPaz: {
      title: "¿Por qué KPaz para Applications Managed?",
      description: "Experiencia gestionando aplicaciones críticas con SLAs del 99.9% de disponibilidad y equipos especializados en tecnologías diversas.",
      highlights: [
        "Monitoreo 24/7 con herramientas enterprise",
        "Equipos certificados en múltiples tecnologías",
        "Procesos ITIL y metodologías DevOps"
      ]
    },
    faqs: [
      {
        question: "¿Qué diferencia hay entre Applications Managed y Turnkey Projects?",
        answer: "Applications Managed se enfoca en el mantenimiento y evolución continua de aplicaciones existentes, mientras que Turnkey Projects desarrolla nuevas soluciones desde cero. Applications Managed es un servicio de largo plazo, mientras que Turnkey es un proyecto con inicio y fin definidos."
      },
      {
        question: "¿Cómo garantizan el SLA de 99.9% de uptime?",
        answer: "Implementamos monitoreo 24/7 con herramientas enterprise, tenemos equipos de respuesta inmediata, realizamos mantenimientos preventivos programados y contamos con protocolos de escalamiento automatizados. Además, mantenemos ambientes de respaldo y planes de contingencia activos."
      },
      {
        question: "¿Qué incluye el servicio de evolución continua?",
        answer: "Incluye actualizaciones de seguridad, optimizaciones de performance, implementación de nuevas funcionalidades menores, migración a nuevas versiones de tecnología, y mejoras basadas en métricas de uso y feedback de usuarios."
      },
      {
        question: "¿Cómo manejan las aplicaciones legacy?",
        answer: "Realizamos una evaluación completa de la aplicación, creamos un plan de modernización gradual, implementamos mejoras incrementales sin interrumpir la operación, y documentamos todo el proceso para facilitar futuras intervenciones."
      },
      {
        question: "¿Puedo tener visibilidad de lo que hacen con mis aplicaciones?",
        answer: "Sí, proporcionamos dashboards en tiempo real con métricas de performance, reportes mensuales de actividades realizadas, alertas inmediatas ante incidentes, y reuniones regulares de revisión de servicio con nuestro equipo especializado."
      },
      {
        question: "¿Qué pasa si quiero incorporar nuevas funcionalidades grandes?",
        answer: "Para desarrollos mayores recomendamos nuestro modelo Turnkey Projects o Software Factory OnDemand. El servicio Applications Managed se complementa perfectamente con estos modelos para el desarrollo de nuevas capacidades."
      }
    ],
    cta: {
      title: "¿Listo para liberar a tu equipo del mantenimiento?",
      description: "Conversemos sobre cómo podemos asumir la operación de tus aplicaciones críticas."
    }
  },

  "business-process-outsourcing": {
    id: "business-process-outsourcing",
    title: "Business Process Outsourcing (BPO)",
    subtitle: "Delegas procesos, nosotros garantizamos eficiencia y resultados.",
    description: "Asumimos la operación de procesos clave garantizando agilidad, continuidad y mejora continua para que te enfoques en hacer crecer tu negocio.",
    icon: Building2,
    image: "/lovable-uploads/20fe56c4-f547-404e-87ab-3c1ddcfd70b3.png",
    gradient: "from-[#2e4bce] to-slate-700",
    useCases: [
      "Tienes procesos operativos que consumen mucho tiempo de tu equipo clave",
      "Buscas reducir costos operativos sin comprometer la calidad",
      "Necesitas escalar operaciones rápidamente sin contratar personal interno",
      "Quieres acceso a tecnología y mejores prácticas sin inversión inicial",
      "Buscas garantías de nivel de servicio en procesos críticos no-core",
      "Quieres transformar un proceso tradicional en una ventaja competitiva"
    ],
    benefits: [
      {
        title: "Reducción de costos",
        description: "Optimización de recursos hasta un 40%",
        icon: "trending" as const
      },
      {
        title: "Enfoque en core business",
        description: "Libera recursos para actividades estratégicas",
        icon: "users" as const
      },
      {
        title: "Mejora continua",
        description: "Procesos de optimización constante",
        icon: "zap" as const
      },
      {
        title: "Escalabilidad",
        description: "Capacidad de escalar según demandas",
        icon: "shield" as const
      }
    ],
    examples: [
      {
        industry: "Retail Multicanal",
        description: "Outsourcing completo de atención al cliente: call center, chat, email y redes sociales.",
        results: "Mejora del 35% en satisfacción del cliente, reducción de 30% en costos"
      },
      {
        industry: "Empresa de Servicios",
        description: "Gestión integral de procesos contables, facturación y reportes financieros.",
        results: "Reducción del 50% en errores contables, entrega de reportes en tiempo record"
      },
      {
        industry: "Corporativo Industrial",
        description: "Outsourcing de gestión de nómina y administración de personal para 500+ empleados.",
        results: "Automatización del 90% de procesos de RRHH, cumplimiento 100% normativo"
      }
    ],
    whyKPaz: {
      title: "¿Por qué KPaz para BPO?",
      description: "Más de 10 años de experiencia gestionando procesos empresariales con certificaciones de calidad y tecnología avanzada para optimizar tu operación.",
      highlights: [
        "Experiencia operando procesos IT, comerciales, administrativos y de soporte",
        "Tecnología avanzada de automatización",
        "Equipos especializados por industria"
      ]
    },
    faqs: [
      {
        question: "¿Qué tipos de procesos pueden ser externalizados?",
        answer: "Podemos asumir procesos administrativos (contabilidad, RRHH, facturación), comerciales (atención al cliente, ventas, marketing digital), IT (soporte técnico, help desk) y operativos (logística, gestión de inventarios, procesamiento de datos)."
      },
      {
        question: "¿Cómo garantizan la continuidad del servicio?",
        answer: "Implementamos planes de continuidad de negocio, equipos de respaldo, documentación exhaustiva de procesos y monitoreo 24/7. Además, mantenemos SLAs estrictos y protocolos de escalamiento para garantizar la operación ininterrumpida."
      },
      {
        question: "¿Qué pasa con la confidencialidad de mi información?",
        answer: "Manejamos acuerdos de confidencialidad robustos, protocolos de seguridad avanzados, acceso controlado por roles, y auditorías regulares. Toda la información se procesa bajo estrictos estándares de seguridad y privacidad con metodologías probadas en la industria."
      },
      {
        question: "¿Cómo miden y reportan la performance de los procesos?",
        answer: "Establecemos KPIs específicos desde el inicio, proporcionamos dashboards en tiempo real, reportes automáticos periódicos y reuniones de revisión mensual. También implementamos métricas de calidad, productividad y satisfacción."
      },
      {
        question: "¿Puedo customizar los procesos según mis necesidades específicas?",
        answer: "Absolutamente. Cada proceso se adapta a tus requerimientos específicos, flujos de trabajo existentes y sistemas internos. Realizamos un análisis previo para entender tu operación y diseñar soluciones a medida."
      },
      {
        question: "¿Qué diferencia hay entre BPO y contratar un equipo interno?",
        answer: "BPO te da acceso inmediato a equipos especializados, tecnología avanzada, mejores prácticas probadas y escalabilidad flexible, todo con costos operativos menores y sin las fricciones de contratación, capacitación y gestión de personal interno."
      }
    ],
    cta: {
      title: "¿Listo para optimizar tus procesos operativos?",
      description: "Conversemos sobre qué procesos podemos asumir para liberar a tu equipo y reducir costos."
    }
  }
};