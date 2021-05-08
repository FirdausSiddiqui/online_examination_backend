const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const teacherdb=require('../models/teacherSchema');
const bcrypt=require('bcrypt');

router.get('/',(req,res)=>{
    res.send('hello world from router server');
});

router.post('/teacherSignup', async (req,res)=>
{
    const {fname,lname,email,password,cpassword} = req.body;

    if(!fname || !lname || !email || !password || !cpassword){
        return res.json({message:"plz fill all the field properly"});
    }

    try{
        const userExist= await teacherdb.findOne({email:email});
        if(userExist){
             res.json({message:"email already exist"});
            return console.log('email already exist');
        }
        else if(password != cpassword){
            res.json({error:" password does not match with confirm password"});
            return console.log("password does not match with confirm password");
        }
        else{
        const newTeacher=await new teacherdb({fname,lname,email,password,cpassword});
        await newTeacher.save();
        console.log(newTeacher);
        res.json({message:"signed up successfully"});
        }
        
    }
    catch(err){
        console.log(err);
    }

});

router.post('/teacherLogin',async(req,res)=>{   
    try{
        const {email,password}=req.body;
        const userExist=await teacherdb.findOne({email:email});
        if(userExist)
        {
            const match = await bcrypt.compare(password,userExist.password);
            if(match){
                res.json({message:"sign in successfully"});
            }
            else{
                res.json({message:"invalid credential"});
            }
        }
        else{
            res.json({message:"user doesn't found"});
        }

    }catch(err){
        console.log(err);
    }
   
});

module.exports=router;