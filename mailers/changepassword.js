const nodemailer= require('../config/nodemailer');
// change password alert module 
exports.password= (user,name)=>{
    nodemailer.transporter.sendMail({
        from:"rahulsingh4533@gmail.com",
        to:user,
        subject: "Password Change Alert!!",
        html: `<h1>Hii ${name} Your Password has Been Change Resently </h1>`
    })
}