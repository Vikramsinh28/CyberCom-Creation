// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     }
// );

// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!')
//     console.log('http://localhost:3000');
//     }
// );



// const http = require('http');
// const express = require('express');
import express from 'express';
import http from 'http';
import body_parser from 'body-parser';

const app = express();

// app.use((req , res , next)=>{
//     console.log("in the middleware");
//     next(); // Allows the request to continue to the next middleware in line
// })

app.use(body_parser.urlencoded({extended: false}));


// app.use('/' ,(req , res , next)=>{
//     console.log('This always runs!');
//     // res.send('<h1>Hello from Express!</h1>');
//     next();
// })


app.use('/add-product' ,(req , res , next)=>{
    console.log("in middleware  - add product");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.use('/product' ,(req , res , next)=>{
    console.log(req.body);
    res.redirect('/');
})


app.use('/' ,(req , res , next)=>{
    console.log("in middleware");
    res.send('<h1>Hello from Express!</h1>');
})

app.get('/' , (req , res) => res.send('Hello World!'))


const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    console.log('http://localhost:3000');
    }
);


