import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './store';

import './css/app.css';
import './css/header.css';


ReactDOM.render(
  <App store={store} />,
  document.getElementById('app'),
);
