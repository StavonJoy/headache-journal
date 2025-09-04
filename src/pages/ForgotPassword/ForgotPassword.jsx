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
      <main className="page-container">
        <div className="form-container">
          <h3 className="text-center mb-6">Reset Your Password</h3>
          
          {!showResetForm ? (
            <form autoComplete="off" onSubmit={this.handleForgotPassword}>
              <p className="text-center mb-4" style={{color: '#6b7280'}}>
                Enter your email address and we'll send you a reset token
              </p>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  name="email"
                  className="form-input"
                  onChange={this.handleChange}
                  required
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="btn btn-primary">Send Reset Token</button>
                <Link className="btn btn-link text-center" to="/login">
                  Back to Login
                </Link>
              </div>
            </form>
          ) : (
            <form autoComplete="off" onSubmit={this.handleResetPassword}>
              <p className="text-center mb-4" style={{color: '#6b7280'}}>
                Create your new password below
              </p>
              
              <div className="form-group">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  id="newPassword"
                  value={newPassword}
                  placeholder="Enter new password"
                  name="newPassword"
                  className="form-input"
                  onChange={this.handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm new password"
                  name="confirmPassword"
                  className="form-input"
                  onChange={this.handleChange}
                  required
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="btn btn-primary">Reset Password</button>
                <Link className="btn btn-link text-center" to="/login">
                  Back to Login
                </Link>
              </div>
            </form>
          )}
          
          {message && <div className="message message-success">{message}</div>}
          {error && <div className="message message-error">{error}</div>}
        </div>
      </main>
    );
  }
}

export default ForgotPasswordPage;
