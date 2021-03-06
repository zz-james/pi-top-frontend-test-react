import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AsyncActions from '../actions/async-actions';
import useMountEffect from '../hooks/hooks';
import * as C from '../constants/index';
import AddToDo from './AddToDo';
import VisibleToDoList from './Visible-to-do-list';
import LoadingSpinner from './LoadingSpinner';
import Details from './Details';
import TabBar from './TabBar';


const ToDoAppWrapped = ({
  getToDos,
  uimode
}) => {
  useMountEffect(getToDos);
  return (
    <div>
      <TabBar />

      {uimode === C.LOADING ? (
        <LoadingSpinner height={135} width={135} />
      ) : null}

      {uimode === C.LIST ? (
        <VisibleToDoList />
      ) : null}

      {uimode === C.EDIT ? (
        <AddToDo />
      ) : null}

      {uimode === C.DETAIL ? (
        <Details />
      ) : null}

    </div>
  );
};

ToDoAppWrapped.propTypes = {
  getToDos: PropTypes.func.isRequired,
  uimode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  uimode: state.uimode
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
