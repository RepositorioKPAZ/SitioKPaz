
import { NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { NavigationItem } from "./NavigationItem";
import { ServicesDropdown } from "./ServicesDropdown";
import { CollaborationModelsDropdown } from "./CollaborationModelsDropdown";
import { AlliancesMenuItem } from "./AlliancesMenuItem";

interface NavigationMenuItemsProps {
  handleInicioClick: () => void;
}

export const NavigationMenuItems = ({ handleInicioClick }: NavigationMenuItemsProps) => {
  return (
    <NavigationMenuList className="gap-1">
      <NavigationMenuItem>
        <NavigationItem onClick={handleInicioClick} className="px-4 py-3 group relative overflow-hidden">
          <span className="relative z-10 font-medium tracking-wide">Inicio</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
          <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 rounded-full"></div>
        </NavigationItem>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <ServicesDropdown />
      </NavigationMenuItem>

      <NavigationMenuItem>
        <CollaborationModelsDropdown />
      </NavigationMenuItem>

      <NavigationMenuItem>
        <AlliancesMenuItem />
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link 
          to="/insights"
          className="relative px-4 py-3 text-sm font-medium tracking-wide text-gray-700 hover:text-[#2e4bce] rounded-xl transition-all duration-500 group overflow-hidden inline-block"
        >
          <span className="relative z-10">IT Insights</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
          <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link 
          to="/careers"
          className="relative px-4 py-3 text-sm font-medium tracking-wide text-gray-700 hover:text-[#2e4bce] rounded-xl transition-all duration-500 group overflow-hidden inline-block"
        >
          <span className="relative z-10">Únete a KPaz</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
          <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};
