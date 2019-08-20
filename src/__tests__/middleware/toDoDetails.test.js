import toDoDetails from '../../middleware/toDoDetails';
import * as C from '../../constants/index';

const next = jest.fn();

describe('toDoDetails middleware', () => {
  let store;
  beforeEach(() => {
    store = {
      dispatch: jest.fn(),
      getState: jest.fn()
    };
  });

  test('ignores the current action', () => {
    store.getState.mockReturnValue({
      streakData: {
        active: true
      }
    });
    toDoDetails(store)(next)({ type: 'foo' });
    expect(store.dispatch).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(expect.any(Object));
  });

  test('dispatch a show detail and setUImode and pass on the action with next', () => {
    // setup
    const action = {
      type: `${C.ASYNC_GET_TODO_DETAILS}_FULFILLED`
    };

    store.getState.mockReturnValue({
      todos: [
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
      ]
    });

    // function under test
    toDoDetails(store)(next)(action);

    // expectations
    expect(next).toHaveBeenCalledWith(expect.any(Object));
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Object));
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
