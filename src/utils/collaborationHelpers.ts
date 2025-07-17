import { collaborationModelsData } from "@/data/collaborationModels";
import { CollaborationModelData } from "@/types/collaborationModel";

/**
 * Obtiene los datos de un modelo de colaboración por su ID
 */
export const getCollaborationModelData = (modelId: string): CollaborationModelData | null => {
  return collaborationModelsData[modelId] || null;
};

/**
 * Obtiene todos los modelos de colaboración disponibles
 */
export const getAllCollaborationModels = (): CollaborationModelData[] => {
  return Object.values(collaborationModelsData);
};

/**
 * Busca un modelo por título (útil para búsquedas flexibles)
 */
export const findModelByTitle = (title: string): CollaborationModelData | null => {
  return Object.values(collaborationModelsData).find(model => 
    model.title.toLowerCase().includes(title.toLowerCase())
  ) || null;
};