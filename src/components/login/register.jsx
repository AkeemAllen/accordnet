import React, {Component} from 'react';
import loginImg from 'assets/loginImg.svg';
import axios from 'axios';
import {FormErrors} from '../FormErrors';

export class Register extends Component {
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
    axios.post('https://localhost:44307/api/auth/register', {
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
          fieldValidationErrors.password = passwordValid
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
    const {formErrors} = this.state;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="header">
            <h3>AccordNet</h3>
            <p>Join the Community</p>
          </div>
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange.bind(this)}
                className={
                  formErrors.username == 'Name is too short'
                    ? 'inputError'
                    : 'inputSuccess'
                }
              />
              <div className="error">
                {formErrors.username == 'Name is too short'
                  ? 'Name is too short'
                  : ''}
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className={
                  formErrors.email == 'Email Syntax is incorrect'
                    ? 'inputError'
                    : 'inputSuccess'
                }
              />
              <div className="error">
                {formErrors.email == 'Email Syntax is incorrect'
                  ? 'Email Syntax is incorrect'
                  : ''}
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className={
                  formErrors.password == 'Password is too short'
                    ? 'inputError'
                    : 'inputSuccess'
                }
              />
              <div className="error">
                {formErrors.password == 'Password is too short'
                  ? 'Password is too short'
                  : ''}
              </div>
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
            Register
          </button>
        </div>
      </div>
    );
  }
}
