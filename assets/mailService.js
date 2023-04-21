const nodemailer = require('nodemailer');
  // Create a URL for the password reset page
  const resetUrl = `http://localhost:5173/resetpassword/`;


async function sendPasswordResetEmail(email, resetToken) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
  
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Password Reset Request',
          html: `
          <main style="background:red">
            <h1>Hello,</h1>
            <p>You have requested a password reset for your account:</p>
            <p>Copy the code below and paste it in the reset password page</p>
            <h3>${resetToken}</h3>
            <p><a href="${resetUrl}">${resetUrl}</a></p>
            <p>If you did not make this request, you can safely ignore this email.</p>
          </main>
          `
        };
  
        await transporter.sendMail(mailOptions);
      } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error;
      }
    };
  

module.exports = { sendPasswordResetEmail };