FROM node:18-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install -g pnpm
RUN pnpm i
RUN pnpm i sharp
RUN pnpm run build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm-lock.yaml  ./

RUN npm install -g pnpm
RUN pnpm i -P --ignore-scripts
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

# Set your own port
EXPOSE 8080

CMD ["node", "dist/server.js"]
