FROM node:20-slim

RUN apt-get update && apt-get install -y \
    make \
    gcc \
    npm \
    && apt-get clean

WORKDIR /app

COPY ./package.json /app/package.json

# RUN npx create-nuxt-app my-nuxt-app --answers '{"pm":"npm","ui":"none","server":"none","features":[],"eslint":true,"test":false}'

RUN npm install



CMD ["npm", "run", "dev"]