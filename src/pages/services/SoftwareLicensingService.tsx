import { CollaborationServicePage } from "@/components/collaboration/CollaborationServicePage";
import { Award } from "lucide-react";
import { CollaborationServiceData } from "@/types/collaborationServices";

const SoftwareLicensingService = () => {
  const serviceData: CollaborationServiceData = {
    hero: {
      title: "Software Licensing Service",
      subtitle: "Tecnología líder, con un partner que te acompaña.",
      description: "No solo entregamos licencias: te ayudamos a elegir la tecnología adecuada, a implementarla bien y a asegurar su adopción y retorno.",
      icon: Award,
      gradient: "from-blue-500 to-indigo-600"
    },
    whatIs: {
      title: "¿Qué es Software Licensing Service?",
      description: "Somos tu partner estratégico en tecnología. No solo te vendemos licencias, sino que te acompañamos en todo el proceso: desde la selección de la tecnología más adecuada para tu negocio, hasta su implementación exitosa y adopción completa por parte de tu equipo.",
      features: [
        "Consultoría especializada en selección de tecnología",
        "Licenciamiento de software líder mundial",
        "Implementación profesional y personalizada",
        "Capacitación y adopción del usuario",
        "Soporte técnico especializado",
        "Optimización continua y ROI tracking"
      ]
    },
    benefits: [
      {
        title: "Decisión Informada",
        description: "Te ayudamos a elegir la tecnología perfecta para tus necesidades específicas",
        icon: "trending"
      },
      {
        title: "Implementación Exitosa",
        description: "Garantizamos una implementación profesional que maximice el valor desde el día uno",
        icon: "shield"
      },
      {
        title: "Adopción Completa",
        description: "Aseguramos que tu equipo adopte completamente la nueva tecnología",
        icon: "users"
      },
      {
        title: "ROI Garantizado",
        description: "Medimos y optimizamos continuamente para asegurar el retorno de inversión",
        icon: "zap"
      },
      {
        title: "Precios Preferenciales",
        description: "Acceso a descuentos especiales como partners oficiales de las principales plataformas",
        icon: "trending"
      },
      {
        title: "Soporte Integral 24/7",
        description: "Soporte técnico especializado en español disponible las 24 horas, todos los días",
        icon: "shield"
      }
    ],
    whyChoose: {
      title: "¿Por qué elegir nuestro Licensing Service?",
      reasons: [
        "Partners oficiales de las principales plataformas tecnológicas mundiales",
        "Más de 500 implementaciones exitosas en Latinoamérica",
        "Consultores certificados en cada tecnología que ofrecemos",
        "Proceso probado de adopción que garantiza el éxito",
        "Soporte técnico en español las 24/7",
        "Precios preferenciales por volumen y alianzas estratégicas"
      ]
    },
    whenToUse: {
      title: "¿Cuándo necesitas nuestro Licensing Service?",
      scenarios: [
        {
          title: "Modernización Tecnológica",
          description: "Cuando necesitas modernizar tu stack tecnológico pero no sabes por dónde empezar."
        },
        {
          title: "Crecimiento Acelerado",
          description: "Para empresas en crecimiento que necesitan herramientas que escalen con su negocio."
        },
        {
          title: "Optimización de Procesos",
          description: "Cuando buscas tecnologías que automaticen y optimicen tus procesos de negocio."
        },
        {
          title: "Transformación Digital",
          description: "Para organizaciones que necesitan acelerar su transformación digital con las herramientas correctas."
        }
      ]
    },
    includes: [
      "Consultoría pre-venta especializada",
      "Assessment de necesidades tecnológicas",
      "Licencias de software premium",
      "Implementación profesional",
      "Migración de datos y sistemas",
      "Capacitación técnica y funcional",
      "Change management y adopción",
      "Soporte técnico especializado",
      "Optimización continua",
      "Métricas de ROI y adoption"
    ],
    technologies: [
      { name: "Microsoft 365", category: "Productividad" },
      { name: "Power Platform", category: "Low-Code" },
      { name: "Salesforce", category: "CRM" },
      { name: "OutSystems", category: "Low-Code" },
      { name: "UiPath", category: "RPA" },
      { name: "Azure", category: "Cloud" },
      { name: "AWS", category: "Cloud" },
      { name: "Google Workspace", category: "Productividad" },
      { name: "Tableau", category: "Analytics" },
      { name: "Power BI", category: "Analytics" },
      { name: "ServiceNow", category: "ITSM" },
      { name: "Atlassian", category: "Colaboración" },
      { name: "Genexus", category: "Low-Code" },
      { name: "Kore.AI", category: "IA Conversacional" },
      { name: "Rocketbot", category: "RPA" }
    ],
    useCases: [
      {
        title: "Transformación Digital Bancaria",
        description: "Implementación completa de Microsoft 365 y Power Platform en un banco regional, incluyendo migración de 2000+ usuarios.",
        results: ["100% adopción en 3 meses", "40% mejora en productividad", "ROI positivo en 6 meses"]
      },
      {
        title: "Automatización Retail",
        description: "Implementación de UiPath RPA en cadena retail para automatizar procesos de inventario y facturación.",
        results: ["80% reducción en tiempo de proceso", "99.9% precisión en datos", "12 meses ROI payback"]
      },
      {
        title: "Modernización Empresarial",
        description: "Migración completa a Salesforce CRM y Google Workspace para empresa manufacturera de 500+ empleados.",
        results: ["60% mejora en gestión de clientes", "35% reducción en costos operativos", "ROI alcanzado en 8 meses"]
      },
      {
        title: "Desarrollo Ágil con Low-Code",
        description: "Implementación de OutSystems para acelerar el desarrollo de aplicaciones empresariales en compañía de seguros.",
        results: ["70% reducción en tiempo de desarrollo", "90% menos bugs en producción", "ROI positivo en 4 meses"]
      }
    ],
    experts: [
      "Technology Consultants",
      "Solution Architects",
      "Implementation Specialists",
      "Change Management Experts",
      "Training Specialists",
      "Technical Support Engineers",
      "Business Analysts",
      "ROI Optimization Specialists"
    ],
    testimonial: {
      quote: "KPaz no solo nos vendió las licencias, nos acompañó en todo el proceso. La adopción fue increíble y el ROI se vio desde el primer mes.",
      author: "CIO",
      position: "CIO",
      company: "Sector Bancario"
    },
    faqs: [
      {
        question: "¿Qué incluye el proceso de consultoría?",
        answer: "Incluye assessment de necesidades, análisis de gap tecnológico, recomendaciones específicas y roadmap de implementación personalizado."
      },
      {
        question: "¿Cómo garantizan la adopción exitosa?",
        answer: "Utilizamos metodologías probadas de change management, capacitación personalizada y seguimiento continuo de métricas de adopción."
      },
      {
        question: "¿Ofrecen descuentos en las licencias?",
        answer: "Sí, como partners oficiales tenemos acceso a precios preferenciales que trasladamos a nuestros clientes, especialmente en volúmenes grandes."
      },
      {
        question: "¿Qué pasa si la tecnología no funciona como esperábamos?",
        answer: "Tenemos un proceso de optimización continua y, en casos excepcionales, ayudamos con la migración a una alternativa más adecuada."
      }
    ]
  };

  return <CollaborationServicePage data={serviceData} showExperts={false} />;
};

export default SoftwareLicensingService;
