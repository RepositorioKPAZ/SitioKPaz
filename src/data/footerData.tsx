
export const servicesData = [
  { label: "Software Development", href: "/servicios/software-development" },
  { label: "Hyperautomation", href: "/servicios/hyperautomation" },
  { label: "Low-Code Development", href: "/servicios/low-code-development" },
  { label: "Mobile Apps Development", href: "/servicios/mobile-apps-development" },
  { label: "AI & Data Science", href: "/servicios/ai-y-data-science" },
  { label: "Digital Products Design", href: "/servicios/digital-products-design" },
  { label: "QA & Testing", href: "/servicios/qa-y-testing" },
  { label: "Infraestructura & Ops", href: "/servicios/infraestructura-y-ops" }
];

export const nosotrosData = [
  { label: "Nuestra esencia", href: "/nuestra-esencia" },
  { label: "Únete a KPaz", href: "/careers" },
  { label: "IT Insights", href: "/insights" }
];

export const alliancesData = [
  { label: "Microsoft", href: "/alianzas/microsoft" },
  { label: "Google", href: "/alianzas/google" },
  { label: "Amazon", href: "/alianzas/amazon" },
  { label: "UiPath", href: "/alianzas/uipath" },
  { label: "OutSystems", href: "/alianzas/outsystems" }
];

export interface OfficeInfo {
  country: string;
  address: string;
  email: string;
  flagComponent: () => JSX.Element;
}

export const officesData: OfficeInfo[] = [
  {
    country: "Chile",
    address: "Avenida Suecia 172, Piso 2<br />Providencia, Santiago",
    email: "contacto@kpaz.cl",
    flagComponent: () => (
      <div className="w-6 h-6 rounded-full overflow-hidden flex flex-col border border-gray-600">
        <div className="h-1/2 flex">
          <div className="w-1/3 bg-blue-600 flex items-center justify-center">
            <div className="text-white text-xs">★</div>
          </div>
          <div className="w-2/3 bg-white"></div>
        </div>
        <div className="h-1/2 bg-red-600"></div>
      </div>
    )
  },
  {
    country: "Perú",
    address: "Avenida Dionisio Derteano 184, Oficina 603<br />San Isidro, Lima",
    email: "contacto@kpaz.pe",
    flagComponent: () => (
      <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center border border-gray-600">
        <div className="w-full h-full flex">
          <div className="w-1/3 bg-red-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-red-600"></div>
        </div>
      </div>
    )
  },
  {
    country: "Colombia",
    address: "Carrera 10 No 96-95 - Oficina 612<br />Bogotá",
    email: "contacto@kpaz.co",
    flagComponent: () => (
      <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center border border-gray-600">
        <div className="w-full h-full flex flex-col">
          <div className="h-1/3 bg-yellow-400"></div>
          <div className="h-1/3 bg-blue-600"></div>
          <div className="h-1/3 bg-red-600"></div>
        </div>
      </div>
    )
  }
];
