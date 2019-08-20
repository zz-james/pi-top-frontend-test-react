import * as C from '../constants/index';
import * as AsyncActions from '../actions/async-actions';
import { setPending } from '../actions/actions';

const toggleToDoStart = ({ dispatch }) => next => (action) => {
  if (action.type === C.TOGGLE_TODO) {
    dispatch(AsyncActions.persistToggleToDo(action.id, action.isDone));
    dispatch(setPending(action.id, true));
    next(action);
  } else {
    next(action);
  }
};

const toggleToDoEnd = ({ dispatch }) => next => (action) => {
  if (action.type === `${C.ASYNC_TOGGLE_TODO}_FULFILLED`) {
    const id = action.payload.url.split('/').pop();  // not getting anything more useful back from API?
    dispatch(setPending(id, false));
    next(action);
  } else {
    next(action);
  }
};

const toggleToDo = [toggleToDoStart, toggleToDoEnd];

export default toggleToDo;
