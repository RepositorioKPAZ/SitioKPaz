
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const LowCodeDevelopment = () => {
  const service = services.find(s => s.title === "Low-Code Development")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "Desarrolladores low-code especializados integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: true,
      description: "Desarrollo acelerado de aplicaciones con equipos low-code escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos completos de aplicaciones low-code desde el diseño hasta la implementación"
    },
    {
      name: "Applications Managed",
      compatible: true,
      description: "Mantenimiento y evolución de aplicaciones low-code existentes"
    },
    {
      name: "Business Process Outsourcing",
      compatible: false,
      description: "Orientado a procesos operativos específicos"
    },
    {
      name: "Software Licensing Service",
      compatible: true,
      description: "Licenciamiento de OutSystems, Microsoft Power Platform y Salesforce con implementación especializada"
    }
  ];

  const data = createServicePageData(service, {
    heroDescription: "Plataformas low-code empresariales que aceleran el desarrollo 5x más rápido. Creamos aplicaciones críticas con total control, seguridad y escalabilidad empresarial.",
    whyKeyTitle: "¿Por qué Low-Code es la ventaja competitiva del presente?",
    whyKeyDescription: "El time-to-market determina el éxito. Con low-code, transformamos ideas en aplicaciones funcionales en semanas, no meses, manteniendo estándares empresariales.",
    includes: [
      "Análisis de requerimientos y selección de plataforma óptima",
      "Desarrollo acelerado con componentes reutilizables",
      "Integración con sistemas legacy y APIs empresariales",
      "Testing automatizado y deployment en entornos corporativos",
      "Capacitación de equipos internos y transferencia de conocimiento",
      "Soporte técnico especializado y mantenimiento continuo"
    ],
    benefits: [
      "5x más rápido que desarrollo tradicional",
      "70% reducción en costos de desarrollo",
      "Flexibilidad para cambios y evoluciones rápidas",
      "Menor dependencia de recursos técnicos especializados",
      "Retorno de inversión en 3-6 meses",
      "Democratización del desarrollo para usuarios de negocio"
    ],
    useCases: [
      {
        title: "Aplicaciones de Gestión",
        description: "CRM, sistemas de tickets, gestión de inventarios y workflows operacionales"
      },
      {
        title: "Portales Corporativos",
        description: "Intranets, portales de empleados y plataformas de colaboración empresarial"
      },
      {
        title: "Apps de Productividad",
        description: "Gestión de proyectos, tracking de KPIs y dashboards operacionales"
      },
      {
        title: "Automatización de Procesos",
        description: "Workflows de aprobación, formularios dinámicos y procesos documentales"
      },
      {
        title: "Aplicaciones Móviles",
        description: "Apps nativas para equipos de campo, ventas y operaciones remotas"
      },
      {
        title: "Integraciones Empresariales",
        description: "Conectores entre sistemas, sincronización de datos y APIs empresariales"
      }
    ],
    testimonial: {
      text: "En KPaz veo un Partner con una gran capacidad técnica, de los más destacados en Latinoamérica, por la diversidad de casos de uso que ha implementado en seguros, consumo masivo y aplicaciones B2B, muchos de Mission Critical.",
      author: "Humberto Vieites - Lead Partner Alliances Manager LATAM",
      company: "OutSystems"
    },
    technologies: [
      "Microsoft Power Platform", "Salesforce", "OutSystems",
      "Make", "APIs REST/GraphQL", "Database Connectors", "Cloud Integrations"
    ],
    expertRoles: [
      "Low-Code Developers", "Business Analysts", "UX/UI Designers",
      "Integration Specialists", "Solution Architects", "QA Engineers",
      "Change Managers", "Training Specialists"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para Low-Code Development"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto low-code"
      />
    ),
    faqs: [
      {
        question: "¿Low-code es seguro para aplicaciones empresariales críticas?",
        answer: "Sí, las plataformas enterprise ofrecen seguridad, compliance y governance robustos. Evaluamos cada caso para garantizar que cumple estándares corporativos."
      },
      {
        question: "¿Puedo migrar de low-code a código tradicional después?",
        answer: "Dependiendo de la plataforma, es posible. Diseñamos arquitecturas considerando evolución futura y proporcionamos estrategias de migración si es necesario."
      },
      {
        question: "¿Qué tan escalables son las aplicaciones low-code?",
        answer: "Las plataformas empresariales soportan miles de usuarios concurrentes. Diseñamos con escalabilidad en mente desde el día uno."
      },
      {
        question: "¿Cómo logran las plataformas low-code acelerar el desarrollo 5x?",
        answer: "Combinan componentes pre-construidos, plantillas reutilizables, interfaces visuales drag-and-drop, automatización de tareas repetitivas y deployment automático. Esto elimina hasta 80% del código manual tradicional."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default LowCodeDevelopment;
