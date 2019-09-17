const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
try {
    console.log("token is:",req.headers.authorization)
var decode=jwt.verify(req.headers.authorization,'6000');
console.log("user is",decode)
req.userdata=decode;
next();
} catch (err) {
    res.status(404).json({message:'unauthorized'})
}

}