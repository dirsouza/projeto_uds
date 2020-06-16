FROM node:lts-alpine
WORKDIR /api
COPY package*.json ./
RUN npm install && npm install -g pm2
COPY . .
RUN npm run build
EXPOSE 80
CMD ["pm2-runtime", "start", "pm2.json"]
