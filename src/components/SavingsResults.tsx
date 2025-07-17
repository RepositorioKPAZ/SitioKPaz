
import React from "react";
import { TeamMember } from "@/hooks/useSavingsCalculator";
import { TeamSummaryCard } from "@/components/savings/TeamSummaryCard";
import { SavingsDisplay } from "@/components/savings/SavingsDisplay";
import { BenefitsCard } from "@/components/savings/BenefitsCard";
import { SavingsActions } from "@/components/savings/SavingsActions";

interface SavingsResultsProps {
  teamMembers: TeamMember[];
  totalInternalCost: number;
  totalSavings: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
}

export const SavingsResults = React.memo(({
  teamMembers,
  totalInternalCost,
  totalSavings,
  totalOutsourcingCost,
  savingsPercentage
}: SavingsResultsProps) => {
  return (
    <div className="space-y-8">
      <TeamSummaryCard teamMembers={teamMembers} />
      
      <SavingsDisplay
        totalSavings={totalSavings}
        totalInternalCost={totalInternalCost}
        totalOutsourcingCost={totalOutsourcingCost}
        savingsPercentage={savingsPercentage}
      />

      <BenefitsCard />

      <SavingsActions
        totalSavings={totalSavings}
        totalInternalCost={totalInternalCost}
        totalOutsourcingCost={totalOutsourcingCost}
        savingsPercentage={savingsPercentage}
      />
    </div>
  );
});

SavingsResults.displayName = 'SavingsResults';
