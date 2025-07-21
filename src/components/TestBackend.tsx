import { useState, useEffect } from 'react';
import { perfilesService } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const TestBackend = () => {
  const [healthStatus, setHealthStatus] = useState<string>('Pendiente');
  const [roles, setRoles] = useState<string[]>([]);
  const [seniorities, setSeniorities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<any>({});

  const testBackend = async () => {
    setLoading(true);
    setError(null);
    setTestResults({});
    
    try {
      console.log('🧪 Iniciando pruebas del backend...');
      
      // Test 1: Health Check
      console.log('🏥 Probando health check...');
      try {
        const isHealthy = await perfilesService.healthCheck();
        setHealthStatus(isHealthy ? '✅ Conectado' : '❌ No conectado');
        setTestResults(prev => ({ ...prev, health: isHealthy }));
        console.log('Health check result:', isHealthy);
      } catch (error) {
        console.error('❌ Error en health check:', error);
        setHealthStatus('❌ Error en health check');
        setTestResults(prev => ({ ...prev, health: false, healthError: error }));
      }
      
      // Test 2: Obtener roles únicos
      console.log('📋 Probando obtención de roles...');
      try {
        const uniqueRoles = await perfilesService.getUnique();
        const rolesList = uniqueRoles.map(profile => profile.rol);
        setRoles(rolesList);
        setTestResults(prev => ({ ...prev, roles: rolesList }));
        console.log('Roles encontrados:', rolesList);
      } catch (error) {
        console.error('❌ Error obteniendo roles:', error);
        setError(`Error obteniendo roles: ${error instanceof Error ? error.message : 'Desconocido'}`);
        setTestResults(prev => ({ ...prev, roles: [], rolesError: error }));
      }
      
      // Test 3: Obtener seniorities únicos
      console.log('👥 Probando obtención de seniorities...');
      try {
        const uniqueSeniorities = await perfilesService.getSeniorities();
        const senioritiesList = uniqueSeniorities.map(profile => profile.seniority);
        setSeniorities(senioritiesList);
        setTestResults(prev => ({ ...prev, seniorities: senioritiesList }));
        console.log('Seniorities encontrados:', senioritiesList);
      } catch (error) {
        console.error('❌ Error obteniendo seniorities:', error);
        setError(`Error obteniendo seniorities: ${error instanceof Error ? error.message : 'Desconocido'}`);
        setTestResults(prev => ({ ...prev, seniorities: [], senioritiesError: error }));
      }
      
      // Test 4: Obtener todos los perfiles
      console.log('📊 Probando obtención de todos los perfiles...');
      try {
        const allPerfiles = await perfilesService.getAll();
        setTestResults(prev => ({ ...prev, allPerfiles: allPerfiles.length }));
        console.log('Total de perfiles encontrados:', allPerfiles.length);
      } catch (error) {
        console.error('❌ Error obteniendo todos los perfiles:', error);
        setTestResults(prev => ({ ...prev, allPerfiles: 0, allPerfilesError: error }));
      }
      
      console.log('✅ Todas las pruebas completadas');
      
    } catch (err) {
      console.error('❌ Error general en las pruebas:', err);
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testBackend();
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>🧪 Pruebas del Backend</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Estado del servidor:</span>
          <span className={healthStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}>
            {healthStatus}
          </span>
        </div>
        
        <div className="space-y-2">
          <span className="font-medium">Roles encontrados ({roles.length}):</span>
          <div className="bg-gray-50 p-2 rounded text-sm">
            {roles.length > 0 ? (
              <ul className="list-disc list-inside">
                {roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            ) : (
              <span className="text-gray-500">No se encontraron roles</span>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <span className="font-medium">Seniorities encontrados ({seniorities.length}):</span>
          <div className="bg-gray-50 p-2 rounded text-sm">
            {seniorities.length > 0 ? (
              <ul className="list-disc list-inside">
                {seniorities.map((seniority, index) => (
                  <li key={index}>{seniority}</li>
                ))}
              </ul>
            ) : (
              <span className="text-gray-500">No se encontraron seniorities</span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <span className="font-medium">Resultados detallados:</span>
          <div className="bg-gray-50 p-2 rounded text-sm">
            <pre className="text-xs overflow-auto">
              {JSON.stringify(testResults, null, 2)}
            </pre>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <span className="text-red-800 font-medium">Error:</span>
            <p className="text-red-700 text-sm mt-1">{error}</p>
          </div>
        )}
        
        <Button 
          onClick={testBackend} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Probando...' : 'Reintentar Pruebas'}
        </Button>
      </CardContent>
    </Card>
  );
}; 