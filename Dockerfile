FROM node:22-alpine3.20

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci