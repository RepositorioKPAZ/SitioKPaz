
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, memo } from "react";
import { LoadingFallback } from "@/components/ui/loading-fallback";

// Import Index directly for better performance on home page
import Index from "@/pages/Index";

// Group lazy imports by category for better organization and potential future code splitting
const lazyImport = (importFn: () => Promise<any>) => 
  lazy(() => importFn().catch(() => import("@/pages/NotFound")));

// Core pages
const Insights = lazyImport(() => import("@/pages/Insights"));
const Careers = lazyImport(() => import("@/pages/Careers"));
const NuestraEsencia = lazyImport(() => import("@/pages/NuestraEsencia"));
const NotFound = lazyImport(() => import("@/pages/NotFound"));

// Service pages - grouped for potential route-based code splitting
const servicePages = {
  SoftwareDevelopment: lazyImport(() => import("@/pages/services/SoftwareDevelopment")),
  Hyperautomation: lazyImport(() => import("@/pages/services/Hyperautomation")),
  LowCodeDevelopment: lazyImport(() => import("@/pages/services/LowCodeDevelopment")),
  MobileAppsDevelopment: lazyImport(() => import("@/pages/services/MobileAppsDevelopment")),
  AIDataScience: lazyImport(() => import("@/pages/services/AIDataScience")),
  DigitalProductsDesign: lazyImport(() => import("@/pages/services/DigitalProductsDesign")),
  QATesting: lazyImport(() => import("@/pages/services/QATesting")),
  InfraestructuraOps: lazyImport(() => import("@/pages/services/InfraestructuraOps")),
  SoftwareLicensingService: lazyImport(() => import("@/pages/services/SoftwareLicensingService"))
};

// Collaboration pages
const collaborationPages = {
  TurnkeyProjects: lazyImport(() => import("@/pages/services/TurnkeyProjects")),
  ApplicationsManaged: lazyImport(() => import("@/pages/services/ApplicationsManaged")),
  TalentAsService: lazyImport(() => import("@/pages/services/TalentAsService")),
  BusinessProcessOutsourcing: lazyImport(() => import("@/pages/services/BusinessProcessOutsourcing")),
  SoftwareFactoryOnDemand: lazyImport(() => import("@/pages/services/SoftwareFactoryOnDemand")),
  SoftwareLicensingService: lazyImport(() => import("@/pages/services/SoftwareLicensingService"))
};

// Alliance pages
const alliancePages = {
  Microsoft: lazyImport(() => import("@/pages/alliances/Microsoft")),
  Google: lazyImport(() => import("@/pages/alliances/Google")),
  Amazon: lazyImport(() => import("@/pages/alliances/Amazon")),
  UiPath: lazyImport(() => import("@/pages/alliances/UiPath")),
  Rocketbot: lazyImport(() => import("@/pages/alliances/Rocketbot")),
  KoreAI: lazyImport(() => import("@/pages/alliances/KoreAI")),
  OutSystems: lazyImport(() => import("@/pages/alliances/OutSystems")),
  Genexus: lazyImport(() => import("@/pages/alliances/Genexus")),
  Salesforce: lazyImport(() => import("@/pages/alliances/Salesforce"))
};

// Memoized route component for better performance
const LazyRoute = memo(({ Component }: { Component: React.ComponentType }) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
));

export const AppRouter = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/insights" element={<LazyRoute Component={Insights} />} />
        <Route path="/careers" element={<LazyRoute Component={Careers} />} />
        <Route path="/nuestra-esencia" element={<LazyRoute Component={NuestraEsencia} />} />
        
        {/* Service routes */}
        <Route path="/servicios/software-development" element={<LazyRoute Component={servicePages.SoftwareDevelopment} />} />
        <Route path="/servicios/hyperautomation" element={<LazyRoute Component={servicePages.Hyperautomation} />} />
        <Route path="/servicios/low-code-development" element={<LazyRoute Component={servicePages.LowCodeDevelopment} />} />
        <Route path="/servicios/mobile-apps-development" element={<LazyRoute Component={servicePages.MobileAppsDevelopment} />} />
        <Route path="/servicios/ai-y-data-science" element={<LazyRoute Component={servicePages.AIDataScience} />} />
        <Route path="/servicios/digital-products-design" element={<LazyRoute Component={servicePages.DigitalProductsDesign} />} />
        <Route path="/servicios/qa-y-testing" element={<LazyRoute Component={servicePages.QATesting} />} />
        <Route path="/servicios/infraestructura-y-ops" element={<LazyRoute Component={servicePages.InfraestructuraOps} />} />
        <Route path="/servicios/software-licensing-service" element={<LazyRoute Component={servicePages.SoftwareLicensingService} />} />
        
        {/* Collaboration routes */}
        <Route path="/modelos/turnkey-projects" element={<LazyRoute Component={collaborationPages.TurnkeyProjects} />} />
        <Route path="/modelos/applications-managed" element={<LazyRoute Component={collaborationPages.ApplicationsManaged} />} />
        <Route path="/modelos/talent-as-service" element={<LazyRoute Component={collaborationPages.TalentAsService} />} />
        <Route path="/modelos/business-process-outsourcing" element={<LazyRoute Component={collaborationPages.BusinessProcessOutsourcing} />} />
        <Route path="/modelos/software-factory-ondemand" element={<LazyRoute Component={collaborationPages.SoftwareFactoryOnDemand} />} />
        <Route path="/modelos/software-licensing-service" element={<LazyRoute Component={collaborationPages.SoftwareLicensingService} />} />
        
        {/* Alliance routes */}
        <Route path="/alianzas/microsoft" element={<LazyRoute Component={alliancePages.Microsoft} />} />
        <Route path="/alianzas/google" element={<LazyRoute Component={alliancePages.Google} />} />
        <Route path="/alianzas/amazon" element={<LazyRoute Component={alliancePages.Amazon} />} />
        <Route path="/alianzas/uipath" element={<LazyRoute Component={alliancePages.UiPath} />} />
        <Route path="/alianzas/rocketbot" element={<LazyRoute Component={alliancePages.Rocketbot} />} />
        <Route path="/alianzas/kore-ai" element={<LazyRoute Component={alliancePages.KoreAI} />} />
        <Route path="/alianzas/outsystems" element={<LazyRoute Component={alliancePages.OutSystems} />} />
        <Route path="/alianzas/genexus" element={<LazyRoute Component={alliancePages.Genexus} />} />
        <Route path="/alianzas/salesforce" element={<LazyRoute Component={alliancePages.Salesforce} />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<LazyRoute Component={NotFound} />} />
      </Routes>
    </BrowserRouter>
  );
});
