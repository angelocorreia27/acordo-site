#This is a sample Image 
# https://stackify.com/docker-build-a-beginners-guide-to-building-docker-images/
# Use the official image as a parent image.
FROM node:12.8.0
# node:current-slim
 
#MAINTAINER angelocorreia27@hotmail.com
#LABEL stage=acordo-site

# Update aptitude with new repo
#RUN apt-get update

# Install software 
#RUN apt-get install -y git

# Clone the conf files into the docker container

#RUN git clone https://github.com/hooj0/fabric-chaincode-java.git /myapp/

#RUN cp -R /myapp/fabric-chaincode-endorsement-maven* /home/app/
# Set the working directory.


WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm i -g npm

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 4000

# Run the specified command within the container.
CMD ["npm", "start"]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY  . .

# to build: docker build -t angelocorreia27/acordo-site .
# to run: docker run -p4000:4000 angelocorreia27/acordo-site
# Working with MicroK8s’ built-in registry
# microk8s.docker build -t angelocorreia27/acordo-site .