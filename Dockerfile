# Étape 1 - Build
FROM node:20-bullseye AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 - Serve
FROM node:20-bullseye

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./build

EXPOSE 8089

CMD ["serve", "-s", "build", "-l", "8089", "-H", "0.0.0.0"]