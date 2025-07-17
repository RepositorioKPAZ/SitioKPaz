
import React, { useState, useCallback } from "react";
import { SecureDownloadFormData } from "@/utils/secureFormValidation";

interface FormSubmissionHandlerProps {
  onSubmit: (data: SecureDownloadFormData, calculationData: any) => Promise<void>;
  calculationData: {
    totalSavings: number;
    totalInternalCost: number;
    totalOutsourcingCost: number;
    savingsPercentage: number;
  };
  children: (props: {
    isSubmitting: boolean;
    handleSubmit: (data: SecureDownloadFormData) => Promise<void>;
  }) => React.ReactNode;
}

export const FormSubmissionHandler = React.memo(({
  onSubmit,
  calculationData,
  children
}: FormSubmissionHandlerProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (data: SecureDownloadFormData) => {
    setIsSubmitting(true);
    
    console.log("Datos del formulario:", data);
    console.log("Datos del cálculo:", calculationData);

    try {
      await onSubmit(data, calculationData);
    } finally {
      setIsSubmitting(false);
    }
  }, [onSubmit, calculationData]);

  return children({ isSubmitting, handleSubmit });
});

FormSubmissionHandler.displayName = 'FormSubmissionHandler';
