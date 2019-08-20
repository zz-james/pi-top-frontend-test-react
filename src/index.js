import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';

import './css/uikit.css';
import './css/custom.css';


ReactDOM.render(
  <App store={store} />,
  document.getElementById('app'),
);
