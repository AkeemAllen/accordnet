import React, {Component} from 'react';
import './LandingPage.scss';
import {Login, Register} from '../../components/login';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogginActive: true,
    };
  }

  changeState() {
    const {isLogginActive} = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }

    this.setState(prevstate => ({
      isLogginActive: !prevstate.isLogginActive,
    }));
  }

  render() {
    const {isLogginActive} = this.state;
    const current = isLogginActive ? 'Register' : 'Login';
    const currentActive = isLogginActive ? 'Login' : 'Register';
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSideComponent
            current={current}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSideComponent = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LandingPage;
