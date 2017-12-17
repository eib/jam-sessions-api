FROM node:9.3-alpine

WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
COPY *.js .

RUN yarn

ENTRYPOINT ["node", "/usr/src/app/index.js"]

ENV PORT=80
