import React, {Component} from 'react';
import loginImg from 'assets/loginImg.svg';
import axios from 'axios';
import {FormErrors} from '../FormErrors';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      formErrors: {email: '', password: '', username: ''},
      emailValid: false,
      passwordValid: false,
      usernameValid: false,
      formValid: false,
    };
  }

  handleSubmit() {
    const {username, password, email} = this.state;
    axios.post('https://localhost:5001/api/auth/register', {
      username,
      password,
      email,
    });
  }

  handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      },
    );
  }

  validateField(fieldName, value) {
    // eslint-disable-next-line prefer-const
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let usernameValid = this.state.usernameValid;

    switch (fieldName) {
      case 'username':
        {
          usernameValid = value.length >= 3;
          fieldValidationErrors.username = usernameValid
            ? ''
            : 'Name is too short';
        }
        break;
      case 'email':
        {
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid
            ? ''
            : 'Email Syntax is incorrect';
        }
        break;
      case 'password':
        {
          passwordValid = value.length >= 6;
          fieldValidationErrors.passwordValid = passwordValid
            ? ''
            : 'Password is too short';
        }
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        usernameValid: usernameValid,
      },
      this.validateForm,
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.usernameValid &&
        this.state.emailValid &&
        this.state.passwordValid,
    });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {/* <div className="header">Register</div> */}
        <div className="content">
          {/* <div className="image">
            <img src={loginImg} alt="loginImage" />
          </div> */}
          <div className="header">
            <h3>AccordNet</h3>
            <p>Welcome Back!</p>
          </div>
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className="form">
            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="submit"
            className="btn"
            onClick={this.handleSubmit.bind(this)}
            disabled={!this.state.formValid}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
