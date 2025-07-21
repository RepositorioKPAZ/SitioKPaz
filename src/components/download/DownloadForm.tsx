
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormFields } from "./FormFields";
import { AnalysisInfo } from "./AnalysisInfo";
import { FormSubmissionHandler } from "./FormSubmissionHandler";
import { createSecureDownloadSchema, type SecureDownloadFormData } from "@/utils/secureFormValidation";
import { SecurityUtils, RateLimiter } from "@/utils/security";
import { SecurityErrorBoundary } from "@/components/security/SecurityErrorBoundary";

interface DownloadFormProps {
  totalSavings: number;
  totalInternalCost: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
  teamMembers: any[]; // Nuevo: perfiles seleccionados
  projectDuration: number[]; // Nuevo: duración real
  hiringDelay: number; // Nuevo: demora real
  perfilesData?: any[];
  onClose: () => void;
}

export const DownloadForm = ({
  totalSavings,
  totalInternalCost,
  totalOutsourcingCost,
  savingsPercentage,
  teamMembers,
  projectDuration,
  hiringDelay,
  perfilesData = [],
  onClose
}: DownloadFormProps) => {
  const formSchema = createSecureDownloadSchema();
  
  const form = useForm<SecureDownloadFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
      projectStartDate: undefined,
    },
  });

  const handleFormSubmit = async (data: SecureDownloadFormData, calculationData: any) => {
    // Rate limiting check
    const clientId = `download_${data.email}`;
    if (!RateLimiter.canAttempt(clientId, 2, 600000)) { // 2 attempts per 10 minutes
      SecurityUtils.logSecurityEvent('DOWNLOAD_RATE_LIMIT_EXCEEDED', {
        email: data.email,
        form: 'download'
      });
      
      alert("Has realizado demasiadas descargas. Por favor, espera unos minutos antes de intentar nuevamente.");
      return;
    }

    // Sanitize all form data
    const sanitizedData = {
      name: SecurityUtils.sanitizeInput(data.name),
      company: SecurityUtils.sanitizeInput(data.company),
      position: SecurityUtils.sanitizeInput(data.position),
      email: SecurityUtils.sanitizeInput(data.email),
      phone: SecurityUtils.sanitizeInput(data.phone),
      projectStartDate: data.projectStartDate
    };

    // Log the secure form submission
    SecurityUtils.logSecurityEvent('SECURE_DOWNLOAD_REQUESTED', {
      form: 'download',
      calculationData: {
        totalSavings,
        savingsPercentage
      },
      timestamp: new Date().toISOString()
    });

    console.log("Secure download form submitted:", sanitizedData);
    console.log("Calculation data:", calculationData);

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("¡Perfecto! En breve recibirás el análisis detallado en tu email. Nuestro equipo se pondrá en contacto contigo para conversar sobre los resultados.");
    
    onClose();
    form.reset();
  };

  const calculationData = {
    totalSavings,
    totalInternalCost,
    totalOutsourcingCost,
    savingsPercentage,
    projectDuration, // Usar valor real
    hiringDelay,     // Usar valor real
    teamMembers // Usar los perfiles seleccionados reales
  };

  return (
    <SecurityErrorBoundary>
      <FormSubmissionHandler
        onSubmit={handleFormSubmit}
        calculationData={calculationData}
        perfilesData={perfilesData}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
              <FormFields control={form.control} />
              <AnalysisInfo />
              
              <div className="flex gap-3 pt-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 h-9"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#2e4bce] hover:bg-[#2e4bce]/90 h-9"
                >
                  {isSubmitting ? "Generando..." : "Descargar Análisis"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </FormSubmissionHandler>
    </SecurityErrorBoundary>
  );
};
