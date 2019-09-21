const express=require('express')
const morgan=require('morgan')
const dotenv=require('dotenv')
const bodyparser=require('body-parser')
dotenv.config();
const app=express();
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.json())
app.use('/user',require('./Router/userrouter'));
app.use('/phonebook',require('./Router/phonebookrouter'))
app.use('/',require('./Router/rolerouter'));
app.use((req,res,next)=>{
    const error=new Error('not found');
    error.status(400);
    next(error)
})
app.use((error,req,res,next)=>{

    res.status(error.status||500);
    res.json({
   Error:error
})

})
module.exports={app}