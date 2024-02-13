const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body"
    ); // name will make payload like message: input data
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
      //fs.writeFileSync("message.txt", message); //will block execution of code
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; // for redirection
        res.setHeader("Location", "/");
        return res.end();
      });
    }); //executes if data stream end
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my NodeJs Server</h1></body");
  res.write("</html>");
  res.end();
};

// module.exports = requestHandler;

// module.exports.handler = requestHandler;
// module.exports.someText = 'Hello world';

// shortcut offered by nodJS
// exports.handler = requestHandler;
// exports.someText = 'Hello world';

module.exports = {
    handler: requestHandler,
    someText: 'Hello World',
  };
  