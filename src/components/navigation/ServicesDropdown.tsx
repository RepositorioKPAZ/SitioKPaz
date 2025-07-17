
import { NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export const ServicesDropdown = () => {
  return (
    <>
      <NavigationMenuTrigger className="relative px-4 py-3 text-sm font-medium tracking-wide text-gray-700 hover:text-[#2e4bce] rounded-xl transition-all duration-500 group overflow-hidden bg-transparent">
        <span className="relative z-10">Lo que hacemos</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
        <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[420px] bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-200/30 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#2e4bce]/8 to-[#1e3a9e]/8 p-6 border-b border-gray-100/50">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
              Lo que hacemos
            </h3>
            <p className="text-sm text-gray-600 mt-1">Soluciones tecnológicas de vanguardia</p>
          </div>
          <ScrollArea className="h-[400px]">
            <div className="p-3 space-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/servicios/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'y')}`}
                  className="group block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-indigo-50/70 hover:shadow-lg transform hover:scale-[1.02] hover:shadow-blue-100/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold leading-none group-hover:text-[#2e4bce] mb-2 transition-colors duration-500">
                        {service.title}
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground group-hover:text-gray-600 transition-colors duration-500">
                        {service.impact}
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
