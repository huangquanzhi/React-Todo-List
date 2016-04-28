import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './src/store/index';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'expose?$!expose?jQuery!jquery';
import 'jquery';
//import 'bootstrap-webpack';
import 'babel-polyfill';
import 'es5-shim';

import './assets/css/style.css';
import './vendors/css/bootstrap.min.css';
import App from './src/app.js';

const store = configStore();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
