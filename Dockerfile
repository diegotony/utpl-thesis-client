FROM node:carbon-alpine 
MAINTAINER diegotony
RUN mkdir -p /usr/src/app
RUN apt-get update && apt-get install -y build-essential && apt-get install -y python && npm install
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ]
CMD ["run","start"]