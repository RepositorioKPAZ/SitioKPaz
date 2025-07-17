
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Target, Handshake, ArrowRight } from "lucide-react";

export const ValoresSection = () => {
  const valores = [
    {
      icon: Heart,
      title: "Humanidad",
      description: "La tecnología está al servicio de las personas."
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Lo bien hecho, desde el primer día."
    },
    {
      icon: Target,
      title: "Compromiso",
      description: "No prometemos lo que no podemos cumplir."
    },
    {
      icon: Handshake,
      title: "Colaboración",
      description: "Trabajamos contigo, no para ti."
    },
    {
      icon: ArrowRight,
      title: "Agilidad",
      description: "El valor está en llegar a tiempo, con impacto."
    }
  ];

  return (
    <section className="mb-20">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-8 h-8 bg-[#2e4bce] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-sm font-bold">5</span>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lo que nos mueve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-t-[#2e4bce]">
                <CardContent className="p-6 text-center">
                  <valor.icon className="w-10 h-10 text-[#2e4bce] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{valor.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
