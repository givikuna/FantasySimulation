FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node

RUN npm install -g livescript

RUN npm install -g coffeescript

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
