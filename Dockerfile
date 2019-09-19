FROM openjdk:8
LABEL maintainer "Astor Irias <astorayestas@gmail.com>"

# Create app directory
WORKDIR /usr/src/app

## install node

ARG REFRESHED_AT
ENV REFRESHED_AT $REFRESHED_AT

#SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && apt-get install -qq --no-install-recommends \
  nodejs \
  build-essential
RUN rm -rf /var/lib/apt/lists/*

## install node

##


##

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


# Bundle app source
COPY . .

EXPOSE 4050
CMD [ "node", "dist ]