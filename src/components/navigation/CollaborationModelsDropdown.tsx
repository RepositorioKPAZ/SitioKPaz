
import { NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Users, Factory, Target, Shield, Briefcase, Award } from "lucide-react";

const collaborationModels = [
  {
    title: "Talent as a Service (TaaS)",
    subtitle: "Talento experto, bajo el modelo que mejor se adapte a ti",
    description: "Profesionales validados o equipos completos, integrados o autónomos.",
    icon: Users,
    link: "/modelos/talent-as-service"
  },
  {
    title: "Software Factory OnDemand",
    subtitle: "Tu fábrica, tu ritmo",
    description: "Para negocios con backlogs cambiantes y prioridades dinámicas, obtén flexibilidad, eficiencia y calidad.",
    icon: Factory,
    link: "/modelos/software-factory-ondemand"
  },
  {
    title: "Turnkey Projects",
    subtitle: "Desde la idea hasta la entrega",
    description: "Nos hacemos cargo de todo el ciclo de vida: diseño, desarrollo, QA e implementación.",
    icon: Target,
    link: "/modelos/turnkey-projects"
  },
  {
    title: "Applications Managed",
    subtitle: "Tu software, siempre operativo",
    description: "Nos encargamos de mantener, evolucionar y monitorear tus aplicaciones y plataformas.",
    icon: Shield,
    link: "/modelos/applications-managed"
  },
  {
    title: "Business Process Outsourcing (BPO)",
    subtitle: "Delegas procesos, nosotros garantizamos eficiencia",
    description: "Asumimos la operación de procesos clave de tu negocio con mejora continua.",
    icon: Briefcase,
    link: "/modelos/business-process-outsourcing"
  },
  {
    title: "Software Licensing Service",
    subtitle: "Tecnología líder, con un partner que te acompaña",
    description: "No solo entregamos licencias: te ayudamos a elegir la tecnología adecuada, a implementarla bien y a asegurar su adopción.",
    icon: Award,
    link: "/modelos/software-licensing-service"
  }
];

export const CollaborationModelsDropdown = () => {
  return (
    <>
      <NavigationMenuTrigger className="relative px-4 py-3 text-sm font-medium tracking-wide text-gray-700 hover:text-[#2e4bce] rounded-xl transition-all duration-500 group overflow-hidden bg-transparent">
        <span className="relative z-10">Como trabajamos</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
        <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[500px] bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-200/30 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#2e4bce]/8 to-[#1e3a9e]/8 p-6 border-b border-gray-100/50">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
              Como trabajamos
            </h3>
            <p className="text-sm text-gray-600 mt-1">Modelos flexibles que se adaptan a ti</p>
          </div>
          <ScrollArea className="h-[500px]">
            <div className="p-3 space-y-2">
              {collaborationModels.map((model, index) => (
                <Link
                  key={index}
                  to={model.link}
                  className="group block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-indigo-50/70 hover:shadow-lg transform hover:scale-[1.02] hover:shadow-blue-100/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                      <model.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold leading-none group-hover:text-[#2e4bce] mb-1 transition-colors duration-500">
                        {model.title}
                      </div>
                      <p className="text-xs font-medium text-[#2e4bce] mb-2">
                        {model.subtitle}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground group-hover:text-gray-600 transition-colors duration-500">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </NavigationMenuContent>
    </>
  );
};
