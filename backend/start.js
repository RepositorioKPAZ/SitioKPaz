const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando servidor backend...');
console.log('');

// Verificar si existe package.json
if (!fs.existsSync(path.join(__dirname, 'package.json'))) {
  console.error('❌ package.json no encontrado');
  console.log('💡 Asegúrate de estar en el directorio backend/');
  process.exit(1);
}

// Verificar si existe node_modules
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('📦 Instalando dependencias...');
  try {
    execSync('npm install', { stdio: 'inherit', cwd: __dirname });
    console.log('✅ Dependencias instaladas');
  } catch (error) {
    console.error('❌ Error instalando dependencias:', error.message);
    process.exit(1);
  }
}

// Verificar si existe .env
if (!fs.existsSync(path.join(__dirname, '.env'))) {
  console.log('📝 Creando archivo .env...');
  try {
    fs.copyFileSync(path.join(__dirname, 'env.example'), path.join(__dirname, '.env'));
    console.log('✅ Archivo .env creado (usa las credenciales por defecto)');
  } catch (error) {
    console.error('❌ Error creando .env:', error.message);
    process.exit(1);
  }
}

// Probar conexión a la base de datos
console.log('🔌 Probando conexión a la base de datos...');
try {
  require('./test-connection');
} catch (error) {
  console.error('❌ Error en la prueba de conexión:', error.message);
}

console.log('');
console.log('🌐 Iniciando servidor...');
console.log('📡 El servidor estará disponible en http://localhost:3001');
console.log('🔍 Puedes probar: http://localhost:3001/api/health');
console.log('');

// Iniciar el servidor
try {
  require('./server');
} catch (error) {
  console.error('❌ Error iniciando servidor:', error.message);
  process.exit(1);
} 