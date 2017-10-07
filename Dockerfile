FROM node
EXPOSE 3000
WORKDIR /app
ADD packaje.json /app/
RUN npm install
ADD . /app
CMD ["node", "server"]
