FROM node:18.12.1-alpine

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn install --freeze-lockfile

COPY . /app

RUN yarn build

EXPOSE 8080

ARG API_URL
ARG WEATHER_API_KEY

ENV VITE_API_URL=$API_URL
ENV VITE_WAPI=$WEATHER_API_KEY
ENV VITE_PORT=3000
ENV VITE_VIACEP_URL=https://viacep.com.br/
ENV VITE_OW_URL=https://api.openweathermap.org/

CMD ["yarn", "preview"]
