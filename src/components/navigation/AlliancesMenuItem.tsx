import { NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const AlliancesMenuItem = () => {
  const alliances = [
    { name: "Microsoft", color: "from-blue-600 to-blue-800", slug: "microsoft", logo: "/lovable-uploads/1b177d8d-a769-49b0-b875-3ac51815f856.png" },
    { name: "Google", color: "from-blue-500 to-blue-700", slug: "google", logo: "/lovable-uploads/5a34cf9e-d40b-4e71-ae24-aad95f18b330.png" },
    { name: "Amazon", color: "from-slate-600 to-blue-800", slug: "amazon", logo: "/lovable-uploads/072d1358-7dfd-4c2b-9031-784976a5eb0c.png" },
    { name: "UiPath", color: "from-indigo-600 to-blue-700", slug: "uipath", logo: "/lovable-uploads/00948265-d10e-4da2-b99d-021709cd2942.png" },
    { name: "Rocketbot", color: "from-sky-500 to-blue-600", slug: "rocketbot", logo: "/lovable-uploads/6ed03b69-bebf-467d-87e6-43291b26cdd3.png" },
    { name: "Kore.AI", color: "from-blue-700 to-indigo-800", slug: "kore-ai", logo: "/lovable-uploads/d3d675ba-accf-4280-a463-c54b44d94cdb.png" },
    { name: "OutSystems", color: "from-cyan-600 to-blue-700", slug: "outsystems", logo: "/lovable-uploads/dd69f607-b6a5-4964-9f74-f466ad2a3521.png" },
    { name: "Genexus", color: "from-blue-800 to-slate-800", slug: "genexus", logo: "/lovable-uploads/8a2c3d86-4608-40da-bd4d-c5d989ab1d7c.png" },
    { name: "Salesforce", color: "from-sky-600 to-blue-700", slug: "salesforce", logo: "/lovable-uploads/1387d343-ba06-404f-ab81-117907606d7e.png" }
  ];

  return (
    <>
      <NavigationMenuTrigger className="relative px-4 py-3 text-sm font-medium tracking-wide text-gray-700 hover:text-[#2e4bce] rounded-xl transition-all duration-500 group overflow-hidden bg-transparent">
        <span className="relative z-10">+ KPaces</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
        <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </NavigationMenuTrigger>
      
      <NavigationMenuContent>
        <div className="w-96 bg-white/90 backdrop-blur-2xl shadow-2xl border border-gray-200/30 rounded-3xl p-8">
          <div className="space-y-6">
            <div className="space-y-3 bg-gradient-to-r from-gray-50/80 to-blue-50/50 p-6 -m-6 mb-0 rounded-t-3xl">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                + KPaces
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Colaboramos con los mejores del mundo
              </p>
            </div>
            
            <div className="border-t border-gray-200/50 pt-6">
              <div className="grid grid-cols-2 gap-3">
                {alliances.map((alliance, index) => (
                  <Link
                    key={alliance.name}
                    to={`/alianzas/${alliance.slug}`}
                    className="group flex items-center space-x-3 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-blue-50/50 transition-all duration-500 cursor-pointer hover:shadow-md transform hover:scale-105"
                  >
                    <div className={`w-10 h-10 rounded-xl ${alliance.logo ? 'bg-white border border-gray-200' : `bg-gradient-to-br ${alliance.color}`} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:rotate-3`}>
                      {alliance.logo ? (
                        <OptimizedImage 
                          src={alliance.logo} 
                          alt={alliance.name}
                          className="w-8 h-8"
                          objectFit="contain"
                          width={32}
                          height={32}
                          sizes="32px"
                        />
                      ) : (
                        <span className="text-white font-bold text-xs">
                          {alliance.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#2e4bce] transition-colors duration-500">
                      {alliance.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </>
  );
};
