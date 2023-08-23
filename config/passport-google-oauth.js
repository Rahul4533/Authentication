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
      const user= await User.findOne({email: profile.emails[0].value});

      if(user){
        return done(null,user);
      }else{
        User.create({
            username: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString('hex')
        })
      }

      return done(null, user);


     
    } catch (error) {
       console.log(error);
    }
   
 
}))


module.exports=passport;