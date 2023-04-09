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
module.exports = { forgotPassReq, resetPass };  