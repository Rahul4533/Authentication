const nodemailer=require('nodemailer')
const ejs=require('ejs');
const path=require('path');

let transpoter=nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: 'rahulsingh4533@gmail.com',
        pass: 'orzvjnntncbjascs'
    }
})

let renderTemplete= (data,relativePath)=>{
    let mailhtml;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,templete){
            if(err){
                console.log('error in rendering templete')
                return;
            }
            mailhtml=templete
        }
    )

    return mailhtml;
}


module.exports= {
    transporter: transpoter,
    renderTemplete: renderTemplete
}
