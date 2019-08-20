import { combineReducers } from 'redux';

import todos from './todos';
import uimode from './uimode';
import detail from './detail';
import visibilityFilter from './visibility';

const appReducer = combineReducers({
  todos,
  uimode,
  detail,
  visibilityFilter
});

export default appReducer;
