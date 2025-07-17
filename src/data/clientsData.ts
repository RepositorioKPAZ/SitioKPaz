
import { 
  Building2, 
  ShieldCheck, 
  ShoppingCart, 
  Zap, 
  GraduationCap, 
  Fuel, 
  MapPin 
} from "lucide-react";

export const successCases = [
  {
    client: "Retail Multinacional",
    challenge: "Automatizar procesos críticos con alto volumen operativo.",
    solution: "Desarrollo de bots RPA en UiPath para procesos logísticos clave.",
    results: [
      "85% de reducción en tiempos de ejecución",
      "ROI alcanzado en menos de 6 meses",
      "0 errores operativos en procesos automatizados"
    ],
    testimonial: "KPaz entendió nuestro ritmo y desafío desde el inicio. Su experiencia en automatización fue clave para lograr resultados en tiempo récord.",
    author: "Gerente de Operaciones",
    position: "Líder del Proyecto",
    gradient: "from-blue-500/20 to-sky-500/10"
  },
  {
    client: "Líder Sector Alimentario",
    challenge: "Modernizar procesos, agilizar desarrollo y responder rápido al negocio.",
    solution: "Implementación de Low-Code con OutSystems, conformando una fábrica de aplicaciones ágil.",
    results: [
      "×3 más velocidad de desarrollo",
      "Casi 100 aplicaciones funcionales en 2 años",
      "Alta adopción gracias a entregas tempranas"
    ],
    testimonial: "KPaz nos ayudó a acelerar la transformación digital: en poco tiempo desarrollamos lo que antes hubiera tardado meses.",
    author: "Gerente de Desarrollo",
    position: "Líder Tecnológico",
    gradient: "from-sky-500/20 to-cyan-500/10"
  }
];

export const clientsByIndustry = [
  {
    industry: "Banca &\nFinanzas",
    clients: ["Itaú", "Scotiabank", "BancoEstado", "Banco Chile", "Financiera Confianza"],
    color: "bg-blue-600/80",
    icon: Building2
  },
  {
    industry: "Seguros &\nPrevisión",
    clients: ["HDI", "Mutual de Seguridad", "Vida Cámara", "Banmédica", "AFP Capital"],
    color: "bg-emerald-600/80",
    icon: ShieldCheck
  },
  {
    industry: "Retail &\nConsumo",
    clients: ["Walmart", "Falabella", "SMU", "Agrosuper", "COLUN"],
    color: "bg-orange-600/80",
    icon: ShoppingCart
  },
  {
    industry: "Utilities &\nTelecomunicaciones",
    clients: ["SAESA", "AES Andes", "ESVAL", "Aguas Andinas", "ENTEL"],
    color: "bg-purple-600/80",
    icon: Zap
  },
  {
    industry: "Educación &\nUniversidades",
    clients: ["U. Andrés Bello", "U. Adolfo Ibañez", "U. Autónoma", "Universidad Privada de Norte", "INACAP"],
    color: "bg-indigo-600/80",
    icon: GraduationCap
  },
  {
    industry: "Energía &\nRecursos Naturales",
    clients: ["Minera Collahuasi", "COPEC", "ENAP", "Lipigas", "Abastible"],
    color: "bg-amber-600/80",
    icon: Fuel
  },
  {
    industry: "Sector\nPúblico",
    clients: ["Ministerio de Vivienda", "Ministerio de Educación", "CORFO", "Poder Judicial", "SENCE"],
    color: "bg-slate-600/80",
    icon: MapPin
  }
];
