FROM node:22-slim AS builder
WORKDIR /build
COPY package*.json ./
RUN npm install

FROM node:22-slim
WORKDIR /app
COPY --from=builder /build/node_modules ./node_modules
COPY src ./src
COPY package.json ./
USER node
EXPOSE 8119
ENTRYPOINT ["node", "src/index.js"]
