FROM node:22

WORKDIR /usr/src/app

COPY ./package*.json ./

COPY ./tsconfig.json ./

COPY ./pm2.config.js ./

COPY ./simulation ./simulation

COPY ./types ./types

COPY ./lib ./lib

RUN npm install

RUN npm install -g ts-node

RUN npm install -g typescript

RUN npm install -g pm2

RUN tsc

EXPOSE 8080:8080

# CMD ["sh", "-c", "find . | sed 's/[^\\/]*\\// |/g; s/^ / |-/'"]

CMD [ "pm2-runtime", "start", "pm2.config.js" ]
