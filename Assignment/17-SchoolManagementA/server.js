const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ApiRouter = require('./routes');
const connectDB = require('./config/db');
const dotenv= require("dotenv").config();
const app= express();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',ApiRouter);



app.get('/',(req,res)=>{
    res.send('API working!');
});

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
});