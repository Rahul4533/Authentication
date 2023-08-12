const passport= require('passport');

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

//------------ Local User Model ------------//
const User = require('../models/user');

    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
            //------------ User Matching ------------//
            const user= await User.findOne({ email: email});
            
            
            if(!user){
                return done(null,false,{message:'The email id is not registered'})
            }

                //------------ Password Matching ------------//
           const ismatch= await      bcrypt.compare(password, user.password);

            if(!ismatch){
                return done(null,false,{message:' Inavalid Password'})
            }
           
            return done(null,user,{message:'user find'})
            
           })
    );
        
    

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        const user=await User.findById(id) ;

        if(user){
        return done(null,user);
        }else{
            return done(null,false)
        }
           
       
    });

module.exports=passport;