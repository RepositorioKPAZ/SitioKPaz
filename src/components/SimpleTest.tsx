import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const SimpleTest = () => {
  const [testResult, setTestResult] = useState<string>('Pendiente');
  const [loading, setLoading] = useState(false);

  const testBasicConnection = async () => {
    setLoading(true);
    try {
      console.log('🧪 Probando conexión básica...');
      
      const response = await fetch('http://localhost:3001/api/test');
      console.log('📡 Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ Datos recibidos:', data);
        setTestResult('✅ Conexión exitosa');
      } else {
        console.error('❌ Error HTTP:', response.status);
        setTestResult(`❌ Error HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ Error de conexión:', error);
      setTestResult(`❌ Error: ${error instanceof Error ? error.message : 'Desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testBasicConnection();
  }, []);

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-bold mb-2">Prueba Básica de Conexión</h3>
      <div className="mb-2">
        <span className="font-medium">Estado: </span>
        <span className={testResult.includes('✅') ? 'text-green-600' : 'text-red-600'}>
          {testResult}
        </span>
      </div>
      <Button 
        onClick={testBasicConnection} 
        disabled={loading}
        size="sm"
      >
        {loading ? 'Probando...' : 'Reintentar'}
      </Button>
    </div>
  );
}; 