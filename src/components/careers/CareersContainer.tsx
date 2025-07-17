
import { CareersHeader } from "./CareersHeader";
import { BenefitsGrid } from "./BenefitsGrid";
import { JobOpeningsList } from "./JobOpeningsList";
import { CareersCTA } from "./CareersCTA";

export const CareersContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <CareersHeader />
      <BenefitsGrid />
      <JobOpeningsList />
      <CareersCTA />
    </div>
  );
};
