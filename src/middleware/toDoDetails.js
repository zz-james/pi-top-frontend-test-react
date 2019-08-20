import * as C from '../constants/index';
import { setUiMode, showDetail } from '../actions/actions';

const toDoDetails = ({ getState, dispatch }) => next => (action) => {
  if (action.type === `${C.ASYNC_GET_TODO_DETAILS}_FULFILLED`) {
    const index = getState().todos.findIndex(element => element.id === action.payload.id);
    const newAction = { ...action, index };
    next(newAction);
    dispatch(showDetail(index));
    dispatch(setUiMode(C.DETAIL));
  } else {
    next(action);
  }
};

export default toDoDetails;
