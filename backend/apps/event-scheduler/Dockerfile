FROM node:16.13.2-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

COPY . .

RUN npm ci --only=production

RUN npx prisma generate

RUN npm run build event-scheduler

CMD ["node", "dist/apps/event-scheduler/main"]