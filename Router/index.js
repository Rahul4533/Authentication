const express=require('express')

const router=express.Router();

const HomeController=require('../Controller/userController')

router.get('/',HomeController.sign_in);

router.get('/signup',HomeController.signup);

router.post('/signup',HomeController.create);








module.exports=router;