
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
    user: 'azizbousnina2000@gmail.com',
    pass: 'iqmfzvrjiwkqyvdv'
  }
});
const mailOptions = {
  from: 'azizbousnina2000@gmail.com',
  to: 'azizbousnina2000@gmail.com', 
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js'
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});