import * as C from '../constants/index';

export const setUiMode = mode => ({
  type: C.SET_UI_MODE,
  mode
});

export const showDetail = id => ({
  type: C.SHOW_DETAIL,
  id
});