FROM node:10
RUN mkdir -p /usr/local/nodejsapplication
WORKDIR /usr/local/nodejsapplication
COPY package*.json /usr/local/nodejsapplication
RUN npm install
COPY . /usr/local/nodejsapplication
EXPOSE 8080
CMD ["npm", "start"]