import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AsyncActions from '../actions/async-actions';
import useMountEffect from '../hooks/hooks';

// import {AddToDo} from './add-to-do.jsx'
// import {VisibleToDoList} from './visible-to-do-list.jsx'
// import {Details} from './details.jsx'
// import {TabBar} from './tab-bar.jsx'
// import * as C from './constants'

const ToDoAppWrapped = ({
  getToDos
}) => {
  useMountEffect(getToDos);
  return (
    <div>
      {/* <TabBar /> */}

      {/* {uimode == C.LIST ? (
        <VisibleToDoList />
      ) : null}

      {uimode == C.EDIT ? (
        <AddToDo />
      ) : null}

      {uimode == C.DETAIL ? (
        <Details />
      ) : null} */}

    </div>
  ) 
};

ToDoAppWrapped.propTypes = {
  getToDos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  detail: state.detail
});

const mapDispatchToProps = dispatch =>({
  getToDos: () => {
    dispatch(AsyncActions.getTodos());
  }
});

const ToDoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoAppWrapped);

export default ToDoApp;
