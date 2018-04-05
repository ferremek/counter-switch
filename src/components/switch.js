import React, { Component } from 'react';

class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn : true
    }

    this.statusText = this.statusText.bind(this);
    this.turnOn = this.turnOn.bind(this);
    this.turnOff = this.turnOff.bind(this);
  }

  statusText() {
    if (this.state.isOn === true) {
      return 'On';
    } else {
      return 'Off';
    }
  }

  turnOn() {
    return this.setState(prevState => ({
      isOn: true
    }));
  }

  turnOff() {
    return this.setState(prevState => ({
      isOn: false
    }));
  }

  render() {
    return(
      <div>
        <div className="display-1">
          {this.statusText()}
        </div>
        <button className="btn btn-success mr-1" onClick={this.turnOn}>On</button>
        <button className="btn btn-danger ml-1" onClick={this.turnOff}>Off</button>
      </div>
    );
  }
}

export default Switch;