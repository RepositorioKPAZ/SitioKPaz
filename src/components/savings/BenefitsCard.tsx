
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Inicio en días:",
    description: "Sin procesos de contratación largos"
  },
  {
    title: "Flexibilidad total:",
    description: "Escala el equipo según necesidades"
  },
  {
    title: "Expertise especializado:",
    description: "Acceso a talento de alto nivel"
  },
  {
    title: "Sin costos ocultos:",
    description: "No prestaciones, equipos ni infraestructura"
  }
];

export const BenefitsCard = React.memo(() => {
  return (
    <Card className="border-2 border-[#2e4bce]/20 shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Beneficios Adicionales
        </h3>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#2e4bce] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">{benefit.title}</span> {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

BenefitsCard.displayName = 'BenefitsCard';
