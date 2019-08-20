import * as C from '../constants/index';

const detail = (state = null, action) => {
  switch (action.type) {
    case C.SHOW_DETAIL:
      return action.id;
    default:
      return state;
  }
};

export default detail;