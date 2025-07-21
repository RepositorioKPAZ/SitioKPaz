# Backend API - KPaz

API REST para el sitio web de KPaz, construida con Node.js, Express y MySQL.

## 🚀 Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   - Copia `env.example` a `.env`
   - Configura las credenciales de tu base de datos MySQL

   ```bash
   cp env.example .env
   ```

3. **Configurar la base de datos:**
   - Crea una base de datos MySQL llamada `kpaz_db`
   - Crea la tabla `perfiles` con la estructura proporcionada

## 🏃‍♂️ Ejecutar

**Desarrollo (con nodemon):**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3001`

## 📊 Endpoints

### Perfiles
- `GET /api/perfiles` - Obtener todos los perfiles
- `GET /api/perfiles/unique` - Obtener roles únicos
- `GET /api/perfiles/seniorities` - Obtener seniorities únicos
- `GET /api/perfiles/rol/:rol` - Obtener perfiles por rol específico
- `GET /api/perfiles/:id` - Obtener un perfil específico

### Salud
- `GET /api/health` - Verificar estado del servidor

## 🗄️ Estructura de la Base de Datos

### Tabla: perfiles
```sql
CREATE TABLE `perfiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(100) DEFAULT NULL,
  `seniority` varchar(50) DEFAULT NULL,
  `tarifa_uf` decimal(10,2) DEFAULT NULL,
  `tarifa_usd` decimal(10,2) DEFAULT NULL,
  `sueldo_clp` bigint DEFAULT NULL,
  `sueldo_usd` decimal(10,2) DEFAULT NULL,
  `bonos` decimal(10,2) DEFAULT NULL,
  `aguinaldos` decimal(10,2) DEFAULT NULL,
  `otros_ben` decimal(10,2) DEFAULT NULL,
  `cotiz_prev` decimal(10,2) DEFAULT NULL,
  `imptos` decimal(10,2) DEFAULT NULL,
  `moviliz` int DEFAULT NULL,
  `colacion` int DEFAULT NULL,
  `internet` int DEFAULT NULL,
  `prov_vac` decimal(10,2) DEFAULT NULL,
  `prov_finiq` decimal(10,2) DEFAULT NULL,
  `costo_adm` decimal(10,2) DEFAULT NULL,
  `costo_mes` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
)
```

## 🔧 Configuración

### Variables de Entorno (.env)
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=kpaz_db
PORT=3001
NODE_ENV=development
```

## 📦 Dependencias

- **express**: Framework web
- **mysql2**: Cliente MySQL
- **cors**: Middleware CORS
- **dotenv**: Variables de entorno
- **express-rate-limit**: Rate limiting

## 🔒 Seguridad

- CORS configurado para frontend
- Rate limiting (100 requests/15min)
- Validación de entrada
- Manejo de errores

## 🐛 Troubleshooting

1. **Error de conexión a MySQL:**
   - Verifica que MySQL esté ejecutándose
   - Confirma las credenciales en `.env`

2. **Puerto ocupado:**
   - Cambia el puerto en `.env`
   - Mata procesos en el puerto 3001

3. **CORS errors:**
   - Verifica que el frontend esté en los orígenes permitidos

4. **Tabla perfiles no encontrada:**
   - Ejecuta el script SQL para crear la tabla
   - Verifica que la base de datos exista

## 📋 Campos de la Tabla

- **rol**: Nombre del rol profesional
- **seniority**: Nivel de experiencia (junior, mid, senior)
- **tarifa_uf**: Tarifa en UF
- **tarifa_usd**: Tarifa en USD
- **sueldo_clp**: Sueldo en pesos chilenos
- **sueldo_usd**: Sueldo en USD
- **bonos**: Bonos adicionales
- **aguinaldos**: Aguinaldos
- **otros_ben**: Otros beneficios
- **cotiz_prev**: Cotizaciones previsionales
- **imptos**: Impuestos
- **moviliz**: Movilización
- **colacion**: Colación
- **internet**: Internet
- **prov_vac**: Provisión vacaciones
- **prov_finiq**: Provisión finiquito
- **costo_adm**: Costo administrativo
- **costo_mes**: Costo mensual total 