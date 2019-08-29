import React, {Component} from 'react';
import loginImg from 'assets/loginImg.svg';
import axios from 'axios';
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
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

    this.setState({
      [name]: value,
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
            <p>Join the Community</p>
          </div>
          <div className="form">
            <div className="form-group">
              {/* <label htmlFor="username">UserName</label> */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="button"
            className="btn"
            onClick={this.handleSubmit.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
