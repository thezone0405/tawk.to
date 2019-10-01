FROM node:10

WORKDIR /src/app
COPY package.json .
RUN npm install
ADD . .
RUN npm run build

CMD ["npm", "run", "start:prod"]