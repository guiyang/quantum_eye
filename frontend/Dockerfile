# Use the Microsoft devcontainer image for Node.js
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Set working directory
WORKDIR /workspace

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]