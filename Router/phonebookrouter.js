const express=require('express')
const router=express.Router();
const phonebookcontroller=require('../Controller/phonebookcontroller');
const auth=require('../Authentication/auth')
router.post('/addcontct',auth,phonebookcontroller.createcontact);
router.get('/groupofcontact',phonebookcontroller.getallcontact);
router.get('/contactsummary/:id',auth,phonebookcontroller.getindivisualusercontact)
module.exports=router