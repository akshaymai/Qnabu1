const {mongoose}=require('../connection');
const validator=require('validator');
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema;

const phonebookschema=new Schema({
_id:mongoose.Schema.Types.ObjectId,
UserDetals:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
contactumber:{type:String,required:true},
contactDiscription:{type:String,required:true}
})
 
const phonebook=mongoose.model('phonebook',phonebookschema)

module.exports={phonebook}