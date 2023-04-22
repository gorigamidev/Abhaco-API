<<<<<<< HEAD
const EmailService = require('../assets/mailService.js');

// Create an in-memory data store for password reset tokens
const resetTokens = new Map();

// Define the timeout duration for password reset tokens (30 minutes)
const TOKEN_TIMEOUT = 30 * 60 * 1000;

// Function to remove expired tokens from the in-memory data store
function removeExpiredTokens() {
  const now = Date.now();
  for (const [email, { token, createdAt }] of resetTokens.entries()) {
    if (now - createdAt > TOKEN_TIMEOUT) {
      resetTokens.delete(email);
    }
  }
}

//Function for Handle forgot password requests
async function forgotPassReq(req, res, next) {
    try {
      // Get the email address from the request body
      const { email } = req.body;
  
      // Generate a password reset token
      const resetToken = crypto.randomBytes(20).toString('hex');
  
      // Save the reset token and its creation time to the in-memory data store
      resetTokens.set(email, { token: resetToken, createdAt: Date.now() });
  
      // Send an email with the class
      await EmailService.sendPasswordResetEmail(email, resetToken);
  
      // Send a success response
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error('Error handling forgot password request:', error);
      next(error);
    }
  }
  

const bcrypt = require('bcrypt');
 const { update } = require('./usersMod');
  
// Handle password reset requests
async function resetPass(req, res, next) {
    try {
      // Get the reset token and new password from the request body
      const { token, password } = req.body;
  
      // Remove expired tokens from the in-memory data store
      removeExpiredTokens();
  
      // Find the email address associated with the given reset token
      const { email, createdAt } = Array.from(resetTokens.entries())
        .find(([key, { token: storedToken }]) => storedToken === token) || {};
  
      if (!email || Date.now() - createdAt > TOKEN_TIMEOUT) {
        // If no email address is found, or the token is expired, send an error response
        res.status(400).json({ message: 'Invalid reset token' });
        return;
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Update the user's password in the database
      await update({ email }, { password: hashedPassword });
  
      // Remove the reset token from the in-memory data store
      resetTokens.delete(email);
  
      // Send a success response
      res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
      // Handle errors
      next(error);
    }
};

//Exporting both functions
=======
const EmailService = require('../assets/mailService.js');
const crypto = require('crypto');

// Create an in-memory data store for password reset tokens
const resetTokens = new Map();

// Define the timeout duration for password reset tokens (30 minutes)
const TOKEN_TIMEOUT = 30 * 60 * 1000;

// Function to remove expired tokens from the in-memory data store
function removeExpiredTokens() {
  const now = Date.now();
  for (const [email, { token, createdAt }] of resetTokens.entries()) {
    if (now - createdAt > TOKEN_TIMEOUT) {
      resetTokens.delete(email);
    }
  }
}

//Function for Handle forgot password requests
async function forgotPassReq(req, res, next) {
    try {
      // Get the email address from the request body
      const { email } = req.body;
  
      // Generate a password reset token
      const resetToken = crypto.randomBytes(3).toString('hex');
  
      // Save the reset token and its creation time to the in-memory data store
      resetTokens.set(email, { token: resetToken, createdAt: Date.now() });
  
      // Send an email with the class
      await EmailService.sendPasswordResetEmail(email, resetToken);
  
      // Send a success response
      return message = { message: 'Password reset email sent' };
    } catch (error) {
      console.error('Error handling forgot password request:', error);
      throw error;
    }
  }
  

const bcrypt = require('bcrypt');
const { update } = require('./usersMod');
  
// Handle password reset requests
async function resetPass(req, res) {
    try {
      console.log('Iniciate Reset Password Request');
      console.log('Request: ', req);
      console.log('Reset Tokens: ', resetTokens);
      // Get the reset token and new password from the request body
      //const email = req.email;
      const reqToken = req.token;
      const password = req.password;
      
  
      // // Remove expired tokens from the in-memory data store
      removeExpiredTokens();

      //Function to get email from token
      function getEmailFromToken(reqToken) {
        for (let [email, { token }] of resetTokens.entries()) {
          if (token === reqToken) {
            return email;
          }
        }
        return null; // Return null if no matching token is found
      }
  
      // Find the email address associated with the given reset token
      const email = getEmailFromToken(reqToken);
  
      if (!email) {
        // If no email address is found, or the token is expired, send an error response
        return message = { message: 'Invalid reset token' };
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Update the user's password in the database
      await update({ email }, { password: hashedPassword });
  
      // Remove the reset token from the in-memory data store
      resetTokens.delete(email);

      // return message = {message: 'Password reset successfully' };
      message = { message: 'Password reset successfully' };
      return message;
    } catch (error) {
      // Handle errors
      throw error;
    }
};

//Exporting both functions
>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
module.exports = { forgotPassReq, resetPass };  