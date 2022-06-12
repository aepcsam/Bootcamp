const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    numberOfStudent:{
        type:Number,
        max:4
    },
    numberOfTeacher:{
        type:Number,
        max:2
    },
    sectionName:{
        type:String,
        require:true,
        enum:["A-Class","B-Class","C-Class"],
        unique:true
    },
    teacher:[{
        type:mongoose.Types.ObjectId,
        ref:'teachers',
        required:true
    }],
    student:[{
        type:mongoose.Types.ObjectId,
        ref:'students',
        required:true
    }]
});

const Section = new mongoose.model('section',sectionSchema);

module.exports = Section;