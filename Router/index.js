const express=require('express')

const router=express.Router();

const HomeController=require('../Controller/userController')


router.get('/',HomeController.sign_in);

router.get('/signup',HomeController.signup);

router.post('/signup',HomeController.create);

router.get('/forget',HomeController.forget);

router.post('/login',passport.authenticate('jwt', { session: false }) ,HomeController.login);








module.exports=router;