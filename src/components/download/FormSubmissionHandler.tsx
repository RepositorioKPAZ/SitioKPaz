
import React, { useState, useCallback } from "react";
import { SecureDownloadFormData } from "@/utils/secureFormValidation";
import { downloadsService, DownloadForm, API_BASE_URL } from "@/services/api";
import { downloadSavingsPDF, getSavingsPDFBlob } from "@/utils/pdfGenerator";

interface FormSubmissionHandlerProps {
  onSubmit: (data: SecureDownloadFormData, calculationData: any) => Promise<void>;
  calculationData: {
    totalSavings: number;
    totalInternalCost: number;
    totalOutsourcingCost: number;
    savingsPercentage: number;
    projectDuration: number[];
    hiringDelay: number;
    teamMembers: any[];
  };
  perfilesData?: any[]; // Agregar datos de perfiles
  children: (props: {
    isSubmitting: boolean;
    handleSubmit: (data: SecureDownloadFormData) => Promise<void>;
  }) => React.ReactNode;
}

export const FormSubmissionHandler = React.memo(({
  onSubmit,
  calculationData,
  perfilesData = [], // Valor por defecto
  children
}: FormSubmissionHandlerProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (data: SecureDownloadFormData) => {
    setIsSubmitting(true);
    
    console.log("🚀 Iniciando proceso de descarga...");
    console.log("Datos del formulario:", data);
    console.log("Datos del cálculo:", calculationData);
    console.log("Datos de perfiles:", perfilesData.length);

      

    try {
      // Verificar conexión con el backend primero
      console.log("🔍 Verificando conexión con el backend...");
      const healthCheck = await fetch(`${API_BASE_URL}/health`);
      console.log("Health check status:", healthCheck.status);
      
      if (!healthCheck.ok) {
        throw new Error(`Backend no responde: ${healthCheck.status}`);
      }
      console.log("Paso el IF");
      // Guardar en la base de datos y enviar PDF por correo
      const downloadData: DownloadForm = {
        name: data.name,
        company: data.company || undefined,
        position: data.position || undefined,
        email: data.email,
        phone: data.phone || undefined,
        project_start_date: data.projectStartDate ? (typeof data.projectStartDate === 'string' ? data.projectStartDate : new Date(data.projectStartDate).toISOString().split('T')[0]) : undefined,
        DelayInterno: calculationData.hiringDelay,
        DuracionProyecto: Array.isArray(calculationData.projectDuration) ? calculationData.projectDuration[0] : calculationData.projectDuration,
        profiles: calculationData.teamMembers?.map((p: any) => ({
          rol: p.role,
          seniority: p.seniority,
          cantidad: p.quantity != null ? p.quantity : 1
        })) || []
      };
      
      

   
  

      /*const result = await response.json();
       if (response.ok && result.success) {*/
        //alert(result.message || '¡Perfecto! En breve recibirás el análisis detallado en tu email.');
        // Descargar PDF en el navegador
        downloadSavingsPDF(calculationData, {
          ...downloadData,
          projectStartDate: data.projectStartDate ? (typeof data.projectStartDate === 'string' ? data.projectStartDate : new Date(data.projectStartDate).toISOString().split('T')[0]) : undefined
        }, perfilesData);


        // Enviar PDF al backend como archivo adjunto
        const pdfBlob = await getSavingsPDFBlob(calculationData, {
          ...downloadData,
          projectStartDate: data.projectStartDate ? (typeof data.projectStartDate === 'string' ? data.projectStartDate : new Date(data.projectStartDate).toISOString().split('T')[0]) : undefined
        }, perfilesData);
        const formData = new FormData();
        formData.append('pdf', pdfBlob, 'calculo-ahorro-kpaz.pdf');
        formData.append('data', JSON.stringify(downloadData));

        console.log('FormData keys:', Array.from(formData.keys()));
        console.log('FormData data:', formData.get('data'));
        console.log('FormData pdf:', formData.get('pdf'));

        await fetch(`${API_BASE_URL}/send-analysis`, {
          method: 'POST',
          body: formData
        });
        await onSubmit(data, calculationData);
      /*} else {
        throw new Error(result.message || 'Error enviando el análisis.');
        console.log("En el ");
      }*/
      
    } catch (error) {
      console.error("❌ Error en el proceso:", error);
      console.error("Tipo de error:", typeof error);
      console.error("Mensaje de error:", error instanceof Error ? error.message : error);
      console.error("Stack trace:", error instanceof Error ? error.stack : 'No stack trace');
      
      // Mostrar error específico
      if (error instanceof Error) {
        if (error.message.includes('Backend no responde')) {
          alert("Error: El servidor no está respondiendo. Verifica que el backend esté ejecutándose en el puerto 3001.");
        } else if (error.message.includes('obligatorios')) {
          alert("Por favor, completa todos los campos obligatorios.");
        } else if (error.message.includes('Failed to fetch')) {
          alert("Error de conexión con el servidor. Verifica que el backend esté ejecutándose.");
        } else {
          alert(`Error al guardar la información: ${error.message}`);
        }
      } else {
        alert("Error inesperado. Por favor, intenta nuevamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [onSubmit, calculationData, perfilesData]);

  return children({ isSubmitting, handleSubmit });
});

FormSubmissionHandler.displayName = 'FormSubmissionHandler';
