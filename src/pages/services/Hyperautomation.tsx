
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const Hyperautomation = () => {
  const service = services.find(s => s.title === "Hyperautomation")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "Especialistas en RPA y automatización integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: true,
      description: "Desarrollo ágil de automatizaciones con equipos escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos de automatización completos desde el análisis hasta la implementación"
    },
    {
      name: "Applications Managed",
      compatible: true,
      description: "Gestión y mantenimiento de robots y automatizaciones existentes"
    },
    {
      name: "Business Process Outsourcing",
      compatible: true,
      description: "Procesos automatizados operados completamente por KPAZ"
    },
    {
      name: "Software Licensing Service",
      compatible: true,
      description: "Licenciamiento de UiPath, Rocketbot, Power Automate y Kore.AI con implementación especializada"
    }
  ];

  const data = createServicePageData(service, {
    heroDescription: "Automatización inteligente que combina RPA, IA, analytics y agentes autónomos para crear procesos escalables. Robots digitales y asistentes de IA que operan 24/7, liberando a tu equipo para enfocarse en decisiones estratégicas y tareas de alto valor.",
    whyKeyTitle: "¿Por qué la hiperautomatización es el futuro operacional?",
    whyKeyDescription: "Las empresas pierden miles de horas al año en tareas repetitivas. Con hiperautomatización, transformamos ese tiempo en eficiencia operativa medible y escalable.",
    includes: [
      "Diagnóstico de procesos automatizables con análisis ROI",
      "Desarrollo de robots RPA con inteligencia artificial integrada",
      "Implementación de workflows inteligentes y orquestación",
      "Monitoreo en tiempo real y analytics de performance",
      "Evolución continua con machine learning y optimización",
      "Soporte 24/7 y mantenimiento proactivo de automatizaciones"
    ],
    benefits: [
      "Hasta 80% reducción en tiempo de tareas manuales",
      "Eliminación del 95% de errores operacionales",
      "Retorno de inversión garantizado en 6 meses",
      "Disponibilidad 24/7 sin incremento de costos",
      "Escalabilidad inmediata según demanda",
      "Reducción de costos operacionales hasta 60%"
    ],
    useCases: [
      {
        title: "RPA en Finanzas",
        description: "Conciliación bancaria, procesamiento de facturas y reportes financieros automatizados"
      },
      {
        title: "RPA en Retail",
        description: "Carga de órdenes de compra, gestión de inventarios y pricing dinámico"
      },
      {
        title: "RPA en RRHH",
        description: "Onboarding automatizado, procesamiento de nóminas y gestión de vacaciones"
      },
      {
        title: "Procesamiento de Documentos",
        description: "Extracción de datos con OCR e IA para documentos estructurados y no estructurados"
      },
      {
        title: "Atención al Cliente",
        description: "Chatbots inteligentes y routing automático de tickets con resolución predictiva"
      },
      {
        title: "Compliance y Auditoría",
        description: "Monitoreo automático de cumplimiento y generación de reportes regulatorios"
      }
    ],
    testimonial: {
      text: "Los elegimos por su experiencia y contacto con UiPath, pues para nosotros es fundamental la relación cliente-proveedor-vendor. Recomendaría a KPaz porque cumplen con los objetivos y los tiempos acordados.",
      author: "Gerardo Álvarez C. - Líder Soporte Aplicaciones",
      company: "AES Andes"
    },
    technologies: [
      "UiPath", "Power Automate", "Automation Anywhere", "Blue Prism",
      "Python", "Computer Vision", "OCR/ICR", "Machine Learning",
      "Process Mining", "Task Mining", "APIs", "Cognitive Services"
    ],
    expertRoles: [
      "RPA Developers", "Process Analysts", "AI/ML Engineers",
      "Solution Architects", "Business Analysts", "QA Automation",
      "DevOps Engineers", "Change Managers"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para Hyperautomation"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto de automatización"
      />
    ),
    faqs: [
      {
        question: "¿Qué procesos son candidatos ideales para automatizar?",
        answer: "Procesos repetitivos, basados en reglas, con datos estructurados y alto volumen. Evaluamos ROI considerando frecuencia, complejidad e impacto del negocio."
      },
      {
        question: "¿Cómo manejan la seguridad en automatización?",
        answer: "Implementamos credenciales cifradas, accesos controlados por roles, auditoría completa de transacciones y cumplimiento con estándares de seguridad corporativa."
      },
      {
        question: "¿Qué pasa si cambian los sistemas o procesos?",
        answer: "Diseñamos automatizaciones resilientes con mantenimiento proactivo. Incluimos soporte para adaptaciones y evoluciones del negocio."
      },
      {
        question: "¿Cuál es la diferencia entre RPA e Hiperautomatización?",
        answer: "RPA automatiza tareas específicas y repetitivas, mientras que hiperautomatización combina RPA con IA, machine learning, analytics y orquestación para crear ecosistemas de automatización inteligentes y adaptables que evolucionan continuamente."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default Hyperautomation;
