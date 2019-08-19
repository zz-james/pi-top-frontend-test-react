import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AsyncActions from '../actions/async-actions';
import useMountEffect from '../hooks/hooks';


import VisibleToDoList from './Visible-to-do-list';

const ToDoAppWrapped = ({
  getToDos
}) => {
  useMountEffect(getToDos);
  return (
    <div>
      <VisibleToDoList />
    </div>
  );
};

ToDoAppWrapped.propTypes = {
  getToDos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  detail: state.detail
});

const mapDispatchToProps = dispatch => ({
  getToDos: () => {
    dispatch(AsyncActions.getTodos());
  }
});

const ToDoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoAppWrapped);

export default ToDoApp;
