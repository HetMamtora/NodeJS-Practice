const http = require('http');
//console.log(http);

const server = http.createServer((req,res) => {
    // console.log("SERVER STARTED");
    // res.setHeader("Hello","HEADER");
    // res.setHeader('Content-Type','text/html');
    // res.end("<h2>Inside Response</h2>");
})

server.listen(3000,() => {
    console.log("Server Running on Port : 3000");
})