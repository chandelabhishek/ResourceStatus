import React, { Component } from 'react';
import './App.css';
import ResourceStatus from './ResourcePriceStatus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ResourceStatus />
        </header>
      </div>
    );
  }
}

export default App;
