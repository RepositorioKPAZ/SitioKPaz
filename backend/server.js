const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:8081',
    'http://127.0.0.1:8081',
    'http://localhost:8080',
    'http://127.0.0.1:8080',
    'https://kpazserv0015-a8htfrascdgsczf3.eastus-01.azurewebsites.net'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Texto extra
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 requests por ventana
});
app.use(limiter);
app.use(express.json());

// Endpoint para enviar análisis detallado por correo (ahora acepta PDF adjunto)
app.post('/api/send-analysis', upload.single('pdf'), async (req, res) => {
  console.log('req.body:', req.body);
  console.log('req.file:', req.file);
  try {
    // Los datos del formulario vienen en req.body.data (string JSON)
    if (!req.body.data) {
      return res.status(400).json({ success: false, message: 'No se recibieron los datos del formulario.' });
    }
    let data;
    try {
      data = JSON.parse(req.body.data);
    } catch (e) {
      return res.status(400).json({ success: false, message: 'El campo data no es un JSON válido.' });
    }
    const { name, email } = data;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Nombre y email son obligatorios' });
    }
    // El PDF viene en req.file
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se adjuntó el PDF.' });
    }
    // 2. Configurar nodemailer
    console.log('Intentando conectar con SMTP usando:');
    console.log('  Usuario:', process.env.SMTP_USER);
    console.log('  Servidor:', process.env.SMTP_HOST);
    console.log('  Contraseña:', process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(0,3) + '...' : 'NO DEFINIDA');
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    // 3. Enviar correo con el PDF recibido
    let mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@kpaz.la',
      to: email,
      cc: process.env.SMTP_CC || 'contacto@kpaz.la',
      subject: 'Tu análisis detallado de ahorro KPaz',
      text: `Hola ${name},\n\nAdjuntamos el análisis detallado solicitado. Nuestro equipo se pondrá en contacto contigo para conversar sobre los resultados.`,
      attachments: [
        {
          filename: 'calculo-ahorro-kpaz.pdf',
          content: req.file.buffer
        }
      ]
    };
    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: '¡Perfecto! En breve recibirás el análisis detallado en tu email.' });
    } catch (err) {
      console.error('Error enviando correo:', err);
      res.status(500).json({ success: false, message: 'Error enviando el correo.' });
    }
  } catch (error) {
    console.error('Error en /api/send-analysis:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body;
    if (!name || !company || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    let mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@kpaz.la',
      to: 'rdelafuente@kpaz.cl',
      subject: 'Nuevo mensaje de contacto desde el sitio web',
      text: `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Error en /api/contact:', error);
    res.status(500).json({ success: false, message: 'Error enviando el mensaje.' });
  }
});

app.post('/api/newsletter', async (req, res) => {
  try {
    const { name, position, compania, phone, email } = req.body;
    if (!name || !position || !compania || !phone || !email) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    let mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@kpaz.la',
      to: 'rdelafuente@kpaz.cl',
      subject: 'Suscripción a Newsletter',
      text: `Nombre: ${name}\nCargo: ${position}\nCompañía: ${compania}\nTeléfono: ${phone}\nEmail: ${email}`
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Suscripción enviada correctamente.' });
  } catch (error) {
    console.error('Error en /api/newsletter:', error);
    res.status(500).json({ success: false, message: 'Error enviando la suscripción.' });
  }
});


// Middleware para logging
app.use((req, res, next) => {
  console.log(`📥 ${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Middleware para parsear JSON


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

    // Verificar si la tabla noticias existe
    const [noticiasTable] = await pool.execute(`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = ? AND table_name = 'noticias'
    `, [dbConfig.database]);

    if (noticiasTable[0].count === 0) {
      await pool.execute(`
        CREATE TABLE noticias (
          id int NOT NULL AUTO_INCREMENT,
          titulo varchar(255) NOT NULL,
          resumen text NOT NULL,
          contenido text NOT NULL,
          urlImagen varchar(512) DEFAULT NULL,
          categoria varchar(100) NOT NULL,
          esDestacada boolean DEFAULT false,
          created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        )
      `);
      console.log('✅ Tabla noticias creada');
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
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute('SELECT * FROM perfiles');
    await connection.end();

    res.json({ data: rows, message: 'Perfiles cargados correctamente' });
  } catch (error) {
    console.error('Error en /api/perfiles:', error);
    res.status(500).json({ message: 'Error cargando perfiles', error: error.message });
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

// --- ENDPOINTS DE NOTICIAS ---
// Obtener todas las noticias
app.get('/api/noticias', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM noticias ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error obteniendo noticias:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

// Obtener noticia por ID
app.get('/api/noticias/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM noticias WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Noticia no encontrada' });
    }
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error obteniendo noticia por ID:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

// Obtener noticias por categoría
app.get('/api/noticias/categoria/:categoria', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM noticias WHERE categoria = ? ORDER BY created_at DESC', [req.params.categoria]);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error obteniendo noticias por categoría:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

// Crear noticia
app.post('/api/noticias', async (req, res) => {
  try {
    const { titulo, resumen, contenido, urlImagen, categoria, esDestacada } = req.body;
    if (!titulo || !resumen || !contenido || !categoria) {
      return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
    }
    const [result] = await pool.execute(
      'INSERT INTO noticias (titulo, resumen, contenido, urlImagen, categoria, esDestacada) VALUES (?, ?, ?, ?, ?, ?)',
      [titulo, resumen, contenido, urlImagen || null, categoria, !!esDestacada]
    );
    res.json({ success: true, message: 'Noticia creada', id: result.insertId });
  } catch (error) {
    console.error('Error creando noticia:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

// Actualizar noticia
app.put('/api/noticias/:id', async (req, res) => {
  try {
    const { titulo, resumen, contenido, urlImagen, categoria, esDestacada } = req.body;
    if (!titulo || !resumen || !contenido || !categoria) {
      return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
    }
    const [result] = await pool.execute(
      'UPDATE noticias SET titulo=?, resumen=?, contenido=?, urlImagen=?, categoria=?, esDestacada=? WHERE id=?',
      [titulo, resumen, contenido, urlImagen || null, categoria, !!esDestacada, req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Noticia no encontrada' });
    }
    res.json({ success: true, message: 'Noticia actualizada' });
  } catch (error) {
    console.error('Error actualizando noticia:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

// Eliminar noticia
app.delete('/api/noticias/:id', async (req, res) => {
  try {
    const [result] = await pool.execute('DELETE FROM noticias WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Noticia no encontrada' });
    }
    res.json({ success: true, message: 'Noticia eliminada' });
  } catch (error) {
    console.error('Error eliminando noticia:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
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
    
    const { name, company, position, email, phone, project_start_date, profiles, DelayInterno, DuracionProyecto } = req.body;
    
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
      'INSERT INTO downloads (name, company, position, email, phone, project_start_date, DelayInterno, DuracionProyecto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, company || null, position || null, email, phone || null, project_start_date || null, DelayInterno || null, DuracionProyecto || null]
    );
    
    const downloadId = result.insertId;
    console.log('✅ Download guardado con ID:', downloadId);
    
    // Guardar perfiles seleccionados si existen
    if (Array.isArray(profiles) && profiles.length > 0) {
      for (const profile of profiles) {
        // Solo guardar si el rol está presente y no es vacío
        if (profile.rol && typeof profile.rol === 'string' && profile.rol.trim() !== '') {
          await pool.execute(
            'INSERT INTO download_profiles (download_id, rol, seniority, cantidad) VALUES (?, ?, ?, ?)',
            [
              downloadId,
              profile.rol,
              profile.seniority ?? null,
              profile.cantidad != null ? profile.cantidad : 1
            ]
          );
        } else {
          console.warn(`Perfil omitido por rol vacío o nulo:`, profile);
        }
      }
      console.log(`✅ ${profiles.length} perfiles procesados en download_profiles para download_id ${downloadId}`);
    }
    
    res.json({
      success: true,
      message: 'Información guardada exitosamente',
      data: { id: downloadId }
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

// Catch-all para SPA (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
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