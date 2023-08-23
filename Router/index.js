const express=require('express')
const middle=require('../config/middleware');
const router=express.Router();

const HomeController=require('../Controller/userController')

const passport= require('passport')

router.get('/',HomeController.sign_in);

router.get('/signup',HomeController.signup);

router.post('/signup',HomeController.create);

router.get('/forget',HomeController.forget);

router.post('/login',passport.authenticate('local', { failureRedirect: '/signup' }),middle.checkAuth, HomeController.login);

router.get('/auth' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}));

router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/signup',
        successRedirect: '/',
}));

router.get('/logout',HomeController.logout);




module.exports=router;