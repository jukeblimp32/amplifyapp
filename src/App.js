import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload Part 32.
        </p>
	<a
          classNmae="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </header>
      </div>
    );
  }
}

export default App;
