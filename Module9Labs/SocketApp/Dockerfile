FROM node:19-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm","start"]

# First we tell the docker what OS we want to use here we are using node:16-alpine which is a
# node-based environment and only uses those systems of an OS that are needed to run a node
# application. We do this by adding the command FROM node:16-alpine
# Next we tell our docker application that you need to set the working directory to /app where all
# our code would be copied. We do this by using the command WORKDIR /app
# After that we use the command COPY . . , which basically copies all the code to the working
# directory, ignoring all the things we asked our dockerignore to ignore.
# Next we want to expose the port at which our application runs. This example application run on
# port 8080 so we expose that port by saying EXPOSE 8080. Change this if your server.js or index.js
# listens on a different port.
# Now that our code is copied, we need to install the node modules on our Docker container so we
# run the command RUN npm install
# And lastly we want to tell our application the command we want to use to run the application. We
# do that by using the command CMD [“npm”,”start”]. Thing to notice here is that each word in our
# run command is written in double quotes separated by a comma. That is a notation used by
# docker.
# And that's all! We have successfully written the docker file for our application. Next we need to
# build and run the file in order to create docker image and container