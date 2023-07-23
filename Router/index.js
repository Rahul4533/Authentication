const express=require('express')

const route=express.Router();

const HomeController=require('../Controller/userController')

router.get('/',HomeController.sign_up);








module.exports=router;