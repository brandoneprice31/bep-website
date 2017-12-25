FROM node:carbon

WORKDIR /

ADD ./public /public
ADD ./src /src
ADD ./media /media/
ADD ./index.html /
ADD ./server.js /
ADD ./package.json /

RUN npm install

EXPOSE 8080

ENV ENV production

CMD [ "npm", "start" ]
