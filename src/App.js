import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './Jumbotron';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    subscribed: false,
    items: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
