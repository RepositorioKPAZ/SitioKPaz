
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { useSavingsCalculator } from "@/hooks/useSavingsCalculator";
import { TeamConfiguration } from "@/components/TeamConfiguration";
import { SavingsResults } from "@/components/SavingsResults";

export const SavingsCalculatorSection = () => {
  const {
    projectDuration,
    setProjectDuration,
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember,
    totalInternalCost,
    totalSavings,
    totalOutsourcingCost,
    savingsPercentage
  } = useSavingsCalculator();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(46,75,206,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(46,75,206,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            <Calculator className="w-4 h-4 mr-2" />
            Calculadora de Ahorros
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Descubre cuánto puedes
            <span className="block text-[#2e4bce]">ahorrar con nuestro talento</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
            Calcula el impacto financiero de trabajar con profesionales especializados en lugar de 
            <span className="text-[#2e4bce] font-semibold"> contratar equipos internos costosos.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <Card className="border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardHeader className="bg-gradient-to-r from-[#2e4bce]/5 to-blue-50">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#2e4bce]" />
                Configuración del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <TeamConfiguration
                projectDuration={projectDuration}
                setProjectDuration={setProjectDuration}
                teamMembers={teamMembers}
                addTeamMember={addTeamMember}
                removeTeamMember={removeTeamMember}
                updateTeamMember={updateTeamMember}
              />
            </CardContent>
          </Card>

          {/* Results */}
          <SavingsResults
            teamMembers={teamMembers}
            totalInternalCost={totalInternalCost}
            totalSavings={totalSavings}
            totalOutsourcingCost={totalOutsourcingCost}
            savingsPercentage={savingsPercentage}
          />
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-200">
            <p className="text-gray-600 italic">
              * Los cálculos son estimaciones basadas en promedios del mercado. 
              Los ahorros reales pueden variar según el proyecto específico y las necesidades del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
