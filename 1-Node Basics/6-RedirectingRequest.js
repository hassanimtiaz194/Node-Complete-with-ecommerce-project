// we will name this file app.js app file is the root file for node js applications
const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body"
    );
    res.write("</html>");
    return res.end(); // return is important here in this case if condition fulfills we don't need to execute res of the statements
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dummy");
    res.statusCode = 302; // for redirection
    res.setHeader("Location", "/");
    return res.end(); // return is important here in this case if condition fulfills we don't need to execute res of the statements
  }
  //this is tedious method we will learn simple way later
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my NodeJs Server</h1></body");
  res.write("</html>");
  res.end();
});

server.listen(3000); //we have created a server we need server to listen on 3000 port
