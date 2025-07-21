const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:8081', 'http://127.0.0.1:8081', 'http://localhost:8080', 'http://127.0.0.1:8080'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 requests por ventana
});
app.use(limiter);

// Middleware para logging
app.use((req, res, next) => {
  console.log(`📥 ${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Middleware para parsear JSON
app.use(express.json());

// Configuración de la base de datos
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'kpaz_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Pool de conexiones
let pool;

// Función para inicializar la base de datos
async function initializeDatabase() {
  try {
    pool = mysql.createPool(dbConfig);
    
    // Verificar si la tabla perfiles existe
    const [tables] = await pool.execute(`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = ? AND table_name = 'perfiles'
    `, [dbConfig.database]);
    
    if (tables[0].count === 0) {
      console.log('Tabla perfiles no encontrada. Por favor, crea la tabla manualmente con la estructura proporcionada.');
      console.log('CREATE TABLE `perfiles` (');
      console.log('  `id` int NOT NULL AUTO_INCREMENT,');
      console.log('  `rol` varchar(100) DEFAULT NULL,');
      console.log('  `seniority` varchar(50) DEFAULT NULL,');
      console.log('  `tarifa_uf` decimal(10,2) DEFAULT NULL,');
      console.log('  `tarifa_usd` decimal(10,2) DEFAULT NULL,');
      console.log('  `sueldo_clp` bigint DEFAULT NULL,');
      console.log('  `sueldo_usd` decimal(10,2) DEFAULT NULL,');
      console.log('  `bonos` decimal(10,2) DEFAULT NULL,');
      console.log('  `aguinaldos` decimal(10,2) DEFAULT NULL,');
      console.log('  `otros_ben` decimal(10,2) DEFAULT NULL,');
      console.log('  `cotiz_prev` decimal(10,2) DEFAULT NULL,');
      console.log('  `imptos` decimal(10,2) DEFAULT NULL,');
      console.log('  `moviliz` int DEFAULT NULL,');
      console.log('  `colacion` int DEFAULT NULL,');
      console.log('  `internet` int DEFAULT NULL,');
      console.log('  `prov_vac` decimal(10,2) DEFAULT NULL,');
      console.log('  `prov_finiq` decimal(10,2) DEFAULT NULL,');
      console.log('  `costo_adm` decimal(10,2) DEFAULT NULL,');
      console.log('  `costo_mes` decimal(10,2) DEFAULT NULL,');
      console.log('  PRIMARY KEY (`id`)');
      console.log(')');
    } else {
      console.log('Tabla perfiles encontrada. Verificando datos...');
      
      // Verificar si hay datos en la tabla
      const [rows] = await pool.execute('SELECT COUNT(*) as count FROM perfiles');
      if (rows[0].count === 0) {
        console.log('Tabla perfiles está vacía. Considera insertar datos de ejemplo.');
      } else {
        console.log(`Tabla perfiles tiene ${rows[0].count} registros.`);
      }
    }
    
    console.log('Base de datos inicializada correctamente');
  } catch (error) {
    console.error('Error inicializando la base de datos:', error);
    console.log('Asegúrate de que:');
    console.log('1. MySQL esté ejecutándose');
    console.log('2. La base de datos exista');
    console.log('3. Las credenciales en .env sean correctas');
    process.exit(1);
  }
}

// Ruta para obtener todos los perfiles
app.get('/api/perfiles', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM perfiles ORDER BY rol, seniority');
    res.json({
      success: true,
      data: rows,
      message: `${rows.length} perfiles encontrados`
    });
  } catch (error) {
    console.error('Error obteniendo perfiles:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
});

// Ruta para obtener roles únicos (sin duplicados)
app.get('/api/perfiles/unique', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT DISTINCT rol FROM perfiles WHERE rol IS NOT NULL ORDER BY rol');
    res.json({
      success: true,
      data: rows.map(row => ({ rol: row.rol })),
      message: `${rows.length} roles únicos encontrados`
    });
  } catch (error) {
    console.error('Error obteniendo perfiles únicos:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
});

// Ruta para obtener seniorities únicos
app.get('/api/perfiles/seniorities', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT DISTINCT seniority FROM perfiles WHERE seniority IS NOT NULL ORDER BY seniority');
    res.json({
      success: true,
      data: rows.map(row => ({ seniority: row.seniority })),
      message: `${rows.length} seniorities únicos encontrados`
    });
  } catch (error) {
    console.error('Error obteniendo seniorities:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
});

// Ruta para obtener perfiles por rol
app.get('/api/perfiles/rol/:rol', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM perfiles WHERE rol = ? ORDER BY seniority', [req.params.rol]);
    res.json({
      success: true,
      data: rows,
      message: `${rows.length} perfiles encontrados para el rol ${req.params.rol}`
    });
  } catch (error) {
    console.error('Error obteniendo perfiles por rol:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
});

// Ruta para obtener un perfil específico
app.get('/api/perfiles/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM perfiles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Perfil no encontrado'
      });
    }
    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
});

// Ruta de prueba simple
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Backend funcionando correctamente',
    timestamp: new Date().toISOString(),
    test: 'Este es un endpoint de prueba'
  });
});

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Servidor funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Ruta para guardar downloads
app.post('/api/downloads', async (req, res) => {
  try {
    console.log('📥 Recibiendo datos de download:', req.body);
    
    const { name, company, position, email, phone, project_start_date } = req.body;
    
    // Validar campos obligatorios
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Nombre y email son obligatorios'
      });
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Formato de email inválido'
      });
    }
    
    // Insertar en la base de datos (sin validación de email único)
    const [result] = await pool.execute(
      'INSERT INTO downloads (name, company, position, email, phone, project_start_date) VALUES (?, ?, ?, ?, ?, ?)',
      [name, company || null, position || null, email, phone || null, project_start_date || null]
    );
    
    console.log('✅ Download guardado con ID:', result.insertId);
    
    res.json({
      success: true,
      message: 'Información guardada exitosamente',
      data: { id: result.insertId }
    });
    
  } catch (error) {
    console.error('❌ Error guardando download:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

// Ruta para obtener downloads (opcional, para administración)
app.get('/api/downloads', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM downloads ORDER BY created_at DESC');
    
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('❌ Error obteniendo downloads:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

// Inicializar servidor
async function startServer() {
  await initializeDatabase();
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📊 API de perfiles disponible en http://localhost:${PORT}/api/perfiles`);
  });
}

startServer().catch(console.error); 