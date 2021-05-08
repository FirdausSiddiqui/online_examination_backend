const dotenv=require('dotenv');
const express =require("express");
const mongoose = require("mongoose");
const app = express();
dotenv.config({path:'./config.env'});
require("./db/connection");
app.use(express.json());
const teacher=require('./models/teacherSchema');
const student=require('./models/studentSchema');
app.use(require('./router/studentAuth'));
app.use(require('./router/teacherAuth'));
app.use(require('./router/addQuestion'));

const PORT =process.env.PORT;

app.listen(PORT,()=>{
    console.log(`app listen on ${PORT} portal`);
});