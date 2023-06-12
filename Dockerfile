# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --only=production

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the app source code to the working directory
COPY . .

# Expose the port on which your app listens
EXPOSE 5000

# Start the Node.js app using nodemon
CMD ["npm", "start"]
