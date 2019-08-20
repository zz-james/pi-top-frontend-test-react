import * as C from '../constants/index';

export const setUiMode = mode => ({
  type: C.SET_UI_MODE,
  mode
});

export const showDetail = id => ({
  type: C.SHOW_DETAIL,
  id
});

export const setVisibilityFilter = filter => ({
  type: C.SET_VISIBILITY_FILTER,
  filter
});

export const toggleToDo = (id, isDone) => ({
  type: C.TOGGLE_TODO,
  id,
  isDone
});

export const setPending = (id, pending) => ({
  type: C.TODO_SET_PENDING,
  id,
  pending
});
