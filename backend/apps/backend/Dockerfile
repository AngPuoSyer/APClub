FROM node:lts-alpine3.17

RUN apk update 
RUN apk add --no-cache make gcc g++ python3 
RUN apk --no-cache add --virtual builds-deps build-base 
RUN apk add openssl1.1-compat


ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
COPY ./prisma/schema.prisma ./prisma/schema.prisma

RUN yarn && yarn cache clean --all

RUN apk del make gcc g++ python3 builds-deps build-base

RUN npx prisma generate

COPY . .

RUN npm run build 

CMD ["yarn migrate:deploy && yarn start"]