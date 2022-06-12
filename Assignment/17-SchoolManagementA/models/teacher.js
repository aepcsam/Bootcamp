const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    teacherName:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        require:true
    },
    experience:{
        type:Number,
        default:0
    },
    contact:{
        type:Number,
        required:true
    },
    // student:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:'students'
    // }],
    // section:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:'sections'
    // }]
    
},{timestamps:true});

const Teacher = new mongoose.model("teachers",teacherSchema);

module.exports = Teacher;