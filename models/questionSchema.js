const mongoose=require("mongoose");


const questionSchema = new mongoose.Schema(
    {
        questionId:{
            type:String,
            required:true
        },
        question:[
            {
               questionStatement:{
                   type:String,
                   required:true
               },
               optionA:{
                   type:String,
                   required:true
               },
               optionB:{
                type:String,
                required:true
                },
                optionC:{
                    type:String,
                    required:true
                },
                optionD:{
                 type:String,
                 required:true
                 },
                 correctAnswer:{
                    type:String,
                    required:true
                }
            }
        ]

    }
);

module.exports=mongoose.model('QUESTIONS',questionSchema);