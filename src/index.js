import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter';
import Switch from './components/switch';

class App extends Component {
  render() {
    return(
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-md-6">
            <Counter />
          </div>
          <div className="col-md-6">
            <Switch />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));