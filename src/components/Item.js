import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="card col-3">
        <img className="card-img-top" src={this.props.data.img} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default Item;
