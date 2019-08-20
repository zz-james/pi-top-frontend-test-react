import React, { Component } from 'react';
import uuidv4 from '@bundled-es-modules/uuid/v4';
import { connect } from 'react-redux';
import * as AsyncActions from '../actions/async-actions';
import { setUiMode } from '../actions/actions';
import * as C from '../constants/index';


/**
 * renders form for adding todos to the list
 * @param {dispatch} param0
 */
const AddToDoWrapped = ({ dispatch }) => {
  let input$name;
  let select$color;
  let textarea$detail;
  return (
    <div className="uk-card uk-card-default uk-width-xlarge">
      <div className="uk-card-header">
      Please enter the details of your to do
      </div>
      <div className="uk-card-body">
        <input
          className="uk-input" placeholder="Name"
          ref={(node) => { input$name = node; }}
        />
        {' '}
        <br />
        {' '}
        <br />
        Tag:
        {' '}
        {/* <select ref={(node) => { select$color = node; }} className="uk-select">
          <option value={C.RED}>red</option>
          <option value={C.WHITE}>white</option>
          <option value={C.OTHER}>other</option>
        </select> */}
        <br />
        <br />
        <textarea
          className="uk-textarea" rows="5"
          placeholder="Details" ref={(node) => { textarea$detail = node; }}
        />
      </div>
      <div className="uk-card-footer">
        <button
          type="button"
          className="uk-button uk-button-primary" onClick={() => {
            dispatch(AsyncActions.addToDo(uuidv4(), input$name.value, select$color.value, textarea$detail.value));
            input$name.value = '';
            select$color.value = '';
            textarea$detail.value = '';
          }
        }
        >
        Add To Do
        </button>
      </div>
    </div>
  );
};

const AddToDo = connect()(AddToDoWrapped);

export default AddToDo;
