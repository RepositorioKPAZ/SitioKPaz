
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";

interface AllianceDescriptionProps {
  description: string;
}

export const AllianceDescription = ({ description }: AllianceDescriptionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            <Target className="w-4 h-4 mr-2" />
            ¿Por qué esta alianza es importante?
          </Badge>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
