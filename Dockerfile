FROM node:20-slim

RUN apt-get update && apt-get install -y \
    make gcc npm \
    && apt-get clean

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]