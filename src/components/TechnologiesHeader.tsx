
import { Badge } from "@/components/ui/badge";

export const TechnologiesHeader = () => (
  <div className="text-center mb-16">
    <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
      💻 Stack Tecnológico
    </Badge>
    
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      El poder de la tecnología
      <span className="block text-[#2e4bce]">en manos expertas</span>
    </h2>
    
    <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
      Nuestros profesionales dominan las tecnologías más avanzadas del mercado para
      <span className="text-[#2e4bce] font-semibold"> transformar tus ideas en soluciones reales y escalables.</span>
    </p>
  </div>
);
