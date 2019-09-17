const {mongoose}=require('../connection');
const validator=require('validator');
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema;
const userschema=new Schema({
_id:mongoose.Schema.Types.ObjectId,
Name:{type:String,required:true},
Email:{
    type:String,
    required:true,
    unique:true,
    validate:validator.isEmail,
    MESSAGE:"{value} is not a valide email"
},
Password:{type:String,required:true}
})
userschema.pre('save',function (next){
var user=this;
 if(user.isModified('Password'))
 {
bcrypt.genSalt(10,(err,salt)=>{
 bcrypt.hash(user.Password,salt,(err,hash)=>{
user.Password=hash;
next();
})
})

 }
 else{
     next();
 }
})
const user=mongoose.model('user',userschema)

module.exports={user}