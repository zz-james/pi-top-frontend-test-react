import { combineReducers } from 'redux';

import todos from './todos';
import uimode from './uimode';
import detail from './detail';

const appReducer = combineReducers({
  todos,
  uimode,
  detail
});

export default appReducer;
