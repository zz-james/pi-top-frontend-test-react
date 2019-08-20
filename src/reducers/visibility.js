import * as C from '../constants/index';

const visibilityFilter = (state = C.SHOW_ALL, action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
