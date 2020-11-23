FROM node:alpine

WORKDIR /app

COPY ./app .

RUN ls

# RUN npm config set registry https://registry.npm.taobao.org/
RUN npm config set registry https://r.cnpmjs.org/
RUN npm install

RUN npm run build

EXPOSE 9000

CMD ["npm", "run","serve"]