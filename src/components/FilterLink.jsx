/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/actions';


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className="uk-button uk-button-default uk-border-pill">{children}</span>;
  }

  return (
    <a
      className="uk-button uk-button-default uk-border-pill"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}

    </a>
  );
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
