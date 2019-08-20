import * as C from '../../constants/index';
import todos from '../../reducers/todos';

let initialState;
let finalState;
beforeEach(() => {
  initialState = [];
  finalState = [];
});

test('return the initial state', () => {
  expect(todos(undefined, {})).toEqual(initialState);
});

describe('add the downloaded todos', () => {
  test('adds todos to todo list', () => {
    // setup
    const newtodos = [
      {
        id: 'zXizI_6T4',
        createdAt: '2018-08-07T11:25:52.087Z',
        title: 'get milk',
        priority: '3',
        isDone: false
      },
      {
        id: 'gsrbE1H3Z',
        createdAt: '2018-08-07T11:26:01.463Z',
        title: 'conquer the world',
        priority: '8',
        isDone: false
      },
      {
        id: 'wCPA02bge',
        createdAt: '2019-08-20T14:52:37.185Z',
        title: 'Play a nice game of chess',
        priority: 3,
        isDone: false
      }
    ];
    finalState = newtodos;

    // function under test
    const state = todos(initialState, {
      type: `${C.ASYNC_GET_TODOS}_FULFILLED`,
      payload: newtodos
    });

    // expectations
    expect(state).toEqual(finalState);
  });

  test('adds a single todo', () => {
    // setup
    const todo = {
      id: 'wCPA02bge',
      createdAt: '2019-08-20T14:52:37.185Z',
      title: 'Play a nice game of chess',
      priority: 3,
      isDone: false
    };
    finalState = [todo];

    // function under test
    const state = todos(initialState, {
      type: C.ADD_TODO,
      todo
    });

    // expectations
    expect(state).toEqual(finalState);
  });
});
// etc.
