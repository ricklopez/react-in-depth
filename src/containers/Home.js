import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import './../styles/App.css';
import Jumbotron from './../components/Jumbotron';
import ItemRow from './../components/ItemRow';
import env from './../env';

class Home extends Component {
  constructor(props){
    super(props);
    this.emailInput = null;
    this.state = {
    subscribed: false,
    items: []
    }
    
    this.setTextInputRef = element => {
      this.emailInput = element;
    };
  }
  
  //LifeCycle Methods
  componentDidMount(){
    this.loadItemsFromApi();
  }
  
  // Methods
  loadItemsFromApi(){
    fetch(env.MOCKAPI + '/posts')
    .then(results => {
      console.log(results);
      return results.json();
    })
    .then(data => {
      this.setState({
        items: data.map((i) => i )
      });
      console.log(data);
    });
  }
  
  onFormSubmit(e){
    e.preventDefault();
    console.log(e);
    console.log(this.emailInput.value);
    this.setState({
    subscribed: true
    }, () => {this.emailInput.value = ''});
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
        <Jumbotron 
          subscribed={this.state.subscribed} 
          items={this.state.items} onFormSubmit={(e) => this.onFormSubmit(e)} 
          setTextInputRef={this.setTextInputRef}/>
          
        <div className="container">
          <ItemRow items={this.state.items}/>
        </div>     
      </div>
    );
  }
}

export default Home;
