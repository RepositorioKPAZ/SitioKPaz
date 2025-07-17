
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen, TrendingUp } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const InsightCard = ({ title, excerpt, date, readTime, category, featured = false }: InsightCardProps) => {
  if (featured) {
    return (
      <div className="col-span-full bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] rounded-3xl p-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              Destacado
            </Badge>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">{excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-blue-200 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {readTime}
              </span>
            </div>
            <Button variant="outline" className="bg-white text-blue-600 border-white hover:bg-gray-100">
              Leer más <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-48 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <Badge className="mb-3 bg-blue-50 text-blue-600 border-blue-200">
        {category}
      </Badge>
      <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
        {excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <BookOpen className="w-3 h-3" />
          {readTime}
        </span>
      </div>
      <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
        Leer artículo <ArrowRight className="ml-2 h-3 w-3" />
      </Button>
    </div>
  );
};

export const GenexusInsights = () => {
  const genexusInsights = [
    {
      title: "Genexus 18: Evolución Automática que Revoluciona el Desarrollo",
      excerpt: "Descubre las nuevas capacidades de Genexus 18 que permiten la evolución automática de aplicaciones según cambian los requerimientos, con IA integrada y soporte nativo para tecnologías modernas.",
      date: "15 Dic 2024",
      readTime: "6 min",
      category: "Plataforma",
      featured: true
    },
    {
      title: "Caso de Éxito: ERP Empresarial en 4 Meses con Genexus",
      excerpt: "Conoce cómo una empresa manufacturera desarrolló su ERP completo usando Genexus, logrando adaptarse automáticamente a cambios de negocio y reduciendo costos de mantenimiento en 70%.",
      date: "10 Dic 2024",
      readTime: "5 min",
      category: "Caso de Éxito"
    },
    {
      title: "Modernización Legacy: De COBOL a Web con Genexus",
      excerpt: "Guía completa para migrar sistemas legacy hacia arquitecturas modernas usando Genexus, manteniendo la lógica de negocio y agregando capacidades web y móviles.",
      date: "5 Dic 2024",
      readTime: "7 min",
      category: "Modernización"
    },
    {
      title: "Genexus AI Assistant: Desarrollo Inteligente desde Latinoamérica",
      excerpt: "Explora cómo el asistente de IA de Genexus está revolucionando el desarrollo de software con sugerencias contextuales, análisis de patrones y optimización automática de rendimiento.",
      date: "1 Dic 2024",
      readTime: "6 min",
      category: "Inteligencia Artificial"
    }
  ];

  const featuredInsight = genexusInsights.find(insight => insight.featured);
  const regularInsights = genexusInsights.filter(insight => !insight.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200 font-medium">
            🚀 Genexus Insights
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Últimas novedades <span className="text-blue-600">Genexus</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias, casos de éxito y mejores prácticas en desarrollo con evolución automática.
          </p>
        </div>

        {featuredInsight && (
          <div className="grid gap-8 mb-8">
            <InsightCard {...featuredInsight} />
          </div>
        )}

        {regularInsights.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {regularInsights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Ver todos los artículos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
