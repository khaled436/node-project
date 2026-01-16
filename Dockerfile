# Image de base ( Node . js leger )
FROM node:18-alpine
# Dossier de travail dans le conteneur
WORKDIR /app
# Copie des fichiers de dependances ( permet de profiter du cache Docker )
COPY package*.json ./
# Installation des dependances
RUN npm install
# Copie du reste du projet
COPY . .
# Port utilise par l' application
EXPOSE 3000
# Commande de demarrage
CMD ["npm" , "start"]