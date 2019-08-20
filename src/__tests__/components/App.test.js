/* global toJson */
import React from 'react'; // eslint-disable-line no-unused-vars
import App from '../../components/App';

beforeEach(() => {
  jest.resetAllMocks();
});

test('renders the App component', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper, { noKey: false })).toMatchSnapshot();
});
