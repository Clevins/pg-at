FROM strapi/strapi

WORKDIR "/app"

COPY ./package.json ./

COPY . .

RUN npm install --no-package-lock

RUN npm run build


CMD ["npm", "run", "start"]