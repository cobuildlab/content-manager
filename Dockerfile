FROM node:10.15.0 as react-dev
RUN mkdir /app
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
