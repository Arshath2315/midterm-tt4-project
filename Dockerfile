# Layer 1
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app/ ./
RUN npm run build 
# The build output will be in /dist

# Layer 2
FROM debian:bookworm-slim

# Updates and install required packages
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    nginx \
    nodejs \
    npm \
    gettext \
    && apt-get clean

# Install PM2 globally for process management
RUN npm install -g pm2

WORKDIR /app

# Copy API files and install dependencies
COPY ./api/index.js /app/
COPY ./api/package*.json /app/
RUN npm install

# Copy the built application from Layer 1
COPY --from=builder /app/dist /var/www/html

# Copy the Nginx configuration file
COPY ./default.conf /etc/nginx/sites-available/default

# Set environment variable for the API
RUN echo "API_PORT=3000" >> /app/.env

# 80 IS THE PORT FOR NGINX
EXPOSE 80

# Copy and set permissions for the entrypoint script
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Entrypoint
ENTRYPOINT ["/entrypoint.sh"]
