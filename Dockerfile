FROM node:12.19
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run create
EXPOSE 3333
ENTRYPOINT npm start
# ENTRYPOINT ["node", "server/server.js"]