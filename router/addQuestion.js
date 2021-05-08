const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const question =require('../models/questionSchema');

router.get('/add',(req,res)=>{
       res.send("hello from add question page");
});

router.post('/add',async (req,res)=>{
    //console.log(req.body);

    const q1={
            questionStatement:"what is 2 + 2",
            optionA:"2",
            optionB:"4",
            optionC:"6",
            optionD:"0",
            correctAnswer:"4"
    }
    const q2={
        questionStatement:"what is 2 + 2",
            optionA:"2",
            optionB:"4",
            optionC:"6",
            optionD:"0",
            correctAnswer:"4"
}
const q3={
    questionStatement:"what is 2 + 2",
    optionA:"2",
    optionB:"4",
    optionC:"6",
    optionD:"0",
    correctAnswer:"4"
}

var array= new Array();
array.push(q1);
array.push(q2);
array.push(q3);

//console.log(array);
try{
const newQuestion = new question({questionId:'123',question:array});
await newQuestion.save();
}
catch(err){
    console.log(err);
}


});

module.exports=router;