FROM node:carbon-alpine 
MAINTAINER diegotony
RUN mkdir -p /usr/src/app
RUN RUN apk --no-cache add --virtual builds-deps build-base python
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ]
CMD ["run","start"]