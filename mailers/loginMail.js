const nodemailer=require('../config/nodemailer');



exports.login= (user,name)=>{
    nodemailer.transporter.sendMail({
        from: 'rahulsingh4533@gmail.com',
        to: user,
        subject: 'Login SUCCESS',
        html: `<h1> Hello ${name} You Are Login SuccessFully`
    }, (err,info)=>{
        if(err) {
            console.log('error',err);
            return;
        }
        console.log(info);
    })
}