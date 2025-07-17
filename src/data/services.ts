
import { Code, Bot, Zap, Smartphone, BarChart3, Palette, Shield, Server } from "lucide-react";
import { Service } from "@/types/services";

export const services: Service[] = [
  {
    icon: Code,
    title: "Software Development",
    impact: "Soluciones tecnológicas que escalan con su negocio.",
    description: "Desarrollamos software empresarial personalizado que optimiza procesos críticos y entrega ROI medible desde la implementación.",
    color: "from-[#2e4bce] to-slate-700"
  },
  {
    icon: Bot,
    title: "Hyperautomation",
    impact: "Automatización inteligente para máxima eficiencia.",
    description: "Implementamos estrategias de hiperautomatización que reducen costos operacionales hasta en 40% y eliminan errores manuales.",
    color: "from-[#2e4bce] to-slate-800"
  },
  {
    icon: Zap,
    title: "Low-Code Development",
    impact: "Acelere el time-to-market de sus soluciones.",
    description: "Plataformas low-code empresariales que permiten crear aplicaciones críticas 5x más rápido con total control y seguridad.",
    color: "from-[#2e4bce] to-gray-700"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps Development",
    impact: "Movilidad empresarial segura y escalable.",
    description: "Aplicaciones móviles B2B que mejoran la productividad de equipos y la experiencia de clientes empresariales.",
    color: "from-[#2e4bce] to-slate-600"
  },
  {
    icon: BarChart3,
    title: "AI & Data Science",
    impact: "Inteligencia de negocio basada en datos.",
    description: "Soluciones de IA que transforman datos empresariales en insights accionables para la toma de decisiones estratégicas.",
    color: "from-[#2e4bce] to-gray-800"
  },
  {
    icon: Palette,
    title: "Digital Products Design",
    impact: "Productos digitales que generan valor inmediato.",
    description: "Diseñamos experiencias digitales con enfoque UX/UI para maximizar la adopción y eficiencia en cada interacción.",
    color: "from-[#2e4bce] to-slate-700"
  },
  {
    icon: Shield,
    title: "QA & Testing",
    impact: "Calidad empresarial sin compromisos.",
    description: "Testing exhaustivo que garantiza la continuidad operacional y cumple con estándares de seguridad empresarial.",
    color: "from-[#2e4bce] to-gray-700"
  },
  {
    icon: Server,
    title: "Infraestructura & Ops",
    impact: "Infraestructura empresarial siempre disponible.",
    description: "Arquitecturas cloud escalables y seguras que soportan el crecimiento empresarial con disponibilidad 99.9%.",
    color: "from-[#2e4bce] to-slate-800"
  }
];
