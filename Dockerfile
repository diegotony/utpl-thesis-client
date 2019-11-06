FROM node:10
MAINTAINER diegotony
RUN mkdir -p /usr/src/app
#RUN apk --no-cache add --virtual builds-deps build-base python
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3011
ENV PORT=3011
ENV MONGO_HOST=mongo
ENV MONGO_PORT=27017
ENV MONGO_DB=client
RUN npm run build
CMD ["npm","run","start:prod"]