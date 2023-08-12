const passport=require('passport');

const passportjwt=require('passport-jwt').Strategy;

const extractjwt=require('passport-jwt').ExtractJwt;

const User=require('../models/user');

let opts={};

opts.jwtFromRequest = extractjwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


passport.use(new passportjwt(opts,async function(jwtPayLoad,done){
try {
    console.log(jwtPayLoad);
    const user= await User.findOne({_id:jwtPayLoad});

    if(user){
        return done(null,user)
    }else{
        return done(null,false)
    }
} catch (error) {
    console.log('Error while verify');
}

}))



module.exports=passport;