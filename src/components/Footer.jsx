import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearToDos } from '../actions/actions';

const Footer = ({ onClick }) => (
  <button
    type="button"
    className="uk-button uk-button-danger"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    DELETE ALL TODOs
  </button>
);
Footer.propTypes = {
  onClick: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(clearToDos());
  }
});

const FilterLink = connect(
  null,
  mapDispatchToProps
)(Footer);

export default FilterLink;
