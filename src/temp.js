import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nikchhasiaya0407@gmail.com',          // Your Gmail address
    pass: 'bfoycjpgxmredtmg'     // Your Gmail app-specific password
  }
});

const mailOptions = {
  from: 'nikchhasiaya0407@gmailnp.com',
  to: 'nikhilchhasiya18@gmail.com',  // Recipient email
  subject: 'Test Email',               // Subject
  text: 'Hello, this is a test email!' // Body text
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);  // Log if there's an error
  } else {
    console.log('Email sent:', info.response);  // Log the success response
  }
});
