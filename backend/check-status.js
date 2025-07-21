const http = require('http');

function checkBackendStatus() {
  console.log('🔍 Verificando estado del backend...');
  
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/health',
    method: 'GET',
    timeout: 5000
  };

  const req = http.request(options, (res) => {
    console.log(`📡 Status: ${res.statusCode}`);
    console.log(`📡 Headers:`, res.headers);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log('✅ Backend responde correctamente:');
        console.log('   - Success:', response.success);
        console.log('   - Message:', response.message);
        console.log('   - Timestamp:', response.timestamp);
      } catch (error) {
        console.log('⚠️ Respuesta no es JSON válido:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Error conectando al backend:', error.message);
    console.log('');
    console.log('🔧 Posibles soluciones:');
    console.log('1. Verifica que el backend esté corriendo');
    console.log('2. Verifica que esté en el puerto 3001');
    console.log('3. Verifica que no haya errores en la terminal del backend');
  });

  req.on('timeout', () => {
    console.error('⏰ Timeout: El backend no responde');
    req.destroy();
  });

  req.end();
}

checkBackendStatus(); 