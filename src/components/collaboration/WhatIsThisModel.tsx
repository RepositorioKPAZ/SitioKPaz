
import { OptimizedImage } from "@/components/ui/optimized-image";

interface WhatIsThisModelProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  gradient: string;
}

export const WhatIsThisModel = ({ title, description, icon: Icon, image, gradient }: WhatIsThisModelProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es {title}?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl overflow-hidden`}>
              {image ? (
                <OptimizedImage 
                  src={image} 
                  alt={title}
                  className="w-full h-full"
                  objectFit="cover"
                  placeholder="blur"
                  sizes="(max-width: 768px) 192px, 192px"
                  width={192}
                  height={192}
                />
              ) : Icon ? (
                <Icon className="h-24 w-24 text-white" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
