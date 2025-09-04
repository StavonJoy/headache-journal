const User = require('../models/user');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

module.exports = {
  signup,
  login,
  forgotPassword,
  resetPassword,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function forgotPassword(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ err: "No user found with that email address" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    // Set reset token and expiration (1 hour)
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    
    await user.save();
    
    // In a real app, you'd send an email here
    // For now, we'll return the token for testing
    res.json({ 
      message: "Password reset token generated",
      resetToken: resetToken, // Remove this in production
      instructions: "In a real app, this token would be sent to your email"
    });
  } catch (err) {
    res.status(500).json({ err: "Error generating reset token" });
  }
}

async function resetPassword(req, res) {
  try {
    const { token, newPassword } = req.body;
    
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });
    
    if (!user) {
      return res.status(400).json({ err: "Password reset token is invalid or has expired" });
    }
    
    // Set new password
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    
    await user.save();
    
    // Generate new JWT token
    const jwtToken = createJWT(user);
    
    res.json({ 
      message: "Password has been reset successfully",
      token: jwtToken
    });
  } catch (err) {
    res.status(500).json({ err: "Error resetting password" });
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}