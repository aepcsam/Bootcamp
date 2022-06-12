const router = require('express').Router();
const Teacher = require('../models/teacher');
const Section = require('../models/section');

router.get('/',(req,res)=>{
    res.send('Teacher Router is Working!..')
});

router.post('/add',async(req,res)=>{
    try {
        const user = await new Teacher({
            teacherName:req.body.teacherName,
            qualification:req.body.qualification,
            experience:req.body.experience,
            contact:req.body.contact,
        });
        const data = await user.save();
        

        
        res.json(data);
    } catch (error) {
        res.json({msg:error.message});
    }
});


router.get('/all',async(req,res)=>{
    try {
        const user = await Teacher.find();
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view/:id',async(req,res)=>{
    try {
        const user = await Teacher.findOne({_id:req.params.id});
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});


router.put('/update/:id',async(req,res)=>{
    try {
        const user = await Teacher.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(user);

        const sectionData = await Section.findById({_id:req.body.sectionId});

        await Section.findByIdAndUpdate({
            _id:req.body.sectionId
        },{
            $push:{teachers:user._id}
        },{new:true});



    } catch (error) {
        res.json({msg:error.message});
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Teacher.findOneAndDelete({_id:req.params.id},{new:true});
        if(user){
            res.send("Teacher Data Deleted");
        }
        else{
            res.send("User not Found");
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});


module.exports = router;