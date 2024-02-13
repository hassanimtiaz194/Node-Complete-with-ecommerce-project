// we will name this file app.js because app file is the root file for node js applications
const http = require("http");
const routes = require('./routes');

//creating server
// const server = http.createServer(routes);
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(3000); //we have created a server we need server to listen on 3000 port
