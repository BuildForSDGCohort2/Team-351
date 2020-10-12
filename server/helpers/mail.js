const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

require("dotenv").config();

const auth = {   
  auth: {
    api_key: "3c02145bc957b65dc4719ff9a8f6c0af-07e45e2a-443e7c0a",
    domain: "sandboxfd0dd7923a234a9f8af08480216baf9f.mailgun.org" ,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailer = (email, subject, message, cb) => {
  const mailOptions = {
    from: email,
    to: "victoryohanna@gmail.com",
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, result) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

module.exports = mailer;
