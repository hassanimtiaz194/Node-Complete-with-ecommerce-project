const http = require("http");

const express = require('express');  // exports a top level function

const app = express(); // creates incomingf request handler
          
//creating server
const server = http.createServer(app);

server.listen(3000); //we have created a server we need server to listen on 3000 port
