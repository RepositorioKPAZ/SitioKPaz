
import * as z from "zod";
import { SecurityUtils } from "./security";

// Enhanced validation schemas with security considerations
export const createSecureContactSchema = () => z.object({
  name: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .refine(SecurityUtils.isValidName, "Nombre contiene caracteres no válidos"),
    
  company: z.string()
    .min(2, "La empresa debe tener al menos 2 caracteres")
    .max(100, "El nombre de la empresa no puede exceder 100 caracteres")
    .refine(SecurityUtils.isValidName, "Nombre de empresa contiene caracteres no válidos"),
    
  email: z.string()
    .min(1, "El email es requerido")
    .refine(SecurityUtils.isValidEmail, "Email no válido o contiene contenido sospechoso"),
    
  phone: z.string()
    .min(8, "El teléfono debe tener al menos 8 dígitos")
    .refine(SecurityUtils.isValidPhone, "Formato de teléfono no válido"),
    
  message: z.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres")
    .refine((text) => SecurityUtils.isValidText(text, 1000), "Mensaje contiene contenido no válido")
});

export const createSecureDownloadSchema = () => z.object({
  name: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .refine(SecurityUtils.isValidName, "Nombre contiene caracteres no válidos"),
    
  company: z.string()
    .min(2, "La empresa debe tener al menos 2 caracteres")
    .max(100, "El nombre de la empresa no puede exceder 100 caracteres")
    .refine(SecurityUtils.isValidName, "Nombre de empresa contiene caracteres no válidos"),
    
  position: z.string()
    .min(2, "El cargo debe tener al menos 2 caracteres")
    .max(100, "El cargo no puede exceder 100 caracteres")
    .refine((text) => SecurityUtils.isValidText(text, 100), "Cargo contiene caracteres no válidos"),
    
  email: z.string()
    .min(1, "El email es requerido")
    .refine(SecurityUtils.isValidEmail, "Email no válido o contiene contenido sospechoso"),
    
  phone: z.string()
    .min(8, "El teléfono debe tener al menos 8 dígitos")
    .refine(SecurityUtils.isValidPhone, "Formato de teléfono no válido"),
    
  projectStartDate: z.date({
    required_error: "La fecha de inicio del proyecto es requerida",
  }).refine(
    (date) => date >= new Date(),
    "La fecha debe ser futura"
  )
});

export type SecureContactFormData = z.infer<ReturnType<typeof createSecureContactSchema>>;
export type SecureDownloadFormData = z.infer<ReturnType<typeof createSecureDownloadSchema>>;
