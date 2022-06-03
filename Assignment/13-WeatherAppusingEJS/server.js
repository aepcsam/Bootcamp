const express = require('express');
const https = require('https');



const PORT = process.env.PORT || 5000;

const weatherRoute = require('./routes/weather');

const app = express();

// Ejs setting
app.set("view engine","ejs");

// Middleware adding
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',weatherRoute);




// Server running Port
app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})