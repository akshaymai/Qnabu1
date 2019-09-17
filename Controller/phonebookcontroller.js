const {phonebook}=require('../Model/phonebookmodel');
const {mongoose}=require('../connection');
module.exports={
createcontact:(req,res)=>{
var cc=new phonebook({
_id:mongoose.Types.ObjectId(),
UserDetals:req.body.UserDetals,
contactumber:req.body.contactumber,
contactDiscription:req.body.contactDiscription
})
cc.save().then((doc)=>{
res.status(200).json({
    message:"contact created sucessfully",
    Contact:doc
})

}).catch((err)=>{
    res.status(500).json({
        Message:"contact not created...",
        Error:err
    })
})
},
getallcontact:(req,res)=>{
phonebook.find().populate("UserDetals", "Name").then((doc)=>{
res.status(200).json({

    message:"all contact list",
    total:doc.length,
    detals:doc
})
}).then((err)=>{
res.status(500).json({
    error:err
})

})
},
getindivisualusercontact:(req,res)=>{
var id=req.params.id;
phonebook.find().then((ff)=>{
var filter=ff.filter(function (jj){
    return jj.UserDetals._id==id;
})
res.status(200).json(filter)

}).catch((err)=>{
    res.status(500).send(err)
})

}
}