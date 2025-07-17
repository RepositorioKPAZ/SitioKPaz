
import { ArrowRight, Heart, Users, Star, Globe, Target, Handshake } from "lucide-react";

export const NuestraEsenciaHeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2e4bce]/5 to-white overflow-hidden">
      {/* Abstract Graphic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#2e4bce]/20 to-sky-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-32 w-96 h-96 bg-gradient-to-br from-sky-300/25 to-[#2e4bce]/15 rounded-full blur-2xl"></div>
        
        {/* Medium geometric shapes */}
        <div className="absolute top-20 right-1/3 w-40 h-40 bg-gradient-to-br from-[#2e4bce]/30 to-transparent rounded-3xl rotate-45 animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-tr from-sky-400/20 to-[#2e4bce]/25 rounded-2xl rotate-12"></div>
        
        {/* Small accent elements */}
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#2e4bce]/40 rounded-full"></div>
        <div className="absolute top-1/3 left-20 w-12 h-12 bg-sky-300/50 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/2 w-8 h-8 bg-[#2e4bce]/60 rounded-full animate-pulse"></div>
        
        {/* Flowing wave elements */}
        <div className="absolute -bottom-10 left-0 right-0 h-32">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 C300,120 500,0 800,60 C1000,120 1200,0 1200,60 L1200,120 L0,120 Z"
              fill="url(#gradient1)"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2e4bce" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#87ceeb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2e4bce" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Nuestra <span className="text-[#2e4bce]">Esencia</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Conoce quiénes somos, qué nos mueve y por qué elegimos hacer tecnología 
          con propósito y humanidad.
        </p>
      </div>
    </section>
  );
};
