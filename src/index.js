import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/esm/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import SignIn from './SignIn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <BrowserRouter>
      <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route exact path="/" component={App} />
      </Switch>
   </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
