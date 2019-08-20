/* global toJson */
import React from 'react'; // eslint-disable-line no-unused-vars
import VisibleToDoList from '../../components/Visible-to-do-list';


let mockProps;
beforeEach(() => {
  jest.resetAllMocks();
  mockProps = {
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
    ],
    onToDoClick: jest.fn(),
    onToggleTodo: jest.fn()
  };
});

test('renders the Game component', () => {
  const wrapper = shallow(<VisibleToDoList {...mockProps} />);
  expect(toJson(wrapper, { noKey: false })).toMatchSnapshot();
});
