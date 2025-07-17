
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Example {
  industry: string;
  description: string;
  results: string;
}

interface RealExamplesProps {
  examples: Example[];
}

export const RealExamples = ({ examples }: RealExamplesProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Casos reales de aplicación
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#2e4bce]/10 flex items-center justify-center flex-shrink-0">
                    <Quote className="h-4 w-4 text-[#2e4bce]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2e4bce] mb-1">
                      {example.industry}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {example.description}
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 font-medium text-sm">
                    {example.results}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
