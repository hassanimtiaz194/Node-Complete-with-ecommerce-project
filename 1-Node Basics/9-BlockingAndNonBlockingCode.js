// we will name this file app.js app file is the root file for node js applications
const http = require("http");
const fs = require("fs");

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
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    }); //helps us listen to differnt events like data event
    
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      //if there is error it will remain block in case of sync that why we use async
      //fs.writeFileSync("message.txt", message); //will block execution of code
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; // for redirection
        res.setHeader("Location", "/");
        return res.end();
      });
    }); //executes if data stream end

    // it is wrong to put these line of code here because of async issue meaning req.on will register an event
    // in node js registry but will not execute immediatly instead it there are chances that this code will execute first
    // res.statusCode = 302; // for redirection
    // res.setHeader("Location", "/");
    // return res.end();
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
