const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'kpaz_db',
  };

  console.log('🔧 Configuración de la base de datos:');
  console.log('Host:', dbConfig.host);
  console.log('User:', dbConfig.user);
  console.log('Database:', dbConfig.database);
  console.log('Password:', dbConfig.password ? '***' : '(vacío)');
  console.log('');

  try {
    console.log('🔌 Intentando conectar a la base de datos...');
    const connection = await mysql.createConnection(dbConfig);
    console.log('✅ Conexión exitosa a MySQL');

    // Verificar si la tabla perfiles existe
    console.log('📋 Verificando tabla perfiles...');
    const [tables] = await connection.execute(`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = ? AND table_name = 'perfiles'
    `, [dbConfig.database]);

    if (tables[0].count === 0) {
      console.log('❌ Tabla perfiles no encontrada');
      console.log('💡 Por favor, crea la tabla con la estructura proporcionada');
    } else {
      console.log('✅ Tabla perfiles encontrada');
      
      // Verificar datos en la tabla
      const [rows] = await connection.execute('SELECT COUNT(*) as count FROM perfiles');
      console.log(`📊 Registros en la tabla: ${rows[0].count}`);
      
      if (rows[0].count > 0) {
        // Mostrar algunos ejemplos
        const [sampleData] = await connection.execute('SELECT rol, seniority FROM perfiles LIMIT 5');
        console.log('📝 Ejemplos de datos:');
        sampleData.forEach(row => {
          console.log(`  - ${row.rol} (${row.seniority})`);
        });
      } else {
        console.log('⚠️ La tabla está vacía');
      }
    }

    await connection.end();
    console.log('✅ Prueba completada exitosamente');

  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    console.log('');
    console.log('🔧 Posibles soluciones:');
    console.log('1. Verifica que MySQL esté ejecutándose');
    console.log('2. Confirma las credenciales en .env');
    console.log('3. Asegúrate de que la base de datos exista');
    console.log('4. Verifica que el usuario tenga permisos');
  }
}

testConnection(); 