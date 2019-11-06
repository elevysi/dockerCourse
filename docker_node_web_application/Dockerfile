# Set the base image to Ubuntu
FROM ubuntu:18.04

# Update the repository sources list and install gnupg2
RUN apt-get update && apt-get install -y gnupg2
# Add the package verification key
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

# Add MongoDB to the repository sources list
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > tee /etc/apt/sources.list.d/mongodb.list

# Update the repository sources list
RUN apt-get update

# Install MongoDB package (.deb)
RUN apt-get install -y mongodb

# Create the default data directory
RUN mkdir -p /data/db

# Install Node.js
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN mkdir -p /usr/local/nodejsapplication
WORKDIR /usr/local/nodejsapplication
COPY package*.json /usr/local/nodejsapplication/
RUN npm install
COPY . /usr/local/nodejsapplication
EXPOSE 8080
ADD start.sh start.sh
RUN chmod +x start.sh 
CMD ./start.sh