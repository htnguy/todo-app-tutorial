#stage 0 to build and compile the app
FROM node:14-slim as build-stage

# define build time arguments (can have default values overriden at build-time)
ARG BACKEND_HOST
ARG BACKEND_PORT

ENV REACT_APP_BACKEND_HOST ${BACKEND_HOST}
ENV REACT_APP_BACKEND_PORT ${BACKEND_PORT}

# sets the current working directory
WORKDIR /app  

# copy package.json first and run npm ci in order to benefit from caching of layers
COPY package*.json .
RUN npm ci

# copy the entire app source code and build it
COPY . .
RUN npm run build

#stage 1
FROM nginx:latest

#copy compiled react app to nginx static files directory
COPY --from=build-stage /app/build/ /usr/share/nginx/html
