
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Users, Factory, Package, Settings, Building2, Shield } from "lucide-react";

interface CollaborationModelsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const collaborationModels = [
  {
    id: 1,
    title: "Talent as a Service (TaaS)",
    subtitle: "Talento experto, bajo el modelo que mejor se adapte a ti.",
    description: "Profesionales validados (Staff Augmentation) o equipos completos (Dedicated Teams), integrados o autónomos. Tú eliges el modelo, nosotros garantizamos resultados.",
    icon: Users,
    gradient: "from-blue-500 to-indigo-600",
    link: "/modelos/talent-as-service"
  },
  {
    id: 2,
    title: "Software Factory OnDemand",
    subtitle: "Tu fábrica, tu ritmo.",
    description: "Para negocios con backlogs cambiantes y prioridades dinámicas, obtén flexibilidad, eficiencia y calidad. Paga solo por lo que usas.",
    icon: Factory,
    gradient: "from-blue-500 to-indigo-600",
    link: "/modelos/software-factory-ondemand"
  },
  {
    id: 3,
    title: "Turnkey Projects",
    subtitle: "Desde la idea hasta la entrega.",
    description: "Nos hacemos cargo de todo el ciclo de vida: diseño, desarrollo, QA e implementación, con entregables y plazos acordados.",
    icon: Package,
    gradient: "from-blue-500 to-indigo-600",
    link: "/modelos/turnkey-projects"
  },
  {
    id: 4,
    title: "Applications Managed",
    subtitle: "Tu software, siempre operativo.",
    description: "Nos encargamos de mantener, evolucionar y monitorear tus aplicaciones y plataformas para que tú te enfoques en el negocio.",
    icon: Settings,
    gradient: "from-blue-500 to-indigo-600",
    link: "/modelos/applications-managed"
  },
  {
    id: 5,
    title: "Business Process Outsourcing (BPO)",
    subtitle: "Delegas procesos, nosotros garantizamos eficiencia.",
    description: "Asumimos la operación de procesos clave de tu negocio, con equipos especializados, foco en SLA y mejora continua.",
    icon: Building2,
    gradient: "from-blue-500 to-indigo-600",
    link: "/modelos/business-process-outsourcing"
  },
  {
    id: 6,
    title: "Software Licensing Service",
    subtitle: "Tecnología líder, con un partner que te acompaña.",
    description: "No solo entregamos licencias: te ayudamos a elegir la tecnología adecuada, a implementarla bien y a asegurar su adopción y retorno.",
    icon: Shield,
    gradient: "from-blue-500 to-indigo-600",
    link: "/modelos/software-licensing-service"
  }
];

export const CollaborationModelsSection = ({ scrollToSection }: CollaborationModelsSectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(46,75,206,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            ⚙️ Modelos de Colaboración
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trabajamos contigo como
            <span className="block text-[#2e4bce] bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
              lo necesites
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            En KPaz no creemos en soluciones únicas. Por eso, ofrecemos distintos modelos de colaboración que se adaptan a tus desafíos, ritmo y cultura. Podemos ayudarte a avanzar con flexibilidad y compromiso.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {collaborationModels.map((model) => {
            const IconComponent = model.icon;
            return (
              <Card key={model.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2e4bce] transition-colors duration-300">
                    {model.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-[#2e4bce] mb-3">
                    {model.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {model.description}
                  </p>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white transition-all duration-300"
                    onClick={() => window.location.href = model.link}
                  >
                    Conocer más <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-full transition-all duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#2e4bce]/5 to-slate-900/5 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No estás seguro de qué modelo necesitas?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Conversemos y diseñemos juntos la forma más eficiente de trabajar contigo.
            </p>
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              onClick={() => scrollToSection('contacto')}
            >
              Hablemos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
