const express=require('express')
const router=express.Router();
const phonebookcontroller=require('../Controller/phonebookcontroller');
const auth=require('../Authentication/auth')
router.post('/phonebooks',auth,phonebookcontroller.createcontact);
router.get('/getallcontacts',phonebookcontroller.getallcontact);
router.get('/groupcontact',phonebookcontroller.groupofcontact)
router.get('/groupcontactbyid/:id',phonebookcontroller.getindivisual)
module.exports=router