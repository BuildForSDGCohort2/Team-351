const mailer = require("../helpers/mail");
const sendMail = (req, res) => {
  const { email, subject, message } = req.body;
  mailer(email, subject, message, (err, response) => {
    if (err) {
      res.status(500).json({
        message: "Internal Error occurred",
      });
    } else {
      res.status(200).json({
        message: "Email Sent!!!!",
      });
    }
  });
};

module.exports = sendMail;
