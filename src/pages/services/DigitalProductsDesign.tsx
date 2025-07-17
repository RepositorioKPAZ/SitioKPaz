
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const DigitalProductsDesign = () => {
  const service = services.find(s => s.title === "Digital Products Design")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "Diseñadores UX/UI especializados integrados a tu equipo de producto"
    },
    {
      name: "Software Factory OnDemand",
      compatible: false,
      description: "Equipos de diseño ágiles para productos digitales escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos completos de diseño desde research hasta implementación"
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
    heroDescription: "Diseño de productos digitales que maximizan adopción y eficiencia operacional. Experiencias UX/UI centradas en el usuario que transforman procesos complejos en interacciones intuitivas y resultados medibles.",
    whyKeyTitle: "¿Por qué el diseño de productos determina el éxito empresarial?",
    whyKeyDescription: "El 88% de usuarios no vuelve a usar una aplicación mal diseñada. Con design thinking aplicado a productos B2B, garantizamos adopción masiva y eficiencia operacional desde el primer día.",
    includes: [
      "Research de usuarios y análisis de user journey empresarial",
      "Arquitectura de información y wireframing de productos complejos",
      "Diseño de interfaces UI/UX optimizadas para productividad",
      "Prototipado interactivo y testing con usuarios reales",
      "Design system escalable y guías de implementación",
      "Optimización continua basada en analytics y feedback"
    ],
    benefits: [
      "70% mejora en tasas de adopción de aplicaciones",
      "Reducción de 50% en tiempo de training de usuarios",
      "Disminución de 60% en tickets de soporte técnico",
      "Incremento de 35% en productividad operacional",
      "ROI medible en satisfacción y eficiencia de usuarios",
      "Reducción de 40% en tiempo de onboarding de nuevos usuarios"
    ],
    useCases: [
      {
        title: "Dashboards Ejecutivos",
        description: "Interfaces de BI con visualización intuitiva para toma de decisiones estratégicas rápidas"
      },
      {
        title: "Aplicaciones Empresariales",
        description: "Rediseño de ERPs, CRMs y sistemas legacy para maximizar productividad del usuario"
      },
      {
        title: "Portales de Autoservicio",
        description: "Interfaces de cliente que reducen carga operacional y mejoran experiencia B2B"
      },
      {
        title: "Aplicaciones Móviles B2B",
        description: "Diseño de apps empresariales optimizadas para equipos de campo y operaciones remotas"
      },
      {
        title: "Plataformas de E-learning",
        description: "Experiencias educativas corporativas que maximizan retención y engagement"
      },
      {
        title: "Herramientas de Colaboración",
        description: "Interfaces de comunicación interna que potencian la productividad de equipos distribuidos"
      }
    ],
    testimonial: {
      text: "El rediseño de nuestro sistema de gestión comercial por KPAZ aumentó la productividad del equipo en 45% y redujo errores operacionales en 80%.",
      author: "CCO",
      company: "Empresa Manufacturera"
    },
    technologies: [
      "Figma", "Adobe Creative Suite", "Sketch", "InVision",
      "Miro", "FigJam", "Google Analytics", "UserTesting",
      "HTML/CSS", "React", "Design Tokens", "Storybook"
    ],
    expertRoles: [
      "UX/UI Designers", "Product Designers", "User Researchers",
      "Information Architects", "Interaction Designers", "Visual Designers",
      "Usability Testing Specialists", "Design System Architects"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para Digital Products Design"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto de diseño"
      />
    ),
    faqs: [
      {
        question: "¿Cómo miden el éxito del diseño en productos B2B?",
        answer: "Establecemos KPIs específicos: tasas de adopción, tiempo de completar tareas, reducción de errores, satisfacción del usuario y impacto en productividad operacional."
      },
      {
        question: "¿Trabajan con sistemas legacy existentes?",
        answer: "Sí, especializamos en rediseñar interfaces de sistemas legacy manteniendo funcionalidad crítica mientras mejoramos dramáticamente la experiencia de usuario."
      },
      {
        question: "¿Incluyen testing con usuarios reales?",
        answer: "Absolutamente. Realizamos testing de usabilidad con usuarios finales en cada fase del proyecto para validar decisiones de diseño antes de implementación."
      },
      {
        question: "¿Pueden diseñar productos que funcionen tanto en web como en móvil?",
        answer: "Sí, creamos design systems responsivos y componentes adaptativos que garantizan experiencias consistentes y optimizadas tanto en web como en dispositivos móviles, manteniendo la identidad visual y funcionalidad en todas las plataformas."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default DigitalProductsDesign;
