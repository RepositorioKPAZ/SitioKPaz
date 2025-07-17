
import { useNavigation } from "@/hooks/useNavigation";
import { NavigationContainer } from "@/components/navigation/NavigationContainer";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  const { handleInicioClick, handleConversemosClick } = useNavigation(scrollToSection);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-2xl border-b border-gray-200/20 shadow-xl shadow-gray-900/5">
      <NavigationContainer 
        handleInicioClick={handleInicioClick}
        handleConversemosClick={handleConversemosClick}
      />
    </nav>
  );
};
