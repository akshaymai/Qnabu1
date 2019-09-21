const {mongoose}=require('../connection');
 
const Schema=mongoose.Schema;
const roleschema=new Schema({
    
    _id:mongoose.Schema.Types.ObjectId,

roletittle:{type:String,required:true}
})
const roles=mongoose.model('roles',roleschema)

module.exports={roles}