/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {Footer} from './footer.jsx'
// import {showDetail, setUiMode} from './action-creators'
import * as C from '../constants/index';

/**
 * filters the  list by colour
 * @param {array} todos
 * @param {string} filter
 */
const getVisibleToDos = (
  todos,
  filter
) => {
  switch (filter) {
    case C.SHOW_ALL:
      return todos;
    default:
      return todos;
  }
};

/**
 * renders the individual todo list entry
 * @param {props} param0
 */
const ToDo = ({
  onClick,
  title,
}) => (
  <li onClick={onClick}>
    <span className="uk-button uk-button-text">{title}</span>
  </li>
);
ToDo.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

/**
 * renders the list of todos
 * @param {props} param0
 */
const ToDoList = ({
  todos,
  onToDoClick
}) => (
  <div className="uk-card uk-card-default uk-width-xlarge">
    <div className="uk-card-header">
      ClickToDo to see details
    </div>
    <div className="uk-card-body">
      <ul>
        {todos.map(todo => (
          <ToDo
            key={todo.id} {...todo}
            onClick={() => onToDoClick(todo.id)}
          />
        ))}
      </ul>
    </div>
    <div className="uk-card-footer">
      {/* <Footer /> */}
    </div>
  </div>
);
ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToDoClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: getVisibleToDos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onToDoClick(id) {
    // dispatch(setUiMode(C.DETAIL));
    // dispatch(showDetail(id))
  }
});

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default VisibleToDoList;
