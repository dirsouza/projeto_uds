FROM node:lts-alpine
WORKDIR /api
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build
EXPOSE 80