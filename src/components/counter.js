import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    return this.setState(prevState => ({
      currentCount: prevState.currentCount += 1
    }));
  }

  decrementCount() {
    if (this.state.currentCount > 0) {
      return this.setState(prevState => ({
        currentCount: prevState.currentCount -= 1
      }));
    }
  }

  render() {
    return (
      <div>
        <div className="display-1">{this.state.currentCount}</div>
        <button className="btn btn-success py-2 px-3 mr-1" onClick={this.incrementCount}>+</button>
        <button className="btn btn-danger py-2 px-3 ml-1" onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default Counter;