FROM node:14-slim

ENV PORT=3000
# sets the current working directory
WORKDIR /app  

# copy package.json first and run npm ci in order to benefit from caching of layers
COPY package*.json .
RUN npm ci

# copy the entire app source code
COPY . .

# start the express server
CMD ["node", "index.js"]