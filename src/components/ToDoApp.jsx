import React from 'react';
import { connect } from 'react-redux';

import useMountEffect from '../hooks/hooks';

// import {AddToDo} from './add-to-do.jsx'
// import {VisibleToDoList} from './visible-to-do-list.jsx'
// import {Details} from './details.jsx'
// import {TabBar} from './tab-bar.jsx'
// import * as C from './constants'

export const ToDoAppWrapped = ({
  uimode
}) => {
  useMountEffect(dispatch())
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
)};

const mapStateToProps = state => ({
  uimode: state.uimode,
  detail: state.detail
});

const mapDispatchToProps = dispatch =>({
  onGetToDos: () => ({
    dispatch(/*action creator lives here*/);
  })
});

export const ToDoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoAppWrapped);
