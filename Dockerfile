FROM node:latest
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package.json /app
COPY ./ /app
RUN npm i
RUN npm run build
ENTRYPOINT npm start
EXPOSE 5000