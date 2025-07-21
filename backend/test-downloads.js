const mysql = require('mysql2/promise');
require('dotenv').config();

async function testDownloadsEndpoint() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'kpaz_db',
  };

  try {
    console.log('🔍 Verificando tabla downloads...');
    
    const connection = await mysql.createConnection(dbConfig);
    
    // Verificar si la tabla downloads existe
    const [tables] = await connection.execute(`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = ? AND table_name = 'downloads'
    `, [dbConfig.database]);
    
    if (tables[0].count === 0) {
      console.log('❌ Tabla downloads NO existe');
      console.log('💡 Necesitas crear la tabla downloads con esta estructura:');
      console.log(`
CREATE TABLE downloads (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  company varchar(100) DEFAULT NULL,
  position varchar(100) DEFAULT NULL,
  email varchar(254) NOT NULL,
  phone varchar(30) DEFAULT NULL,
  project_start_date date DEFAULT NULL,
  created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
)
      `);
    } else {
      console.log('✅ Tabla downloads existe');
      
      // Verificar estructura de la tabla
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT
        FROM information_schema.columns 
        WHERE table_schema = ? AND table_name = 'downloads'
        ORDER BY ORDINAL_POSITION
      `, [dbConfig.database]);
      
      console.log('📋 Estructura de la tabla downloads:');
      columns.forEach(col => {
        console.log(`  ${col.COLUMN_NAME}: ${col.DATA_TYPE} ${col.IS_NULLABLE === 'NO' ? '(NOT NULL)' : '(NULL)'}`);
      });
      
      // Verificar si hay datos
      const [count] = await connection.execute('SELECT COUNT(*) as count FROM downloads');
      console.log(`📊 Registros en downloads: ${count[0].count}`);
      
      if (count[0].count > 0) {
        const [sampleData] = await connection.execute('SELECT * FROM downloads ORDER BY created_at DESC LIMIT 3');
        console.log('📝 Últimos registros:');
        sampleData.forEach((row, index) => {
          console.log(`  ${index + 1}. ${row.name} (${row.email}) - ${row.created_at}`);
        });
      }
    }
    
    await connection.end();
    
  } catch (error) {
    console.error('❌ Error verificando downloads:', error.message);
  }
}

testDownloadsEndpoint(); 