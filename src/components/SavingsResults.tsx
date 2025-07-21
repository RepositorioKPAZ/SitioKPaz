
import React from "react";
import { TeamMember } from "@/hooks/useSavingsCalculator";
import { TeamSummaryCard } from "@/components/savings/TeamSummaryCard";
import { SavingsDisplay } from "@/components/savings/SavingsDisplay";
import { BenefitsCard } from "@/components/savings/BenefitsCard";
import { SavingsActions } from "@/components/savings/SavingsActions";

interface SavingsResultsProps {
  teamMembers: any[]; // Nuevo: perfiles seleccionados
  totalInternalCost: number;
  totalSavings: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
  projectDuration: number[]; // Nuevo: duración real
  hiringDelay: number; // Nuevo: demora real
  perfilesData?: any[];
}

export const SavingsResults = React.memo(({
  teamMembers,
  totalInternalCost,
  totalSavings,
  totalOutsourcingCost,
  savingsPercentage,
  projectDuration,
  hiringDelay,
  perfilesData = []
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
        teamMembers={teamMembers}
        projectDuration={projectDuration}
        hiringDelay={hiringDelay}
        perfilesData={perfilesData}
      />
    </div>
  );
});

SavingsResults.displayName = 'SavingsResults';
