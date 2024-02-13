// we will name this file app.js app file is the root file for node js applications
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // code will run in loop this will help to terminate that process
});

server.listen(3000); //we have created a server we need server to listen on 3000 port