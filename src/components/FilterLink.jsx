/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../actions/actions';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (
      <button
        type="button" className="uk-button uk-button-default"
        disabled
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="uk-button uk-button-primary"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}

    </button>
  );
};
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
