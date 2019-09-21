const express=require('express')
const router=express.Router();
const rollcontroller=require('../Controller/rolecontroller')
router.post('/add',rollcontroller.addrole);

module.exports=router