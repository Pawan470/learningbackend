var nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    requireTLS:true,
    auth: {
      user: 'pawan.zimo@gmail.com',
      pass: 'pawan3732', 
    },
})
var mailOptions = {
    from:'pawan.zimo@gmail.com',
    to:'ps682663@gmail.com',
    subject:'leaning backended',
    text:'I am testing learnigng purpose'
}
transport.sendMail(mailOptions,(error, info) =>{
    if(!error){
        console.log('Email send succesfully', info, info.response);
    }
    else{ console.log('got some error');}

})