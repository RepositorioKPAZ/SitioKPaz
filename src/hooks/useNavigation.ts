
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigation = (scrollToSection: (sectionId: string) => void) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleInicioClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { replace: true });
      // Forzar scroll al inicio después de la navegación
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 0);
    }
  };

  const handleConversemosClick = () => {
    if (isHomePage) {
      scrollToSection('contacto');
    } else {
      navigate('/', { state: { scrollTo: 'contacto' } });
    }
  };

  return {
    isHomePage,
    handleInicioClick,
    handleConversemosClick
  };
};
