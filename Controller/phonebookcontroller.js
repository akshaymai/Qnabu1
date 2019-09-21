const {phonebooks}=require('../Model/phonebookmodel');
const {roles}=require('../Model/Roleofcontact')
const {mongoose}=require('../connection');
const {ObjectID}=require('mongodb')
module.exports={
createcontact:(req,res)=>{
var cc=new phonebooks({

_id:new mongoose.Types.ObjectId(),
UserDetals:req.body.UserDetals,
contactumber:req.body.contactumber,
contactDiscription:req.body.contactDiscription,
ContactType:req.body.ContactType
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
phonebooks.find().populate("UserDetals", "Name").then((doc)=>{
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
groupofcontact:(req,res)=>{
    roles.aggregate([
      
        {
          "$lookup": {
            from: 'phonebooks',
            localField: '_id',
            foreignField: 'ContactType',
            as: 'groupcontact'
          }
        }
      ]).then((doc)=>{
          res.status(200).send(doc)
      }).catch((err)=>{
          res.status(400).send(err)
      })
    },
 getindivisual:(req,res)=>{

var id=req.params.id;

console.log(id)
roles.aggregate([
    {
      "$lookup": {
        from: 'phonebooks',
        localField: '_id',
        foreignField: 'ContactType',
        as: 'groupcontact'
      }
    },
        {
            $unwind: "$groupcontact"
        },
        
        
        {
            $match:{"groupcontact.UserDetals":ObjectID(id)}
        }
  ]).then((doc)=>{
      res.status(200).send(doc)
  }).catch((err)=>{
      res.status(400).send(err)
  })


 }   

    }