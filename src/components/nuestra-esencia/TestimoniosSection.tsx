
import { Card, CardContent } from "@/components/ui/card";

export const TestimoniosSection = () => {
  return (
    <section className="mb-20">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-8 h-8 bg-[#2e4bce] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-sm font-bold">6</span>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lo que dicen de nosotros</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-[#2e4bce] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <blockquote className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                  "Con KPaz no solo ganamos un proveedor, ganamos un equipo que se involucró como si fuera parte de la casa."
                </blockquote>
                <cite className="text-sm text-gray-600 font-medium">
                  — Gerente de Tecnología, cliente del sector financiero
                </cite>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#2e4bce] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <blockquote className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                  "Me cambié a KPaz buscando equilibrio y propósito. Encontré eso y mucho más."
                </blockquote>
                <cite className="text-sm text-gray-600 font-medium">
                  — Full Stack Developer, KPaz Colombia
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
