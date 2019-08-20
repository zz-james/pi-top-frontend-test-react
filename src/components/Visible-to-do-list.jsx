/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Checkbox from './Checkbox';
import LoadingSpinner from './LoadingSpinner';
import { getTodoDetail } from '../actions/async-actions';
import { toggleToDo } from '../actions/actions'
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
    case C.SHOW_COMPLETED:
      return todos.filter(t => t.isDone === true);
    case C.SHOW_INCOMPLETE:
      return todos.filter(t => t.isDone === false);
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
  onToggleTodo,
  title,
  id,
  isDone,
  pending
}) => (

  <li className="uk-list">
    <Checkbox
      name={id}
      value="completed"
      disabled={pending}
      onChange={(name, val) => {
        onToggleTodo(name, !!val);
      }}
      checked={isDone}
    />
    <a
      style={{ textDecoration: isDone ? 'line-through' : 'none' }}
      onClick={onClick}
      href="#"
      className="uk-button uk-button-text"
    >
      {title}

    </a>
    &nbsp;
    {pending ? (
      <LoadingSpinner height={15} width={15} />
    ) : null}
  </li>
);
ToDo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  pending: PropTypes.bool
};
ToDo.defaultProps = {
  pending: false
};

/**
 * renders the list of todos
 * @param {props} param0
 */
const ToDoList = ({
  todos,
  onToDoClick,
  onToggleTodo
}) => (
  <div className="uk-card uk-card-default uk-width-xlarge">
    <div className="uk-card-header">
      <Footer />
    </div>
    <div className="uk-card-body">
      <p>
        Click the ToDo to see details.
        <br />
        Hit the checkbox to toggle complete
      </p>
      <ul>
        {todos.map(todo => (
          <ToDo
            key={todo.id} {...todo}
            onClick={(e) => {
              e.preventDefault();
              onToDoClick(todo.id);
            }}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </div>
  </div>
);
ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToDoClick: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: getVisibleToDos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onToDoClick(id) {
    dispatch(getTodoDetail(id));
  },
  onToggleTodo(id, isDone) {
    dispatch(toggleToDo(id, isDone));
  }
});

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default VisibleToDoList;
