FROM node:8-alpine
WORKDIR /usr/apps/api
COPY package*.json ./
RUN npm install -g -s --no-progress yarn && \
    yarn install --prod && \
    yarn cache clean
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
