# Usa la imagen base de Node.js con la versión deseada
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
#WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe) para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Compila la aplicación React para producción
RUN npm run build

# Expone el puerto 3000 para que la aplicación pueda ser accesible desde fuera del contenedor
EXPOSE 3000

# Comando para iniciar la aplicación cuando el contenedor se inicia
CMD ["npm", "start"]