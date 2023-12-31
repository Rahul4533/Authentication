const express=require('express')
const port=8000;

const app=express();

// use for session cookie
const passport=require('passport')
const session = require('express-session');
const passportjwt= require('./config/passport-jwt');
const passportLocal=require('./config/passport');
const flash=require('connect-flash');
const middleware=require('./config/middleware');
const google= require('./config/passport-google-oauth');

// Middleware 
app.use(session({
    name:'codeail',
    secret:'secret',
    saveUninitialized:true,
    resave:true,
    cookie: {
        maxAge:(1000*60*100),
    }
}));
app.use(passport.initialize())
app.use(passport.session());
app.use(express.urlencoded({ extended: true}))
app.use(express.static('./assets'));
app.use(flash());
app.use(middleware.setflash);
app.use('/',require('./Router'))

app.use(middleware.setAuthancitedUser);





// setting up the view engine

app.set('view engine','ejs')
app.set('views','./views');


const db=require('./config/mongoose')



//Establish the server on port no 8000

app.listen(port,(err)=>{
if(err){
    console.log(err);
    return;
}
console.log(`Server is Establish SuccessFully on port ${port}`);
})
