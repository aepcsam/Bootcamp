const router = require('express').Router();
const Section = require('../models/section');
const Teacher = require('../models/teacher');
const Student = require('../models/student');

router.get('/',(req,res)=>{
    res.send('Section Router is Working!');
});

router.post('/add',async(req,res)=>{
    try {
        const user = await new Section(req.body);
        const data = await user.save();
        res.json(data);   
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view',async(req,res)=>{
    try {
        const user = await Section.find({}).populate('teacher',"-_id -__v -contact -section -updatedAt -experience -student -qualification -createdAt").populate("student","-_id -__v -updatedAt -contact -address -teacher -section -createdAt");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message})
    }
});


router.get('/view/:id',async(req,res)=>{
    try {
        const user = await Section.findOne({_id:req.params.id}).populate('teacher',"-_id -__v -contact -section -updatedAt -experience -student -qualification -createdAt").populate("student","-_id -__v -updatedAt -contact -address -teacher -section -createdAt");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message})
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Section.findOneAndDelete(
            
            );
        if(user){
            res.json({msg:"Section Deleted Successfully"});
        } else{
            res.json({msg:"Section Not Found"});
        }
        console.log(user);
    } catch (error) {
        res.json({msg:error.message})
    }
});

router.put('/student/:id',async(req,res)=>{
    try {
        const user = await Section.findByIdAndUpdate(
            {_id:req.params.id},
            { 
                $addToSet:{student:req.body.studentId}
            },
            {new:true});
        res.json(user);
    } catch (error) {
        res.json({msg:error.mesage});
    }
});

router.put('/teacher/:id',async(req,res)=>{
    try {
        const user = await Section.findByIdAndUpdate(
            {_id:req.params.id},
            { $addToSet:
                {teacher:req.body.teacherId}
            },
            {new:true});
        res.json(user);
    } catch (error) {
        res.json({msg:error.mesage});
    }
});


module.exports = router;