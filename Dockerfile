FROM node:20-slim

WORKDIR /app

# Copy npm configuration first
COPY .npmrc ./

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ] 