import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/esm/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
