FROM openjdk:8
LABEL maintainer "Astor Irias <astorayestas@gmail.com>"

# Create app directory
WORKDIR /usr/src/app

## install node

RUN apt-get update
RUN apt-get install -y --no-install-recommends \ 
    build-essential

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

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

#SHELL ["/bin/bash"]

CMD [ "node", "dist" ]