FROM node:22-alpine3.20

WORKDIR /app

RUN apk update && apk add postgresql-client

COPY package.json package.json
RUN npm install