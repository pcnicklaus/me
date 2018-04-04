import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    );
  }
}

export default App;
