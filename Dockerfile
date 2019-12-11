FROM node:alpine
MAINTAINER diegotony
COPY . /app
WORKDIR ./app
RUN npm config set registry http://registry.npmjs.org  \
     && npm install 
ENV PORT=3011
EXPOSE 3011
CMD ["npm","run","start"]