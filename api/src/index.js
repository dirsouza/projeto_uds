require('dotenv').config();
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const colors = require('colors');

const { SERVER_PORT } = process.env;
const { title, version } = require("../package.json");

server.use(middlewares)
  .use(router)
  .listen(SERVER_PORT, () => {
    console.log(` ${colors.bold(title)} (${colors.bold.blue(version)}) at:`);
    console.log(` - ${colors.bold("API")}: ${colors.cyan.underline(`http://localhost:${SERVER_PORT}`)}`);
  });