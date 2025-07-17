
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const AIDataScience = () => {
  const service = services.find(s => s.title === "AI & Data Science")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "Data Scientists e ingenieros ML especializados integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: true,
      description: "Desarrollo ágil de modelos de IA y pipelines de datos escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: true,
      description: "Proyectos completos de IA desde el análisis de datos hasta la implementación"
    },
    {
      name: "Applications Managed",
      compatible: true,
      description: "Operación y mantenimiento de modelos de IA y pipelines de datos existentes"
    },
    {
      name: "Business Process Outsourcing",
      compatible: true,
      description: "Procesos de análisis de datos y modelado operados completamente por KPAZ"
    },
    {
      name: "Software Licensing Service",
      compatible: true,
      description: "Licenciamiento de soluciones de IA de Microsoft, AWS, Google Cloud y Kore.AI con implementación especializada"
    }
  ];

  const data = createServicePageData(service, {
    heroDescription: "Inteligencia artificial que convierte datos empresariales en ventajas competitivas medibles. Modelos predictivos y analytics avanzados que impulsan decisiones estratégicas basadas en evidencia, no intuición.",
    whyKeyTitle: "¿Por qué la IA es el diferenciador competitivo del futuro?",
    whyKeyDescription: "Las empresas data-driven superan a sus competidores en 5% de productividad anual. Con IA implementada estratégicamente, transformamos información dispersa en insights accionables para el crecimiento sostenible.",
    includes: [
      "Auditoría de datos y definición de estrategia de IA empresarial",
      "Desarrollo de modelos predictivos y algoritmos de machine learning",
      "Implementación de pipelines de datos automatizados y escalables",
      "Dashboards ejecutivos con visualización avanzada de insights",
      "Modelos de IA explicable y governance de algoritmos",
      "Monitoreo continuo de modelos y optimización de performance"
    ],
    benefits: [
      "Hasta 25% mejora en precisión de forecasting",
      "Reducción de 45% en tiempo de análisis de datos",
      "Detección automática de patrones y anomalías críticas",
      "Optimización de procesos basada en evidencia cuantificable",
      "ROI comprobado en 6-12 meses de implementación",
      "40% aumento en productividad de desarrolladores con asistentes de IA como GitHub Copilot"
    ],
    useCases: [
      {
        title: "Predictive Analytics",
        description: "Modelos de demanda, churn prediction, mantenimiento predictivo y forecasting financiero"
      },
      {
        title: "Optimización de Pricing",
        description: "Algoritmos de pricing dinámico, análisis de elasticidad y maximización de márgenes"
      },
      {
        title: "Customer Intelligence",
        description: "Segmentación avanzada, lifetime value prediction y recomendaciones personalizadas"
      },
      {
        title: "Detección de Fraudes",
        description: "Modelos de anomaly detection, scoring de riesgo y prevención de pérdidas"
      },
      {
        title: "Automatización Inteligente",
        description: "Procesamiento de documentos con NLP, clasificación automática y extracción de insights"
      },
      {
        title: "Supply Chain Optimization",
        description: "Optimización de inventarios, predicción de disrupciones y rutas inteligentes"
      }
    ],
    testimonial: {
      text: "KPaz es un excelente partner de consultoría orientado a la resolución de una serie de problemáticas de negocio, a través de la incorporación de capacidades técnicas expertas en materias de Data Science y Business Intelligence.",
      author: "Jermain Quiroz - Subgerente de Procesos y Tecnología",
      company: "Banco Estado Corredores de Seguros"
    },
    technologies: [
      "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas",
      "Apache Spark", "Databricks", "AWS SageMaker", "Azure ML",
      "Google Cloud AI", "MLflow", "Docker", "Kubernetes", "Apache Airflow"
    ],
    expertRoles: [
      "Data Scientists", "ML Engineers", "Data Engineers",
      "AI Researchers", "Business Intelligence Analysts", "MLOps Engineers",
      "Data Architects", "Solution Architects"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para AI & Data Science"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto de IA"
      />
    ),
    faqs: [
      {
        question: "¿Necesitamos tener big data para implementar IA?",
        answer: "No necesariamente. Trabajamos con datasets pequeños y medianos usando técnicas de feature engineering y transfer learning para generar insights valiosos desde el primer día."
      },
      {
        question: "¿Cómo garantizan la precisión de los modelos?",
        answer: "Implementamos metodologías rigurosas de validación cruzada, A/B testing de modelos y monitoreo continuo con alertas automáticas ante degradación de performance."
      },
      {
        question: "¿Los modelos son explicables para el negocio?",
        answer: "Sí, priorizamos IA explicable (XAI) para que stakeholders entiendan cómo y por qué los modelos toman decisiones, cumpliendo con governance corporativa."
      },
      {
        question: "¿Pueden implementar proyectos rápidos que aprovechen la potencia de ChatGPT?",
        answer: "Absolutamente. Desarrollamos soluciones que integran modelos de lenguaje como ChatGPT de OpenAI, Claude de Anthropic, Llama de Meta, Gemini de Google y PaLM para casos de uso como chatbots empresariales, análisis de documentos, generación de contenido y automatización de tareas de conocimiento, con implementación en 4-8 semanas."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default AIDataScience;
