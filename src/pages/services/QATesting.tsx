
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const QATesting = () => {
  const service = services.find(s => s.title === "QA & Testing")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "QA Engineers y especialistas en testing integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: true,
      description: "Equipos de QA ágiles con metodologías de testing escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos completos de QA desde estrategia hasta implementación"
    },
    {
      name: "Applications Managed",
      compatible: true,
      description: "Testing continuo y mantenimiento de calidad de aplicaciones existentes"
    },
    {
      name: "Business Process Outsourcing",
      compatible: true,
      description: "Procesos de testing operados completamente por KPAZ"
    },
    {
      name: "Software Licensing Service",
      compatible: true,
      description: "Licenciamiento de UiPath Test Suite para automatización de pruebas de software con implementación especializada"
    }
  ];

  const data = createServicePageData(service, {
    heroDescription: "Testing empresarial que garantiza continuidad operacional y seguridad crítica. Metodologías avanzadas de QA que previenen disrupciones costosas y aseguran calidad enterprise en cada release.",
    whyKeyTitle: "¿Por qué la calidad de software es crítica para el negocio?",
    whyKeyDescription: "Un bug en producción cuesta 100x más que detectarlo en desarrollo. Con QA estratégico, eliminamos riesgos operacionales y garantizamos que cada software entregue la confiabilidad que tu negocio necesita.",
    includes: [
      "Estrategia integral de testing y definición de criterios de calidad",
      "Automatización de testing con frameworks empresariales avanzados",
      "Testing de performance, seguridad y compatibilidad multi-plataforma",
      "Pruebas de integración con sistemas críticos y APIs empresariales",
      "Testing de regresión continua y validación de releases",
      "Reportería ejecutiva de calidad y métricas de confiabilidad"
    ],
    benefits: [
      "95% reducción en bugs críticos en producción",
      "60% aceleración en ciclos de release con calidad garantizada",
      "Eliminación de downtime no planificado por defectos",
      "Cumplimiento con estándares de seguridad y compliance",
      "ROI medible en prevención de pérdidas operacionales",
      "80% reducción en tiempo de validación manual de funcionalidades"
    ],
    useCases: [
      {
        title: "Testing de Sistemas Críticos",
        description: "Validación exhaustiva de ERPs, sistemas financieros y aplicaciones mission-critical"
      },
      {
        title: "Automatización de Regresión",
        description: "Suites automatizadas que validan funcionalidad completa en cada deployment"
      },
      {
        title: "Performance Testing",
        description: "Pruebas de carga, stress y escalabilidad para garantizar performance bajo demanda"
      },
      {
        title: "Security Testing",
        description: "Auditorías de seguridad, penetration testing y validación de vulnerabilidades"
      },
      {
        title: "Mobile App Testing",
        description: "Testing multi-dispositivo con validación de compatibilidad y performance móvil"
      },
      {
        title: "API Testing",
        description: "Validación de integraciones, contratos de API y confiabilidad de microservicios"
      }
    ],
    testimonial: {
      text: "El QA automatizado de KPAZ redujo nuestros incidentes de producción en 90% y nos permitió hacer releases diarios con total confianza.",
      author: "Líder Aseguramiento Calidad de Software",
      company: "Banco en Chile"
    },
    technologies: [
      "Selenium", "Cypress", "Postman", "REST Assured", "SoapUI",
      "Jenkins", "GitLab CI", "Azure DevOps", "TestRail", "Jira",
      "Burp Suite", "OWASP ZAP", "Docker", "Kubernetes", "UiPath Test Suite"
    ],
    expertRoles: [
      "QA Engineers", "Test Automation Engineers", "Performance Testing Specialists",
      "Security Testing Experts", "Mobile QA Engineers", "API Testing Specialists",
      "DevOps QA Engineers", "Test Architects"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para QA & Testing"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto de QA"
      />
    ),
    faqs: [
      {
        question: "¿Cuánto tiempo toma implementar testing automatizado?",
        answer: "Proyectos típicos toman 6-12 semanas. Comenzamos con casos críticos para generar valor inmediato mientras construimos la suite completa de automatización."
      },
      {
        question: "¿Pueden integrarse con nuestros pipelines CI/CD existentes?",
        answer: "Sí, nos integramos con cualquier herramienta de CI/CD. Diseñamos automatización que se ejecuta seamlessly en su pipeline actual sin disrupciones."
      },
      {
        question: "¿Qué nivel de cobertura de testing recomiendan?",
        answer: "Recomendamos 80-90% de cobertura automatizada para funcionalidad crítica, complementada con testing manual estratégico para casos edge y experiencia de usuario."
      },
      {
        question: "¿Pueden automatizar pruebas de aplicaciones legacy sin API disponible?",
        answer: "Absolutamente. Utilizamos herramientas como UiPath Test Suite y Selenium para automatizar testing a través de la interfaz de usuario, incluso en aplicaciones legacy sin APIs modernas. Esto permite validar funcionalidad end-to-end manteniendo la misma experiencia del usuario final."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default QATesting;
