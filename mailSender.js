require('dotenv').config();
const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'',
        pass:''
    }
})

const mailOptions = {
    from : 'halim.khe2014@gmail.com',
    to : '',
    subject : 'kklklklklklk',
    text : 'aasalkjflkjsl'
};

transporter.sendMail(mailOptions , function(err,data){
    
    if(err){
        console.log('anerror occures')
    }else{
        console.log('email sent')
    }
})