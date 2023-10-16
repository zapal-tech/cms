FROM node:18.18-alpine as base

FROM base as builder

WORKDIR /app
COPY package*.json ./
COPY .env.vault ./

COPY . .
RUN npm ci --legacy-peer-deps
RUN npm run build

FROM base as runtime

ENV NODE_ENV=production
ENV NODE_PATH=/app/dist
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /app
COPY package*.json  ./
COPY .env.vault ./

RUN npm ci --legacy-peer-deps
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

# Set your own port
EXPOSE 8080

CMD ["node", "dist/server.js"]
