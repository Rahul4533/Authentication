const passport=require('passport');

const passportjwt=require('passport-jwt').Strategy;

const extractjwt=require('passport-jwt').ExtractJwt;

const User=require('../models/user');

let opts={
    jwtFromRequest :extractjwt.fromAuthHeaderAsBearerToken,
    secretOrKey :'Rahul'
}

passport.use(new passportjwt(opts,async function(jwtPayLoad,done){
try {
    const user= await User.findById(jwtPayLoad._id);

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