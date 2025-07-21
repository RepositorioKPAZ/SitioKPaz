
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DownloadForm } from "./download/DownloadForm";

interface DownloadCalculationFormProps {
  totalSavings: number;
  totalInternalCost: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
  teamMembers: any[]; // Nuevo: perfiles seleccionados
  projectDuration: number[]; // Nuevo: duración real
  hiringDelay: number; // Nuevo: demora real
  perfilesData?: any[];
}

export const DownloadCalculationForm = ({
  totalSavings,
  totalInternalCost,
  totalOutsourcingCost,
  savingsPercentage,
  teamMembers,
  projectDuration,
  hiringDelay,
  perfilesData = []
}: DownloadCalculationFormProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          size="lg" 
          className="border-2 border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Descargar Análisis Detallado
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-2">
          <DialogTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <FileText className="w-5 h-5 text-[#2e4bce]" />
            Descarga tu Análisis Detallado
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            Completa tus datos para recibir el reporte completo con los cálculos de ahorro.
          </DialogDescription>
        </DialogHeader>

        <DownloadForm
          totalSavings={totalSavings}
          totalInternalCost={totalInternalCost}
          totalOutsourcingCost={totalOutsourcingCost}
          savingsPercentage={savingsPercentage}
          teamMembers={teamMembers}
          projectDuration={projectDuration}
          hiringDelay={hiringDelay}
          perfilesData={perfilesData}
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
