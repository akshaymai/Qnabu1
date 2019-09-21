const {role}=require('../Model/Roleofcontact')
const {mongoose}=require('../connection')
module.exports={
addrole:(req,res)=>{
var rt=new  role({
    
    _id:new mongoose.Types.ObjectId(),
    roletittle:req.body.roletittle

})
rt.save().then((doc)=>{

console.log(doc)
    res.status(200).send(doc)
})


}



}