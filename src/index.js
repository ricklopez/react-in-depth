import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'jquery/dist/jquery.js';
import 'popper.js/dist/esm/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//const store = createStoreWithMiddleware(reducers);
const store = createStore(reducers,composeWithDevTools(applyMiddleware(ReduxPromise)));
console.log("STORE:");
window.store = store;
console.log(store);

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
      <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route exact path="/" component={Home} />
      </Switch>
   </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
