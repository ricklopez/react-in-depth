import React, { Component } from 'react';
import SubscribeForm from './SubscribeForm';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
              attention to featured content or information.</p>
          <hr className="my-4"></hr>
          <p>It uses utility classes for typography and spacing to space content out within the larger
              container.</p>
          <SubscribeForm/>
      </div>
    );
  }
}

export default Jumbotron;
