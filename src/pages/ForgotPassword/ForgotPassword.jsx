import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import authService from "../../services/authService";

class ForgotPasswordPage extends Component {
  state = {
    email: "",
    message: "",
    error: "",
    resetToken: "",
    showResetForm: false,
    newPassword: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.forgotPassword(this.state.email);
      this.setState({
        message: response.message,
        resetToken: response.resetToken,
        showResetForm: true,
        error: "",
      });
    } catch (err) {
      this.setState({
        error: err.message || "Error sending reset request",
        message: "",
      });
    }
  };

  handleResetPassword = async (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword, resetToken } = this.state;
    
    if (newPassword !== confirmPassword) {
      this.setState({ error: "Passwords do not match" });
      return;
    }

    try {
      await authService.resetPassword(resetToken, newPassword);
      this.setState({
        message: "Password reset successfully! You can now log in with your new password.",
        error: "",
        showResetForm: false,
      });
    } catch (err) {
      this.setState({
        error: err.message || "Error resetting password",
        message: "",
      });
    }
  };

  render() {
    const { email, message, error, showResetForm, newPassword, confirmPassword } = this.state;
    
    return (
      <main className="ForgotPassword">
        <h3>Reset Password</h3>
        
        {!showResetForm ? (
          <form autoComplete="off" onSubmit={this.handleForgotPassword}>
            <p>Enter your email address to receive a password reset token:</p>
            <input
              type="email"
              autoComplete="off"
              id="email"
              value={email}
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="email"></label>
            <br />
            <button className="btn green">Send Reset Token</button>&nbsp;&nbsp;&nbsp;
            <Link className="btn red" to="/login">
              Back to Login
            </Link>
          </form>
        ) : (
          <form autoComplete="off" onSubmit={this.handleResetPassword}>
            <p>Enter your new password:</p>
            <input
              type="password"
              autoComplete="off"
              id="newPassword"
              value={newPassword}
              placeholder="New Password"
              name="newPassword"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="newPassword"></label>
            <br />
            <input
              type="password"
              autoComplete="off"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm New Password"
              name="confirmPassword"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="confirmPassword"></label>
            <br />
            <button className="btn green">Reset Password</button>&nbsp;&nbsp;&nbsp;
            <Link className="btn red" to="/login">
              Back to Login
            </Link>
          </form>
        )}
        
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </main>
    );
  }
}

export default ForgotPasswordPage;
