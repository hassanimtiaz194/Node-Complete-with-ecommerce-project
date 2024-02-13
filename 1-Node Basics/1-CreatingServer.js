// we will name this file app.js app file is the root file for node js applications
const http = require('http');

// three ways of writing request lisitener functions 
// 1 way
function requestListener(req, res) {
}
const server = http.createServer(requestListener);

//2 way anonymous fuctions (commonly used)
const server2 = http.createServer(function(req, res) {

});

//3 way arrow fuctions
const server3 = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // code will run in loop this will help to terminate that process
});

server.listen(3000); //we have created a server we need server to listen on 3000 port
server2.listen(3001);
server3.listen(3002);