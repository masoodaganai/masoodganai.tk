const dotenv = require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const app=express();

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

// const Middleware=(req,res)=>{
//     console.log('hello from Middleware');
// }
// Middleware();
app.get('/', (req,res)=>{
    res.send('Hello world from server')
});
app.get('/about', (req,res)=>{
    res.send('Hello about world from server')
});
app.get('/contact', (req,res)=>{
    res.cookie("Test", "masood")
    res.send('Hello contact world from server')
});
app.get('/signin', (req,res)=>{
    res.send('Hello Login world from server')
});
app.get('/signup', (req,res)=>{
    res.send('Hello Registeration world from server')
});
if (process.env.NODE_ENV =="production"){
    app.use(express.static("client/build"));
}

app.listen(5000,() => {
    console.log('server is running on port 5000 ');
})