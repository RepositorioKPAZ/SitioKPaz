
export interface FormData {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  projectStartDate: Date;
}

// Export the secure type as well for consistency
export type { SecureDownloadFormData } from "@/utils/secureFormValidation";
