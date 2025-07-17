
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationMenuItems } from "./NavigationMenuItems";
import { NavigationCTA } from "./NavigationCTA";

interface NavigationContainerProps {
  handleInicioClick: () => void;
  handleConversemosClick: () => void;
}

export const NavigationContainer = ({ 
  handleInicioClick, 
  handleConversemosClick 
}: NavigationContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <NavigationLogo />
        </div>
        
        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuItems handleInicioClick={handleInicioClick} />
          </NavigationMenu>

          <NavigationCTA onClick={handleConversemosClick}>
            Conversamos?
          </NavigationCTA>
        </div>
      </div>
    </div>
  );
};
