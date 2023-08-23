const passport=require('passport');
const googleStratigy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto')
const User=require('../models/user');

passport.use(new googleStratigy({
    clientID: "952495141490-nkkgbraf9rs5t1p0r7s08vb4me2a7ddb.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/auth/google/callback",
    
},

async function(accessToken,refreshToken,profile,done){
    try {
      
      console.log(user);
    } catch (error) {
        console.log(error)
    }
   
 
}))


module.exports=passport;