import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <div className="view">Some todos should be here</div>
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
