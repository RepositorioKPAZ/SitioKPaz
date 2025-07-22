// Tipos para la API
export interface Perfil {
  id: number;
  rol: string;
  seniority: string;
  tarifa_uf: number | null;
  tarifa_usd: number | null;
  sueldo_clp: number | null;
  sueldo_usd: number | null;
  bonos: number | null;
  aguinaldos: number | null;
  otros_ben: number | null;
  cotiz_prev: number | null;
  imptos: number | null;
  moviliz: number | null;
  colacion: number | null;
  internet: number | null;
  prov_vac: number | null;
  prov_finiq: number | null;
  costo_adm: number | null;
  costo_mes: number | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Tipos para downloads
export interface DownloadForm {
  name: string;
  company?: string;
  position?: string;
  email: string;
  phone?: string;
  project_start_date?: string;
  DelayInterno?: number;
  DuracionProyecto?: number;
  /**
   * Perfiles seleccionados por el usuario al descargar el análisis
   */
  profiles?: Array<{
    id?: number;
    rol: string;
    seniority: string;
    cantidad?: number;
  }>;
}

// Configuración de la API
export const API_BASE_URL = 'https://kpazserv0018-djcqb2ecg5hfgcdw.eastus-01.azurewebsites.net/api';

// Función para manejar errores de fetch
const handleResponse = async (response: Response) => {
  console.log(`📡 Response status: ${response.status}`);
  console.log(`📡 Response headers:`, response.headers);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('❌ API Error:', errorData);
    throw new Error(errorData.message || `Error HTTP: ${response.status}`);
  }
  
  const data = await response.json();
  console.log('✅ API Response:', data);
  return data;
};

// Servicio para perfiles
export const perfilesService = {
  // Obtener todos los perfiles
  async getAll(): Promise<Perfil[]> {
    try {
      console.log('📡 GET /api/perfiles');
      const response = await fetch(`${API_BASE_URL}/perfiles`);
      const data: ApiResponse<Perfil[]> = await handleResponse(response);
      return data.data;
    } catch (error) {
      console.error('❌ Error obteniendo perfiles:', error);
      throw error;
    }
  },

  // Obtener roles únicos (sin duplicados)
  async getUnique(): Promise<{ rol: string }[]> {
    try {
      console.log('📡 GET /api/perfiles/unique');
      const response = await fetch(`${API_BASE_URL}/perfiles/unique`);
      const data: ApiResponse<{ rol: string }[]> = await handleResponse(response);
      return data.data;
    } catch (error) {
      console.error('❌ Error obteniendo perfiles únicos:', error);
      throw error;
    }
  },

  // Obtener seniorities únicos
  async getSeniorities(): Promise<{ seniority: string }[]> {
    try {
      console.log('📡 GET /api/perfiles/seniorities');
      const response = await fetch(`${API_BASE_URL}/perfiles/seniorities`);
      const data: ApiResponse<{ seniority: string }[]> = await handleResponse(response);
      return data.data;
    } catch (error) {
      console.error('❌ Error obteniendo seniorities:', error);
      throw error;
    }
  },

  // Obtener perfiles por rol
  async getByRol(rol: string): Promise<Perfil[]> {
    try {
      console.log(`📡 GET /api/perfiles/rol/${encodeURIComponent(rol)}`);
      const response = await fetch(`${API_BASE_URL}/perfiles/rol/${encodeURIComponent(rol)}`);
      const data: ApiResponse<Perfil[]> = await handleResponse(response);
      return data.data;
    } catch (error) {
      console.error('❌ Error obteniendo perfiles por rol:', error);
      throw error;
    }
  },

  // Obtener un perfil específico
  async getById(id: number): Promise<Perfil> {
    try {
      console.log(`📡 GET /api/perfiles/${id}`);
      const response = await fetch(`${API_BASE_URL}/perfiles/${id}`);
      const data: ApiResponse<Perfil> = await handleResponse(response);
      return data.data;
    } catch (error) {
      console.error('❌ Error obteniendo perfil:', error);
      throw error;
    }
  },

  // Verificar salud del servidor
  async healthCheck(): Promise<boolean> {
    try {
      console.log('📡 GET /api/health');
      const response = await fetch(`${API_BASE_URL}/health`);
      const data: ApiResponse<any> = await handleResponse(response);
      return data.success;
    } catch (error) {
      console.error('❌ Error en health check:', error);
      return false;
    }
  }
};

// Servicio para downloads
export const downloadsService = {
  // Guardar download
  async save(downloadData: DownloadForm): Promise<{ id: number }> {
    try {
      console.log('📡 POST /api/downloads', downloadData);
      console.log('📡 URL completa:', `${API_BASE_URL}/downloads`);
      
      const response = await fetch(`${API_BASE_URL}/downloads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(downloadData),
      });
      
      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('📡 Error response:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const data: ApiResponse<{ id: number }> = await handleResponse(response);
      console.log('✅ Download guardado exitosamente:', data);
      return data.data;
    } catch (error) {
      console.error('❌ Error guardando download:', error);
      console.error('❌ Error details:', {
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : 'No stack'
      });
      throw error;
    }
  },

  // Obtener todos los downloads (para administración)
  async getAll(): Promise<DownloadForm[]> {
    try {
      console.log('📡 GET /api/downloads');
      const response = await fetch(`${API_BASE_URL}/downloads`);
      const data: ApiResponse<DownloadForm[]> = await handleResponse(response);
      return data.data;
    } catch (error) {
      console.error('❌ Error obteniendo downloads:', error);
      throw error;
    }
  }
};

// Hook personalizado para usar la API
export const usePerfilesAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPerfiles = async (): Promise<Perfil[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const perfiles = await perfilesService.getAll();
      return perfiles;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchUniquePerfiles = async (): Promise<{ rol: string }[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const perfiles = await perfilesService.getUnique();
      return perfiles;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchSeniorities = async (): Promise<{ seniority: string }[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const seniorities = await perfilesService.getSeniorities();
      return seniorities;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    fetchPerfiles,
    fetchUniquePerfiles,
    fetchSeniorities
  };
};

// Importar useState para el hook
import { useState } from 'react'; 