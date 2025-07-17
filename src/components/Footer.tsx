
import { BrandSection } from "./footer/BrandSection";
import { MenuSection } from "./footer/MenuSection";
import { OfficesGrid } from "./footer/OfficesGrid";
import { SocialMediaSection } from "./footer/SocialMediaSection";
import { servicesData, nosotrosData, alliancesData } from "@/data/footerData";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-12">
          <BrandSection />
          <MenuSection title="Servicios" items={servicesData} />
          <MenuSection title="Alianzas" items={alliancesData} />
          <MenuSection title="Nosotros" items={nosotrosData} />
          <OfficesGrid />
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2013 - {new Date().getFullYear()} KPAZ. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <SocialMediaSection />
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Transformación Digital</span>
                <span>•</span>
                <span>Soluciones Empresariales</span>
                <span>•</span>
                <span>ROI Medible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
