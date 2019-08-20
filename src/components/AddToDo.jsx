import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AsyncActions from '../actions/async-actions';


/**
 * renders form for adding todos to the list
 * @param {dispatch} param0
 */
const AddToDoWrapped = ({ dispatch }) => {
  let input$title;
  let select$priority;
  let textarea$description;
  let input$tags;
  return (
    <div className="uk-card uk-card-default uk-width-xlarge">
      <div className="uk-card-header">
      Please enter the details of your to do
      </div>
      <div className="uk-card-body">
        <input
          className="uk-input" placeholder="Name"
          ref={(node) => { input$title = node; }}
        />
        {' '}
        <br />
        {' '}
        <br />
        Priority:
        {' '}
        <select ref={(node) => { select$priority = node; }} className="uk-select">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <br />
        <br />
        <textarea
          className="uk-textarea" rows="5"
          placeholder="Details" ref={(node) => { textarea$description = node; }}
        />
        <br />
        <br />
        <input
          className="uk-input" placeholder="Tags (seperate with a space)"
          ref={(node) => { input$tags = node; }}
        />
      </div>
      <div className="uk-card-footer">
        <button
          type="button"
          className="uk-button uk-button-primary" onClick={() => {
            dispatch(
              AsyncActions.addToDo({
                title: input$title.value,
                priority: parseInt(select$priority.value, 10),
                description: textarea$description.value,
                tags: [...new Set(input$tags.value.split(' '))]
              })
            );
            input$title.value = '';
            select$priority.value = '';
            textarea$description.value = '';
          }
        }
        >
        Add To Do
        </button>
      </div>
    </div>
  );
};
AddToDoWrapped.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AddToDo = connect()(AddToDoWrapped);

export default AddToDo;
