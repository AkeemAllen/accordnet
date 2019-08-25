import React, {Component} from 'react';
import './signUp.css';

export default class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit>
          <input placeholder="Name" type="text" />
          <br />
        </form>
      </div>
    );
  }
}
