import React, { Component } from 'react';

class SubscribeForm extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6 mx-auto">
          <form className="form-inline justify-content-center" onSubmit={(e) => this.onFormSubmit(e)}>
            <div className="form-group mx-sm-3 mb-2">
              <label className="sr-only">Email</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
          </form>
          <p>Thanks For Subscribing</p>
        </div>
      </div>
    );
  }
}

export default SubscribeForm;
