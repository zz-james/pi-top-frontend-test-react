import * as C from '../constants/index';

const uimode = (state = C.LOADING, action) => {
  switch (action.type) {
    case C.SET_UI_MODE:
      return action.mode;
    case `${C.ASYNC_GET_TODOS}_FULFILLED`:
      return C.LIST;
    default:
      return state;
  }
};

export default uimode;
