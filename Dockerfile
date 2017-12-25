FROM node:carbon

WORKDIR /

ADD ./public /public
ADD ./src /src
ADD ./media /media/
ADD ./index.html /
ADD ./server.js /
ADD ./package.json /
ADD ./webpack.config.dev.js /

RUN npm install

EXPOSE 8080

ENV GMAIL_PW asdfjkl23j5ldksuf9wq213rlkjdsa

CMD [ "npm", "start" ]
