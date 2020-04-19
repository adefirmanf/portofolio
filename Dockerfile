FROM node:10-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --only=production
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
COPY . /app
RUN npm build 
EXPOSE 3000
CMD ["npm", "start"]