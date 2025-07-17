
import { OptimizedImage } from "@/components/ui/optimized-image";

export const BrandSection = () => {
  return (
    <div className="md:col-span-2">
      <div className="flex items-center mb-6">
        <OptimizedImage 
          src="/lovable-uploads/71a60a5e-1294-4ca6-8074-fe77fd29d64e.png" 
          alt="KPAZ Logo"
          className="h-12 w-auto"
          width={120}
          height={48}
          sizes="120px"
          objectFit="contain"
        />
      </div>
      <p className="text-gray-300 text-lg font-medium mb-6 max-w-md">
        Acelerando la transformación digital empresarial con soluciones tecnológicas estratégicas.
      </p>
      <p className="text-gray-400 text-sm">
        Especialistas en entregar ROI medible y escalabilidad garantizada para grandes empresas.
      </p>
    </div>
  );
};
