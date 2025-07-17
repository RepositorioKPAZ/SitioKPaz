
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface AllianceUseCasesProps {
  partnerName: string;
  useCases: string[];
}

export const AllianceUseCases = ({ partnerName, useCases }: AllianceUseCasesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Casos de uso y soluciones
          </Badge>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Con {partnerName} implementamos soluciones para:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{useCase}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
