var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(express.static(path.join(__dirname,'home')))
app.use(express.static(path.join(__dirname,'build')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/home/index.html'))
})

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
})



module.exports = app;
