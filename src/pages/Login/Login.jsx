import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main className="page-container">
        <div className="form-container">
          <h3 className="text-center mb-6">Welcome Back</h3>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
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
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                placeholder="Enter your password"
                value={pw}
                name="pw"
                className="form-input"
                onChange={this.handleChange}
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="btn btn-primary">Sign In</button>
              <Link className="btn btn-link text-center" to="/">
                Cancel
              </Link>
              <Link to="/forgot-password" className="btn btn-link text-center">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default LoginPage;
