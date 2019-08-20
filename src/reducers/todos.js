import * as C from '../constants/index';

const todo = (state, action) => {
  switch (action.type) {
    case C.ADD_TODO:
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case `${C.ASYNC_GET_TODOS}_FULFILLED`:
      return [
        ...action.payload
      ];
    case C.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case `${C.ASYNC_GET_TODO_DETAILS}_FULFILLED`:
      return [
        ...state.slice(0, action.index),
        action.payload,
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default todos;
