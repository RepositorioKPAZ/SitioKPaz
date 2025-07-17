
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface AllianceResourcesProps {
  resources?: {
    caseStudies?: string[];
    articles?: string[];
    testimonial?: {
      text: string;
      author: string;
      position: string;
    };
  };
}

export const AllianceResources = ({ resources }: AllianceResourcesProps) => {
  if (!resources) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            <BookOpen className="w-4 h-4 mr-2" />
            Recursos y contenido relacionado
          </Badge>
        </div>
        
        {resources.testimonial && (
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-gray-700 italic mb-4">
                  "{resources.testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900">
                  {resources.testimonial.author}
                </div>
                <div className="text-gray-600">
                  {resources.testimonial.position}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
