import * as C from '../constants/index';
import * as AsyncActions from '../actions/async-actions';
import { setUiMode } from '../actions/actions';

const fetchToDo = ({ dispatch }) => next => (action) => {
  if (action.type === `${C.ASYNC_ADD_TODO}_FULFILLED`) {
    dispatch(AsyncActions.getTodos());
    dispatch(setUiMode(C.LOADING));
    next(action);
  } else {
    next(action);
  }
};

export default fetchToDo;
