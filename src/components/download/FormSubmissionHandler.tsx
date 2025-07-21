
import React, { useState, useCallback } from "react";
import { SecureDownloadFormData } from "@/utils/secureFormValidation";
import { downloadsService, DownloadForm } from "@/services/api";
import { downloadSavingsPDF } from "@/utils/pdfGenerator";

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
      const healthCheck = await fetch('http://localhost:3001/api/health');
      console.log("Health check status:", healthCheck.status);
      
      if (!healthCheck.ok) {
        throw new Error(`Backend no responde: ${healthCheck.status}`);
      }

      // Guardar en la base de datos
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

      console.log("📊 Datos a guardar en BD:", downloadData);
      console.log("🌐 URL de la API:", 'http://localhost:3001/api/downloads');
      
      const result = await downloadsService.save(downloadData);
      console.log("✅ Download guardado con ID:", result.id);

      // Generar y descargar PDF
      console.log("📄 Generando PDF...");
      console.log("📄 Datos de cálculo para PDF:", calculationData);
      console.log("📄 Datos del formulario para PDF:", downloadData);
      console.log("📄 Datos de perfiles para PDF:", perfilesData.length);
      downloadSavingsPDF(calculationData, {
        ...downloadData,
        projectStartDate: data.projectStartDate ? (typeof data.projectStartDate === 'string' ? data.projectStartDate : new Date(data.projectStartDate).toISOString().split('T')[0]) : undefined
      }, perfilesData);
      console.log("✅ PDF generado y descargado");

      // Continuar con el flujo normal
      await onSubmit(data, calculationData);
      
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
