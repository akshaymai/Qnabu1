const {mongoose}=require('../connection');
const validator=require('validator');
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema;

const phonebookschema=new Schema({
_id:mongoose.Schema.Types.ObjectId,
UserDetals:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
contactumber:{type:String,required:true},
contactDiscription:{type:String,required:true},
ContactType:{type:mongoose.Schema.Types.ObjectId,ref:'role',required:true},
Createtime:{type:Date,default:Date.now()}
})
 
const phonebooks=mongoose.model('phonebooks',phonebookschema)

module.exports={phonebooks}