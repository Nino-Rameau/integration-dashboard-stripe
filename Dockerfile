FROM node:20-bullseye AS builder
WORKDIR /code/integration-dashboard-stripe
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:20-bullseye
WORKDIR /code/integration-dashboard-stripe
RUN npm install -g serve
COPY --from=builder /code/integration-dashboard-stripe/dist ./build
EXPOSE 8089
CMD ["serve", "-s", "build", "-l", "8089", "-H", "0.0.0.0"]
