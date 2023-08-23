const nodemailer= require('../config/nodemailer');

exports.signup = (user)=>{

    nodemailer.transporter.sendMail({
        from:'rahulsingh4533@gmail.com',
        to: user,
        subject: 'Sign Up mail Notify',
        html: '<h1> hello Welcome to coding Ninja </h1>'
        
    }, (err,info)=>{
        if(err){
            console.log('errror',err)
            return
        }
        console.log('Message Sent', info);

        return;

    })
}