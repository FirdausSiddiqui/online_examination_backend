const mongoose =require('mongoose');
const bcrypt=require('bcrypt');

const studentSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }

});



studentSchema.pre('save',async function(next){
    if(this.isModified('password')){
        //parsing cause .env variable is string type
        const salt= parseInt(process.env.SALT);
        this.password=await bcrypt.hash(this.password,salt);
        this.cpassword=await bcrypt.hash(this.cpassword,salt);
    }
    next();
})

module.exports=mongoose.model('STUDENT',studentSchema);