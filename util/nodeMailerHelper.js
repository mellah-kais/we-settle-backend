const nodemailer = require('nodemailer')
require('dotenv').config()

const sendJwtTokenByMail = (token,mail) => {
      let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
            }
      });
      transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: mail,
            subject: 'Message',
            text: `I hope this Token ${token} gets delivered!`
      }, (err, info) => {
            if(err) throw err
            console.log(info.envelope);
            console.log(info.messageId);
      });
}

module.exports = sendJwtTokenByMail
