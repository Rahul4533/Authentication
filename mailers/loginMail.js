const nodemailer=require('../config/nodemailer');


// login alert mail
exports.login= (user,name)=>{
    nodemailer.transporter.sendMail({
        from: 'rahulsingh4533@gmail.com',
        to: user,
        subject: 'Login SUCCESS',
        html: `<h1> Hello ${name} You Are Login SuccessFully`
    })
}