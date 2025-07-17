
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NewsletterCTA = () => {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Quieres más contenido exclusivo?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Suscríbete a nuestro newsletter y recibe las últimas tendencias tecnológicas directamente en tu inbox.
        </p>
        <Button 
          size="lg"
          className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Suscribirse al Newsletter <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
