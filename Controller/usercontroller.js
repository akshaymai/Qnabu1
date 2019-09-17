const {user}=require('../Model/usermodel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {mongoose}=require('../connection');
module.exports={
login:(req,res)=>{
user.find({Email:req.body.Email}).then((doc)=>{
    console.log(req.body.Email)
if(doc.length<1){
    res.status(404).json({Message:"user is not register...."})
}
else{
bcrypt.compare(req.body.Password,doc[0].Password,(err,bb)=>{
    if(err)
    {

        res.status(400).json({Message:"error on password match"})
    }
    if(bb)
    {

    var token= jwt.sign({_id:doc[0]._id,Email:doc[0].Email},'6000',{expiresIn:'1hr'})

   return res.status(200).json({
        Message:"Login sucessfully...",
        Token:token
    })
    }

    else{
        return res.status(400).json({
            message:"Password not match"
        })
    }
})
}

}).catch((err)=>{
    res.status(500).json({
        Message:"error is login ",
        Error:err
    })
})
},

sinup:(req,res)=>{


    user.find({Email:req.body.Email}).exec().then((dd)=>{
        console.log(req.body.Email)
        if(dd.length>=1)
        {
                return res.status(404).json({
                message:"user already exites"
        })
        }
        const rr=new user({
      _id:new mongoose.Types.ObjectId(),
      Name:req.body.Name,
      Email:req.body.Email,
      Password:req.body.Password
        })
        rr.save().then((rr)=>{
            res.status(200).json({
                message:"inseted sucessfully",
                user:rr
            })
        }).catch((err)=>{
    
            res.status(500).json({
                message:"Not inserted",
                Error:err
            })
        })
    }).catch((err)=>{

        res.status(500).json({message:"xcbnvg"})
    })
    

},
getalluser:(req,res)=>{
user.find().exec().then((doc)=>{

res.status(200).json({

    Message:"List of register user:>",
    Total:doc.length,
    Users:doc
})
}).catch((err)=>{

    res.status(500).json({

        Message:"Error to fetch data"
    })
})

},
updateuser:(req,res)=> {
  var id=req.params.id;
  bcrypt.hash(req.body.Password,10,(err,hash)=>{

    req.body.Password=hash;
    user.findOneAndUpdate({_id:id},req.body,{new:true},(err,data)=>{

        if(err){
            res.status(404).json({
                message:err
            })
        }
        if(data){

            res.status(200).json({
                message:"updated sucessfully....",
                user:data
            })
        }
    })

  })
 
},

deleteuser:(req,res)=>{

    user.findOneAndDelete({_id:req.params.id}).then((odcs)=>{
        res.status(200).json({
            message:"deleted sucessfully",
            Deleteduser:odcs
        })
    },(err)=>{
        res.status(404).send(err);
    })

}
}