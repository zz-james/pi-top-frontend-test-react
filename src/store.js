import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware' 

import rootReducer from './rootReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [promise];

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
