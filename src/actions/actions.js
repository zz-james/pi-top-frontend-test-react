/* eslint-disable import/prefer-default-export */
import * as C from '../constants/index';

export const showDetail = id => ({
  type: C.SHOW_DETAIL,
  id
});
