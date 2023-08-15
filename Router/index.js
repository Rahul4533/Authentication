const express=require('express')

const router=express.Router();

const HomeController=require('../Controller/userController')

const passport= require('passport')

router.get('/',HomeController.sign_in);

router.get('/signup',HomeController.signup);

router.post('/signup',HomeController.create);

router.get('/forget',HomeController.forget);

router.post('/login',passport.authenticate('local', { failureRedirect: '/signup' }),HomeController.login);

router.get('/google',passport.authenticate('google',{
    scope:["profile","email"]
}))

router.get('/google/callback',passport.authenticate('google', {failureRedirect: '/signup'}),HomeController.login)

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
    })




module.exports=router;