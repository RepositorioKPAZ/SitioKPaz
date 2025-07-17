
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const MobileAppsDevelopment = () => {
  const service = services.find(s => s.title === "Mobile Apps Development")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "Desarrolladores móviles especializados integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: true,
      description: "Desarrollo ágil de apps móviles con equipos escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos completos de apps móviles desde el concepto hasta la publicación"
    },
    {
      name: "Applications Managed",
      compatible: true,
      description: "Mantenimiento y evolución de aplicaciones móviles existentes"
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
    heroDescription: "Apps móviles empresariales que transforman la productividad de equipos remotos y mejoran la experiencia de los clientes. Soluciones nativas seguras que se integran perfectamente con tu ecosistema corporativo.",
    whyKeyTitle: "¿Por qué la movilidad empresarial es crítica hoy?",
    whyKeyDescription: "Los equipos móviles son 23% más productivos. Con apps empresariales diseñadas específicamente para tus procesos, eliminamos fricciones operacionales y habilitamos decisiones en tiempo real.",
    includes: [
      "Análisis de user journey y definición de arquitectura móvil",
      "Desarrollo nativo iOS/Android con estándares empresariales",
      "Integración con APIs corporativas y sistemas legacy",
      "Implementación de seguridad avanzada y gestión de dispositivos",
      "Testing exhaustivo en múltiples dispositivos y escenarios",
      "Distribución empresarial y soporte técnico especializado"
    ],
    benefits: [
      "40% mejora en productividad de equipos de campo",
      "Acceso offline a información crítica del negocio",
      "Sincronización automática con sistemas centrales",
      "Reducción de 60% en tiempo de captura de datos",
      "ROI visible en 4-8 meses de implementación",
      "Tu negocio en el bolsillo de tus clientes 24/7"
    ],
    useCases: [
      {
        title: "Fuerza de Ventas Móvil",
        description: "Apps de CRM móvil con catálogos offline, procesamiento de órdenes y analytics de clientes"
      },
      {
        title: "Gestión de Campo",
        description: "Aplicaciones para técnicos, inspecciones, mantenimiento y reportes operacionales en tiempo real"
      },
      {
        title: "Logística y Distribución",
        description: "Apps de tracking, gestión de inventarios, rutas optimizadas y confirmación de entregas"
      },
      {
        title: "Control de Calidad",
        description: "Aplicaciones de auditoría, checklists digitales y reportes fotográficos georreferenciados"
      },
      {
        title: "Recursos Humanos",
        description: "Apps de gestión de tiempo, evaluaciones de desempeño y comunicación interna"
      },
      {
        title: "Portales de Clientes B2B",
        description: "Aplicaciones para consulta de estados de cuenta, órdenes y soporte técnico especializado"
      }
    ],
    testimonial: {
      text: "Los resultados obtenidos fueron positivos, pues logramos los objetivos en múltiples procesos de negocios. Son responsables y cumplen sus compromisos.",
      author: "Álvaro Fuentes - Director de Tecnologías de Información",
      company: "Universidad Autónoma de Chile"
    },
    technologies: [
      "React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)",
      "Firebase", "AWS Mobile", "Azure Mobile", "GraphQL",
      "SQLite", "Push Notifications", "Biometric Auth",
      "Offline Sync", "GPS/Location Services", "Camera/Scanner"
    ],
    expertRoles: [
      "Mobile Developers", "UI/UX Mobile Designers", "Backend Engineers",
      "DevOps Mobile", "QA Mobile Testing", "Security Specialists",
      "Product Managers", "Solution Architects"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para Mobile Apps Development"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto móvil"
      />
    ),
    faqs: [
      {
        question: "¿Desarrollan apps nativas o híbridas?",
        answer: "Recomendamos según el caso: nativas para máximo performance y funcionalidades específicas, híbridas para time-to-market acelerado manteniendo calidad empresarial."
      },
      {
        question: "¿Cómo manejan la seguridad en apps empresariales?",
        answer: "Implementamos autenticación multifactor, cifrado end-to-end, gestión de dispositivos (MDM) y cumplimiento con estándares de seguridad corporativa."
      },
      {
        question: "¿Las apps funcionan offline?",
        answer: "Sí, diseñamos arquitecturas de sincronización inteligente que permiten operación offline completa con sincronización automática al recuperar conectividad."
      },
      {
        question: "¿Cuánto tiempo toma desarrollar una app móvil empresarial?",
        answer: "El tiempo varía según complejidad: apps básicas de 2-3 meses, apps complejas con integraciones de 4-6 meses. Incluye diseño, desarrollo, testing y distribución empresarial."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default MobileAppsDevelopment;
