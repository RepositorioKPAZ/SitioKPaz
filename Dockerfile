# Etapa 1: build

FROM node:20.11.0 AS builder
 
# Crear directorio de trabajo

WORKDIR /app
 
# Copiar package.json e instalar dependencias

COPY package*.json ./

RUN npm install --legacy-peer-deps
 
# Copiar el resto del proyecto y compilar

COPY . .

RUN npm run build
 
# Etapa 2: imagen ligera para servir el contenido

FROM nginx:stable-alpine AS production
 
# Copiar archivos de build al servidor NGINX

COPY --from=builder /app/dist /usr/share/nginx/html
 
# Copiar configuración custom de nginx (opcional)

# COPY nginx.conf /etc/nginx/nginx.conf
 
# Exponer puerto 80

EXPOSE 80
 
# Iniciar nginx

CMD ["nginx", "-g", "daemon off;"]

 