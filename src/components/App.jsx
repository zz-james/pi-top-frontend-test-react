import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import ToDoApp from './ToDoApp';


const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ToDoApp uimode="whatever" />
        <div className="view">Some todos should be here</div>
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
