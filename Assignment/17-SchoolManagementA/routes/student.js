const router = require('express').Router();
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Section = require('../models/section');

router.get('/',(req,res)=>{
    res.send('Student Router is Working!..')
});

router.post('/add',async(req,res)=>{
    try {
        
        const user = await new Student({
            studentName:req.body.studentName,
            enrollment_date:req.body.enrollment_date,
            address:req.body.address,
            contact:req.body.contact,
        });

        const userdata = await user.save();
        res.json(userdata);
    } catch (error) {
        res.json({msg:error.message});
    }
});



router.get('/all',async(req,res)=>{
    try {
        const user = await Student.find();
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view/:id',async(req,res)=>{
    try {
        const user = await Student.findOne({_id:req.params.id});
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.put('/update/:id',async(req,res)=>{
    try {
        const user = await Student.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(user);

        const sectionData = await Section.findById({_id:req.body.sectionId});
        const teacherData = await Teacher.findById({_id:req.body.teacherId});
        
       
        await Teacher.findByIdAndUpdate(
            {_id:userdata.teacher},
            {
                $push:{students:userdata._id},
            },{new:true});

        await Section.findByIdAndUpdate(
            {_id:userdata.section},
            {
                $push:{students:userdata._id}
            },{new:true})




    } catch (error) {
        res.json({msg:error.message});
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Student.findOneAndDelete({_id:req.params.id},{new:true});
        if(user){
            res.send("Student Data Deleted");
        }
        else{
            res.send("User not Found");
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});



module.exports = router;