const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
  const { name, email, message } = JSON.parse(event.body);

  const { SENDER_EMAIL, SENDER_PASS, RECEIVER_EMAIL } = process.env;

  const transporter = nodemailer.createTransport({
    service: 'zoho',
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASS
    }
  });

  const send = (body, isSuccess) => {
    if (isSuccess) {
      const mailOptions = {
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        subject: 'Form Submission',
        text: `Name: ${name}\n\n Email: ${email}\n\n Message: ${message}`
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: body, isSuccess })
    });
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      send('Please enter all fields', false);
      throw new Error('Please enter all fields');
    }

    try {
      send(`Thank you. Your message has been sent.`, true);
    } catch (error) {
      console.log(error);
    }
  };

  if (event.httpMethod == 'POST') {
    handleSubmit();
  }
};
