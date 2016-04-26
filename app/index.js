import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from 'src/store/index';

import 'expose?$!expose?jQuery!jquery';
import 'babel-polyfill';
import 'es5-shim';

import './assets/css/style.css';
import App from 'src/app.src';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
