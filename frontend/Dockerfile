FROM node:alpine as builder

RUN apk add --no-cache python make g++

WORKDIR /app

COPY ./package*.json ./
RUN npm install

FROM node:alpine as app

WORKDIR /app

RUN npm i -g @ionic/cli

COPY . .
COPY --from=builder /app/node_modules node_modules

CMD ["ionic", "serve", "--host=0.0.0.0"]