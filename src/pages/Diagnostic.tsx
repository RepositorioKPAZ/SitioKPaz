import { TestBackend } from '@/components/TestBackend';
import { SimpleTest } from '@/components/SimpleTest';

export default function Diagnostic() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Diagnóstico del Backend</h1>
        
        <div className="space-y-8">
          <SimpleTest />
          <TestBackend />
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold mb-2">📋 Instrucciones de Diagnóstico:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Abre la consola del navegador (F12)</li>
            <li>Revisa los mensajes de log en la consola</li>
            <li>Verifica el estado de las pruebas arriba</li>
            <li>Si hay errores, compártelos para diagnóstico</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 