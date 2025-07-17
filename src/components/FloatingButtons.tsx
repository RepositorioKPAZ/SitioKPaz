
import { Button } from "@/components/ui/button";
import { Home, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <Link to="/">
        <Button 
          size="lg"
          className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-14 h-14"
        >
          <Home className="h-6 w-6" />
        </Button>
      </Link>
      
      {showBackToTop && (
        <Button 
          onClick={scrollToTop}
          size="lg"
          variant="outline"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-14 h-14 bg-white/80 backdrop-blur-sm"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};
