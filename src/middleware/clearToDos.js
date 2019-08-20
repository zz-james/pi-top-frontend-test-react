/* eslint-disable no-restricted-globals */
import * as C from '../constants/index';
import * as AsyncActions from '../actions/async-actions';
import { setUiMode } from '../actions/actions';

const clearToDosConfirm = ({ dispatch }) => next => (action) => {
  if (action.type === C.CLEAR_ALL_TODOS) {
    // old school but we don't have time to get fancy

    // eslint-disable-next-line no-alert
    const q = confirm('This will delete all todos! Are you sure?');

    if (q === true) {
      dispatch(AsyncActions.clearAllTodos());
      dispatch(setUiMode(C.LOADING));
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};

const clearToDosFulfilled = ({ dispatch }) => next => (action) => {
  if (action.type === `${C.ASYNC_CLEAR_ALL_TODOS}_FULFILLED`) {
    dispatch(AsyncActions.getTodos());
    dispatch(setUiMode(C.LOADING));
  } else {
    next(action);
  }
};

const clearToDos = [clearToDosConfirm, clearToDosFulfilled];
export default clearToDos;
