FROM node:22

WORKDIR /usr/src/app

COPY ./package*.json ./

COPY ./tsconfig.json ./

COPY ./simulation ./

COPY ./types ./

RUN npm install

RUN npm install -g ts-node

RUN npm install -g typescript

EXPOSE 8080

CMD ["ts-node", "simulate.js"]
