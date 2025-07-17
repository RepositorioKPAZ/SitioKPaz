
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface AllianceProblemsProps {
  problems: string[];
}

export const AllianceProblems = ({ problems }: AllianceProblemsProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            <Lightbulb className="w-4 h-4 mr-2" />
            Qué problemas ayuda a resolver
          </Badge>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Desafíos empresariales que abordamos juntos
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl">
            {problems.map((problem, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    </div>
                    <p className="text-gray-700 font-medium">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
