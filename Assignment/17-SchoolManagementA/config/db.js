const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const url = process.env.DB_URL;

const connectDB  = async()=>{
    try {
        const con = await new mongoose.connect(url);
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (error) {
        res.json({msg:error.message});
    }
};

module.exports = connectDB;