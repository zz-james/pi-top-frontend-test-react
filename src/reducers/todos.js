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
}

const todos = (state = [], action) => {
  switch (action.type) {
    case `${C.ASYNC_GET_TODOS}_FULFILLED`:
      return [
        ...state,
        ...action.payload
      ];
    case C.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    default:
      return state;
  }
};

export default todos;
