import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div className="form-container">
        <h3 className="text-center mb-6">Create Your Account</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              value={name}
              name="name"
              placeholder="Enter your full name"
              className="form-input"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              placeholder="Enter your email"
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
              value={password}
              name="password"
              placeholder="Create a password"
              className="form-input"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <input
              type="password"
              autoComplete="off"
              id="confirm"
              value={passwordConf}
              name="passwordConf"
              placeholder="Confirm your password"
              className="form-input"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <button 
              className="btn btn-primary" 
              disabled={this.isFormInvalid()}
            >
              Create Account
            </button>
            <Link to="/" className="btn btn-link text-center">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
