FROM strapi/strapi

WORKDIR "/app"

COPY ./package.json ./

RUN npm install --verbose

RUN npm run build

COPY . .

CMD ["npm", "run", "start"]