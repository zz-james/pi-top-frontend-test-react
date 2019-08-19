import { combineReducers } from 'redux';

import todos from './todos';
import uimode from './uimode';

const appReducer = combineReducers({
  todos,
  uimode
});

export default appReducer;
