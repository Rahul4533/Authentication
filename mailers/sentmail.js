const nodemailer= require('../config/nodemailer');
// sign up alert mail
exports.signup = (user)=>{

    nodemailer.transporter.sendMail({
        from:'rahulsingh4533@gmail.com',
        to: user,
        subject: 'Sign Up mail Notify',
        html: '<h1> hello Welcome to coding Ninja </h1>'
        
    })
}