FROM node:19-bullseye

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 4000

ENV PORT 4000

CMD ["npm", "start"]