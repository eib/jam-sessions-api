FROM node:9.3-alpine

ENV PORT=80
ENTRYPOINT ["node", "/usr/src/app/index.js"]
WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]
RUN yarn

COPY *.js .
