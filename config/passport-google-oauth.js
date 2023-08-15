const passport=require('passport');
const googleStratigy=require('passport-google-oauth').OAuth2Strategy;

const crypto=require('crypto')
const User=require('../models/user');

passport.use(new googleStratigy({
    clientID: "952495141490-q2q42kb9oih5vtn8ftfq11ohu4m2angn.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/google"
},

function(accessToken,refreshToken,profile,done){
    console.log(accessToken)
    
    console.log(refreshToken)
    console.log(profile)
   
 
}))


module.exports=passport;