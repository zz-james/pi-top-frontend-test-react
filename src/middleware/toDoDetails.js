import * as C from '../constants/index';

const toDoDetails = ({ getState, dispatch }) => next => (action) => {
  if (action.type === `${C.ASYNC_GET_TODO_DETAILS}_FULFILLED`) {
    console.log(action.payload);

    const index = getState().todos.findIndex(element => element.id === action.payload.id);

    dispatch(index)   // imports constants and action creators then 
    // dispatch an action with the payload you just got and an extra field 
    // which is the index where to add the details
  } else {
    next(action);
  }
};

export default toDoDetails;