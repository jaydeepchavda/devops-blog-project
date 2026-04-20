#FROM → base image
FROM  node:18

#WORKDIR → working folder
WORKDIR /app

#COPY → bring code inside container
COPY  package*.json ./

#RUN → install dependencies
RUN npm install

#copy code to container
COPY . .

#expose port 
EXPOSE 8080

#CMD → start app
CMD ["npm", "start"]

