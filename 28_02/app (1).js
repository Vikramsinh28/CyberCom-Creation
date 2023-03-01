// console.log("Hello World");

// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is milan.");


const http = require('http');
const server = http.createServer((req , res)=>{
    // res.write("Hello from the other side");
    // res.end();
    // console.log(req);

    // console.log(req.url);
    // console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

    // process.exit();
})


server.listen(8080, ()=>{
    console.log("Listening to port 8080");
    console.log('http://localhost:8080');
})


