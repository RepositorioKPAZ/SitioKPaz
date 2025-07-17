
import { services } from "@/data/services";
import { BaseServicePage } from "@/components/service/BaseServicePage";
import { createServicePageData } from "@/utils/serviceDataHelpers";
import { Users } from "lucide-react";

const ITTalentService = () => {
  const service = {
    title: "IT Talent as a Service",
    icon: Users,
    impact: "Equipos especializados que se integran a tu operación para potenciar capacidades específicas",
    description: "Talento IT senior dedicado que se integra a su equipo para ejecutar proyectos estratégicos sin fricciones de contratación.",
    color: "from-[#2e4bce] to-gray-700"
  };

  const data = createServicePageData(service, {
    heroDescription: "Profesionales validados (Staff Augmentation) o equipos completos (Dedicated Teams). Tú eliges el modelo, nosotros garantizamos resultados.",
    whyKeyTitle: "¿Por qué elegir nuestro talento IT?",
    whyKeyDescription: "Contamos con profesionales especializados y equipos completos que se adaptan a tus necesidades específicas, garantizando la calidad y continuidad de tus proyectos tecnológicos.",
    includes: [
      "Selección y validación de talento",
      "Integración con tu equipo actual",
      "Gestión de desempeño y productividad",
      "Soporte técnico especializado",
      "Metodologías ágiles de trabajo",
      "Reportes de avance y métricas"
    ],
    benefits: [
      "Staff Augmentation - Profesionales especializados que se integran a tu equipo",
      "Dedicated Teams - Equipos completos dedicados exclusivamente a tu proyecto",
      "Flexibilidad Total - Escala tu equipo según las necesidades del proyecto",
      "Talento Validado - Profesionales con experiencia comprobada y certificaciones"
    ],
    useCases: [
      {
        title: "Desarrollo de Software",
        description: "Equipos especializados en diferentes tecnologías para acelerar tus proyectos de desarrollo."
      },
      {
        title: "Transformación Digital",
        description: "Profesionales con experiencia en migración de sistemas legacy a tecnologías modernas."
      },
      {
        title: "Proyectos Específicos",
        description: "Talento especializado para proyectos con requerimientos técnicos muy específicos."
      }
    ],
    testimonial: {
      text: "El equipo de KPaz se integró perfectamente con nuestro equipo interno. Su experiencia técnica y profesionalismo aceleraron significativamente nuestro proyecto.",
      author: "CTO",
      company: "Empresa de Tecnología"
    },
    technologies: [
      "React", "Angular", "Vue.js", "Node.js", ".NET", "Java", "Python", "AWS", "Azure", "DevOps"
    ],
    expertRoles: [
      "Frontend Developers",
      "Backend Developers",
      "Full Stack Developers",
      "DevOps Engineers",
      "Cloud Architects",
      "QA Engineers",
      "UI/UX Designers",
      "Product Managers"
    ],
    faqs: [
      {
        question: "¿Cómo seleccionan al talento?",
        answer: "Realizamos un proceso de selección riguroso que incluye evaluaciones técnicas, entrevistas comportamentales y validación de experiencia."
      },
      {
        question: "¿Cuál es el tiempo mínimo de contratación?",
        answer: "El tiempo mínimo recomendado es de 3 meses para proyectos de Staff Augmentation y 6 meses para Dedicated Teams."
      },
      {
        question: "¿El talento trabaja en nuestro horario?",
        answer: "Sí, nuestros profesionales se adaptan a tu zona horaria y metodologías de trabajo para una integración perfecta."
      }
    ]
  });

  return <BaseServicePage data={data} />;
};

export default ITTalentService;
