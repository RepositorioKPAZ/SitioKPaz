const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkData() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'kpaz_db',
  };

  try {
    console.log('🔍 Verificando datos en la tabla perfiles...');
    
    const connection = await mysql.createConnection(dbConfig);
    
    // Verificar si hay datos
    const [countResult] = await connection.execute('SELECT COUNT(*) as count FROM perfiles');
    const totalRecords = countResult[0].count;
    
    console.log(`📊 Total de registros en perfiles: ${totalRecords}`);
    
    if (totalRecords === 0) {
      console.log('⚠️ La tabla perfiles está vacía');
      console.log('💡 Necesitas insertar datos en la tabla');
    } else {
      // Mostrar algunos ejemplos con tarifa_usd
      const [sampleData] = await connection.execute('SELECT rol, seniority, tarifa_usd FROM perfiles LIMIT 15');
      console.log('📝 Ejemplos de datos con tarifa_usd:');
      sampleData.forEach((row, index) => {
        console.log(`  ${index + 1}. ${row.rol} (${row.seniority}) - $${row.tarifa_usd || 'NULL'}`);
      });
      
      // Verificar roles únicos
      const [uniqueRoles] = await connection.execute('SELECT DISTINCT rol FROM perfiles WHERE rol IS NOT NULL');
      console.log(`\n🎯 Roles únicos encontrados: ${uniqueRoles.length}`);
      uniqueRoles.forEach((row, index) => {
        console.log(`  ${index + 1}. ${row.rol}`);
      });
      
      // Verificar seniorities únicos
      const [uniqueSeniorities] = await connection.execute('SELECT DISTINCT seniority FROM perfiles WHERE seniority IS NOT NULL');
      console.log(`\n👥 Seniorities únicos encontrados: ${uniqueSeniorities.length}`);
      uniqueSeniorities.forEach((row, index) => {
        console.log(`  ${index + 1}. ${row.seniority}`);
      });

      // Mostrar combinaciones rol-seniority con tarifa
      console.log('\n💰 Combinaciones Rol-Seniority con Tarifa:');
      const [combinations] = await connection.execute(`
        SELECT rol, seniority, tarifa_usd 
        FROM perfiles 
        WHERE rol IS NOT NULL AND seniority IS NOT NULL 
        ORDER BY rol, seniority
      `);
      
      combinations.forEach((row, index) => {
        console.log(`  ${index + 1}. ${row.rol} | ${row.seniority} | $${row.tarifa_usd || 'NULL'}`);
      });
    }
    
    await connection.end();
    
  } catch (error) {
    console.error('❌ Error verificando datos:', error.message);
  }
}

checkData(); 