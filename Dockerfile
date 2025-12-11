# On crée deux images Docker (multi-stage build) : une pour builder l'application et une autre optimisée pour la production car cela permet :
# De réduire la taille de l'image finale et plus de sécurité car l'image final a que le strict minimum pour fonctionner



# On crée une première image pour builder l'application avec Node.js
FROM node:20-bullseye AS builder
WORKDIR /app

# On copie uniquement les fichiers de configuration et on installe les dépendances (node_modules)
COPY package*.json ./
RUN npm install

# On ne copie pas tous les fichiers en une seule fois pour profiter du cache Docker lors de l'installation des dépendances

# On copie ensuite les autre fichiers et on build l'application
COPY . .
RUN npm run build

# On crée une deuxième image qui est une image optimisée pour la production
FROM node:20-bullseye
WORKDIR /app

# On installe un serveur HTTP statique (serve) car pas besoin d'un serveur nginx complet pour servir une application statique
RUN npm install -g serve

# On copie UNIQUEMENT les fichiers buildés depuis la première image
COPY --from=builder /app/dist ./build

# On expose le port 8089 et on lance le serveur HTTP statique pour servir l'application
EXPOSE 8089
CMD ["serve", "-s", "build", "-l", "8089"]