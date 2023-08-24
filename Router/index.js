const express=require('express')
const middle=require('../config/middleware');
const router=express.Router();

const HomeController=require('../Controller/userController')

const passport= require('passport')

router.get('/',HomeController.sign_in);

router.get('/signup',HomeController.signup);

router.post('/signup',HomeController.create);

router.get('/forget',HomeController.forget);

router.post('/login',passport.authenticate('local', { failureRedirect: '/signup' }), HomeController.login);

router.get('/auth' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}));

router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/signup',
        successRedirect: '/',
}));

router.get('/logout',HomeController.logout);

router.post('/update',HomeController.update);


router.post('/update/change',HomeController.change);

router.get('/update',HomeController.changepassword);

module.exports=router;