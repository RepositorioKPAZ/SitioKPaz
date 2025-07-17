
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { CollaborationCompatibility } from "@/components/service/CollaborationCompatibility";

const InfraestructuraOps = () => {
  const service = services.find(s => s.title === "Infraestructura & Ops")!;

  const collaborationModels = [
    {
      name: "Talent as a Service",
      compatible: true,
      description: "DevOps Engineers y especialistas en infraestructura integrados a tu equipo"
    },
    {
      name: "Software Factory OnDemand",
      compatible: false,
      description: "Equipos de infraestructura ágiles para proyectos cloud escalables"
    },
    {
      name: "Turnkey Projects",
      compatible: false,
      description: "Proyectos completos de infraestructura desde migración hasta optimización"
    },
    {
      name: "Applications Managed",
      compatible: true,
      description: "Operación y mantenimiento de infraestructura y aplicaciones 24/7"
    },
    {
      name: "Business Process Outsourcing",
      compatible: false,
      description: "Operación completa de infraestructura empresarial por KPAZ"
    },
    {
      name: "Software Licensing Service",
      compatible: false,
      description: "Centrado en licenciamiento de software"
    }
  ];

  const data = createServicePageData(service, {
    heroDescription: "Infraestructura cloud empresarial que escala automáticamente con tu crecimiento. Arquitecturas resilientes con 99.9% uptime que soportan operaciones críticas mientras optimizan costos y performance.",
    whyKeyTitle: "¿Por qué la infraestructura moderna es ventaja competitiva?",
    whyKeyDescription: "Downtime cuesta $5,600 por minuto en promedio. Con infraestructura cloud-native y DevOps maduro, garantizamos disponibilidad empresarial mientras reduces costos operacionales hasta 40%.",
    includes: [
      "Diseño de arquitectura cloud escalable y assessment de infraestructura actual",
      "Migración a cloud con zero-downtime y optimización de recursos",
      "Implementación de CI/CD enterprise y automatización de deployments",
      "Monitoreo 24/7, alertas inteligentes y incident response automatizado",
      "Backup automatizado, disaster recovery y business continuity planning",
      "Optimización continua de costos y performance tuning especializado"
    ],
    benefits: [
      "99.9% disponibilidad garantizada con SLA empresarial",
      "40% reducción en costos de infraestructura optimizada",
      "Escalabilidad automática sin intervención manual",
      "Deployment 10x más rápido con CI/CD automatizado",
      "Recovery time bajo 15 minutos ante incidents",
      "Reducción del 70% en tiempo de provisioning de recursos"
    ],
    useCases: [
      {
        title: "Cloud Migration",
        description: "Migración de sistemas legacy a cloud con arquitecturas modernas y cero downtime"
      },
      {
        title: "DevOps Enterprise",
        description: "Pipelines CI/CD automatizados, infrastructure as code y deployment strategies avanzadas"
      },
      {
        title: "Microservicios Architecture",
        description: "Containerización con Docker/Kubernetes y orquestación de servicios distribuidos"
      },
      {
        title: "Disaster Recovery",
        description: "Estrategias de backup, replicación multi-región y business continuity planning"
      },
      {
        title: "Performance Optimization",
        description: "Auto-scaling, load balancing y optimización de databases para alta concurrencia"
      },
      {
        title: "Security & Compliance",
        description: "Implementación de security frameworks, encryption y compliance con normativas"
      }
    ],
    testimonial: {
      text: "El servicio de administración de infraestructura de KPaz nos dio 99.95% uptime en Black Friday con 300% más tráfico, mientras redujimos costos en 35%.",
      author: "Director de Infraestructura",
      company: "Empresa de E-commerce"
    },
    technologies: [
      "AWS", "Azure", "Google Cloud", "Terraform", 
      "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions",
      "ELK Stack", "DataDog",
      "PostgreSQL", "MongoDB", "Nginx"
    ],
    expertRoles: [
      "Cloud Architects", "DevOps Engineers", "SRE Specialists",
      "Infrastructure Engineers", "Security Engineers", "Database Administrators",
      "Monitoring Specialists", "Performance Engineers"
    ],
    collaborationSection: (
      <CollaborationCompatibility 
        models={collaborationModels}
        title="Modelos de colaboración para Infraestructura & Ops"
        subtitle="Elige la forma de trabajar que mejor se adapte a tu proyecto de infraestructura"
      />
    ),
    faqs: [
      {
        question: "¿Cuánto tiempo toma una migración a cloud completa?",
        answer: "Migraciones típicas toman 3-8 meses dependiendo de complejidad. Utilizamos estrategias de migración incremental para minimizar riesgos y downtime."
      },
      {
        question: "¿Cómo garantizan la seguridad en cloud?",
        answer: "Implementamos security by design: encryption at rest/transit, network segmentation, IAM granular, vulnerability scanning y compliance con frameworks estándar."
      },
      {
        question: "¿Qué perfiles de DevOps Engineers están disponibles como TaaS?",
        answer: "Ofrecemos Senior DevOps Engineers con experiencia en AWS/Azure/GCP, especialistas en Kubernetes, expertos en CI/CD, Site Reliability Engineers y Cloud Security Engineers. Todos con certificaciones vigentes y experiencia en entornos enterprise."
      },
      {
        question: "¿Cómo se integran los especialistas TaaS con nuestro equipo interno?",
        answer: "Nuestros especialistas se integran seamlessly con sus metodologías existentes. Participan en standups, utilizan sus herramientas de comunicación, y siguen sus procesos de governance mientras aportan expertise técnico especializado en infraestructura cloud y DevOps."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default InfraestructuraOps;
