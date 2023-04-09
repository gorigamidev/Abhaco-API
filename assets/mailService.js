const nodemailer = require('nodemailer');
  // Create a URL for the password reset page
  const resetUrl = `https://yourwebsite.com/reset-password?token=`;


  class EmailService {
    static async sendPasswordResetEmail(email, resetToken) {
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
            <p>Hello,</p>
            <p>You have requested a password reset for your account. Click the link below to reset your password:</p>
            <p><a href="${resetUrl}">${resetUrl}</a></p>
            <p>If you did not make this request, you can safely ignore this email.</p>
          `
        };
  
        await transporter.sendMail(mailOptions);
      } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error;
      }
    }
  }
  

module.exports = { EmailService };