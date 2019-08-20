import * as actions from '../../actions/actions';
import * as C from '../../constants/index';

test('method setUiMode()', () => {
  const mode = 'a string';
  const output = actions.setUiMode(mode);
  expect(output).toEqual({
    type: C.SET_UI_MODE,
    mode
  });
});

test('method showDetail()', () => {
  const id = 'foo';
  const output = actions.showDetail(id);
  expect(output).toEqual({
    type: C.SHOW_DETAIL,
    id
  });
});

test('method setVisibilityFilter()', () => {
  const filter = 'foo';
  const output = actions.setVisibilityFilter(filter);
  expect(output).toEqual({
    type: C.SET_VISIBILITY_FILTER,
    filter
  });
});

test('method toggleToDo()', () => {
  const id = 'foo';
  const isDone = true;
  const output = actions.toggleToDo(id, isDone);
  expect(output).toEqual({
    type: C.TOGGLE_TODO,
    id,
    isDone
  });
});

test('method setPending()', () => {
  const id = 'foo';
  const pending = true;
  const output = actions.setPending(id, pending);
  expect(output).toEqual({
    type: C.TODO_SET_PENDING,
    id,
    pending
  });
});

test('method clearToDos()', () => {
  const output = actions.clearToDos();
  expect(output).toEqual({
    type: C.CLEAR_ALL_TODOS
  });
});
