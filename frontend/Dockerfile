#FROM → base image
FROM node:18

#WORKDIR → working folder
WORKDIR /app


#COPY → bring code inside container
COPY package*.json ./

#RUN -> install dependencies 
RUN npm install

COPY . .

#expose ports
EXPOSE 3000


#CMD -> start app
CMD ["npm", "start"]
