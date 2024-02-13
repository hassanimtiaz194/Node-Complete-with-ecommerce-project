const http = require("http");

const express = require('express');  // exports a top level function

const app = express(); // creates incomingf request handler

app.use((req, res, next) => {   // use allow us to add middleware
    console.log('hello');
    next();    // next is a function which allow req to continue to next middleware 
});

app.use((req, res, next) => {
    console.log('Hassan');
    res.send('<h1>Hello from Express JS</h1>'); //send response of type any and also set header default text/html

});             

app.listen(3000); //app.listen create server and listen to port 3000

//creating server
// const server = http.createServer(app);

// server.listen(3000); //we have created a server we need server to listen on 3000 port
