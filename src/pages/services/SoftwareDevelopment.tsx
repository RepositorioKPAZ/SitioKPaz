
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const SoftwareDevelopment = () => {
  const service = services.find(s => s.title === "Software Development")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "Profesionales especializados integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: true,
      description: "Desarrollo ágil con equipos escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos completos desde el diseño hasta la implementación"
    },
    {
      name: "Applications Managed",
      compatible: false,
      description: "Enfocado en mantenimiento de aplicaciones existentes"
    },
    {
      name: "Business Process Outsourcing",
      compatible: false,
      description: "Orientado a procesos operativos específicos"
    },
    {
      name: "Software Licensing Service",
      compatible: false,
      description: "Centrado en licenciamiento de software"
    }
  ];

  const data = createServicePageData(service, {
    heroDescription: "Desarrollamos software empresarial que transforma procesos críticos en ventajas competitivas. Soluciones escalables que crecen con tu negocio y entregan ROI medible desde el primer día.",
    whyKeyTitle: "¿Por qué el software personalizado es clave para tu empresa?",
    whyKeyDescription: "Las empresas que dependen de software genérico limitan su potencial de crecimiento. Con desarrollo personalizado, transformamos tus procesos únicos en ventajas competitivas sostenibles.",
    includes: [
      "Análisis profundo de requerimientos y arquitectura técnica",
      "Desarrollo ágil con entregas incrementales y feedback continuo",
      "Integración con sistemas existentes y APIs empresariales",
      "Testing exhaustivo y deployment en infraestructura escalable",
      "Soporte técnico especializado y evolución continua",
      "Documentación completa y capacitación de usuarios finales"
    ],
    benefits: [
      "Hasta 60% mejora en eficiencia operacional",
      "Reducción de costos de licenciamiento y dependencias",
      "Escalabilidad automática según demanda del negocio",
      "Integración perfecta con ecosistema tecnológico existente",
      "Retorno de inversión visible en 8-12 meses",
      "Ventaja competitiva sostenible mediante diferenciación tecnológica"
    ],
    useCases: [
      {
        title: "Migración a la nube",
        description: "Transformamos sistemas legacy en soluciones cloud-native, escalables, seguras y listas para evolucionar"
      },
      {
        title: "Plataformas E-commerce",
        description: "Soluciones de comercio electrónico con funcionalidades diferenciadas"
      },
      {
        title: "Sistemas de Gestión",
        description: "CRM, HRM y sistemas operacionales diseñados para workflows únicos"
      },
      {
        title: "APIs y Microservicios",
        description: "Arquitecturas modulares que conectan ecosistemas empresariales"
      },
      {
        title: "Dashboards Ejecutivos",
        description: "Visualización de datos críticos para toma de decisiones estratégicas"
      },
      {
        title: "Automatización de Workflows",
        description: "Digitalización de procesos manuales con lógica de negocio compleja"
      }
    ],
    testimonial: {
      text: "Nos decidimos por KPaz por su capacidad de respuesta frente a requerimientos urgentes, la flexibilidad y el entendimiento de los requerimientos. Con ellos logramos ampliar nuestra capacidad de desarrollar nuevos proyectos.",
      author: "Patricio López - Subgerente de Procesos",
      company: "Mutual de Seguridad"
    },
    technologies: [
      "React/Next.js", "Node.js", "Python", "Javascript", "Typescript", ".NET Core", "Java Spring",
      "Spring Boot", "Django", "Swift", "SQL", "Angular", "Vue.js", "MongoDB", "Redis", "AWS/Azure", "Docker/Kubernetes",
      "GraphQL", "REST APIs", "Microservicios", "CI/CD"
    ],
    expertRoles: [
      "Arquitectos de Software", "Front End Developers", "Back End Developers", "DevOps Engineers",
      "UI/UX Designers", "QA Engineers", "Product Managers", "Tech Leads"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para Software Development"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto y organización"
      />
    ),
    faqs: [
      {
        question: "¿Cuánto tiempo toma desarrollar un software personalizado?",
        answer: "Depende de la complejidad, pero proyectos típicos toman 3-8 meses. Trabajamos con metodología ágil para entregar valor incremental cada 2-3 semanas."
      },
      {
        question: "¿Cómo garantizan la calidad y escalabilidad?",
        answer: "Utilizamos arquitecturas probadas, testing automatizado, code reviews y deployment en infraestructura cloud escalable con monitoreo 24/7."
      },
      {
        question: "¿Qué incluye el soporte post-lanzamiento?",
        answer: "Mantenimiento correctivo, evolutivo, monitoreo de performance, backups automatizados y soporte técnico especializado con SLA definido."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default SoftwareDevelopment;
