
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Users, ArrowRight } from "lucide-react";

interface SuccessCaseProps {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  position: string;
  gradient: string;
}

export const SuccessCase = ({
  client,
  challenge,
  solution,
  results,
  testimonial,
  author,
  position,
  gradient
}: SuccessCaseProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-[#2e4bce]/30 transition-all duration-500`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-[#2e4bce] rounded-xl flex items-center justify-center flex-shrink-0">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{client}</h3>
          <p className="text-gray-700 font-medium">{challenge}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-[#2e4bce] mb-3">Solución</h4>
        <p className="text-gray-700">{solution}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-[#2e4bce] mb-3">Resultados</h4>
        <div className="space-y-2">
          {results.map((result, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{result}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/50 rounded-2xl p-6 border border-white/40 mb-6">
        <p className="text-gray-700 italic mb-4">"{testimonial}"</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2e4bce] rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button 
          className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          onClick={scrollToContact}
        >
          Quiero resultados así <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
