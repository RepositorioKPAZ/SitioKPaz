
import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { DownloadCalculationForm } from "@/components/DownloadCalculationForm";

interface SavingsActionsProps {
  totalSavings: number;
  totalInternalCost: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
}

export const SavingsActions = React.memo(({
  totalSavings,
  totalInternalCost,
  totalOutsourcingCost,
  savingsPercentage
}: SavingsActionsProps) => {
  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg" 
        className="bg-[#2e4bce] hover:bg-[#2e4bce]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={scrollToContact}
      >
        Comienza a Ahorrar Hoy
      </Button>
      
      <DownloadCalculationForm
        totalSavings={totalSavings}
        totalInternalCost={totalInternalCost}
        totalOutsourcingCost={totalOutsourcingCost}
        savingsPercentage={savingsPercentage}
      />
    </div>
  );
});

SavingsActions.displayName = 'SavingsActions';
