import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import heroImage from "@/assets/hero-optimized.webp";
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}
export const HeroSection = ({
  scrollToSection
}: HeroSectionProps) => {
  return <section id="inicio" className="relative overflow-hidden pt-20 pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,75,206,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(46,75,206,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left lg:text-left">
            <Badge variant="secondary" className="mb-6 animate-fade-in bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              🎯 Tecnología que genera impacto real
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
              Transformación
              <span className="block text-[#2e4bce] bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent my-0 py-[3px]">
                Digital Estratégica
              </span>
              para su Empresa
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in font-medium leading-relaxed max-w-2xl">
              Soluciones tecnológicas diseñadas para líderes IT y del negocio que buscan impacto real, escalabilidad garantizada y retorno medible.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-fade-in">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2e4bce]" />
                <span className="text-gray-700 font-medium">ROI Medible</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2e4bce]" />
                <span className="text-gray-700 font-medium">Escalabilidad Garantizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2e4bce]" />
                <span className="text-gray-700 font-medium">Implementación Ágil</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold" onClick={() => scrollToSection('servicios')}>
                Explorar Soluciones <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg font-semibold" onClick={() => scrollToSection('contacto')}>
                Solicitar Consultoría
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src={heroImage} 
                alt="Equipo trabajando en transformación digital" 
                          className="h-full w-full"
                objectFit="cover"
                priority={true}
                placeholder="blur"
                sizes="(max-width: 1024px) 0px, 384px"
                width={384}
                height={384}
              />
              {/* Overlay gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2e4bce]/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('servicios')}>
        <ChevronDown className="h-6 w-6 text-gray-400 hover:text-[#2e4bce] transition-colors duration-300" />
      </div>
    </section>;
};