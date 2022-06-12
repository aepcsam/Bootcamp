const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName:{
        type:String,
        require:true
    },
    enrollment_date:{
        type:Date,
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        require:true
    },
    teacher:[{
        type:mongoose.Types.ObjectId,
        ref:'teachers'
    }],
    section:[{
        type:mongoose.Types.ObjectId,
        ref:"sections"
    }]
},{timestamps:true});

const Student = new mongoose.model('students',studentSchema);

module.exports = Student;