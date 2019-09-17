const express=require('express')
const router=express.Router();
const usercontroller=require('../Controller/usercontroller');
const auth=require('../Authentication/auth')
router.post('/singup',usercontroller.sinup);
router.post('/login',usercontroller.login);
router.get('/getalluser',usercontroller.getalluser);
router.put('/updateuser/:id',auth,usercontroller.updateuser);
router.delete('/deleteuserbyid/:id',usercontroller.deleteuser);
module.exports=router