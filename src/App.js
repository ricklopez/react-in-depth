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
  
  onFormSubmit(e){
    e.preventDefault();
    console.log(e);
    this.setState({
    subscribed: true
    }, () => {console.log(this.state.subscribed)});
    e.target.value = '';
    console.log(this.state.subscribed);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Jumbotron subscribed={this.state.subscribed} items={this.state.items} onFormSubmit={(e) => this.onFormSubmit(e)}/>
      </div>
    );
  }
}

export default App;
