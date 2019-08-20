import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import toDoDetails from './middleware/toDoDetails';
import fetchToDo from './middleware/fetchToDo';
import clearToDos from './middleware/clearToDos';
import toggleToDo from './middleware/toggleToDo';
import rootReducer from './reducers/rootReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({});
const middlewares = [toDoDetails, fetchToDo, ...toggleToDo, ...clearToDos, logger, promise];

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
