const express = require("express");
const router =express.Router();
const mongoose=require("mongoose");
const Student=require("../models/student");
router.get("/student",async (req,res)=>{
    try{
        const roll = req.query.roll;
        const student= await Student.find({"roll": roll});
        res.send(student);
    }catch(err){
        console.log(err);
    }
});
router.get("/student/result",async (req,res)=>{
    try{
        const roll = req.query.roll;
        const student= await Student.findOne({"roll": roll});
        res.send(student.marks);
    }catch(err){
        console.log(err);
    }
})


module.exports=router;