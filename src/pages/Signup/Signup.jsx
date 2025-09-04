import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';

class Signup extends Component {
  state = {
    message: ''
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <main className="page-container">
        <div>
          <SignupForm {...this.props} updateMessage={this.updateMessage} />
          {this.state.message && (
            <div className="message message-error text-center">
              {this.state.message}
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default Signup;