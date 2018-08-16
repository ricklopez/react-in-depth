import React, { Component } from 'react';

export default (props) => {
    return (
      <div className="card col-3">
        <img className="card-img-top" src={props.data.img} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
}
