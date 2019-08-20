import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import * as C from '../constants/index';
import Header from './Header';
import ToDoApp from './ToDoApp';


const App = ({ store }) => (
  <Provider store={store}>
    <Header />
    <ToDoApp uimode={C.LOADING} />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
