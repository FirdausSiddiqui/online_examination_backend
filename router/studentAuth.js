const express = require('express');
const router =express.Router();
const studentdb=require('../models/studentSchema');
const bcrypt=require('bcrypt');

router.get('/studentSignup',(req,res)=>{
    res.send('welcome to sign up page');
})

router.post('/studentSignup',async (req,res)=>{
    try{
        const {fname,lname,email,password,cpassword,dept}= req.body;
        if(!fname || !lname || !email || !password || !cpassword || !dept){
            return res.json({message:"plz fill all the field properly"});
        }

        const userExist= await studentdb.findOne({email:email});
        if(userExist){
            res.json({message:'email already exist'});
            res.json({message:"email already exist"});
            return console.log('email already exist');
        }
        else if(password != cpassword){
            res.json({message:"invaid password"});
            res.json({message:"invalid password"});
            return console.log('invalid password');
        }
        else{
        const newStudent =new studentdb( {fname,lname,email,password,cpassword,dept});
        await newStudent.save();
        console.log(newStudent);
        res.json({message:"signed up successfully"});
        }
    }catch(err){
        console.log(err);
    }
});

router.post('/studentLogin',async (req,res)=>{
    
    try{
        const {email,password,dept}=req.body;
        const userExist=await studentdb.findOne({email:email});
        if(userExist){
            const match=await bcrypt.compare(password,userExist.password);
            if(match){
                res.json({message:"user signed in successfully"});
            }else{
                res.json({message:"invalid credential"});
            }
        }
        else{
            res.json({message:"user does not found"});
        }
    }catch(err)
    {
        console.log(err);

    }
})

module.exports=router;