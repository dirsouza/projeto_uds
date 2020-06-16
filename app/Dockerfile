FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /app
COPY --from=0 /app/dist /var/www
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/acai_personalizado.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
