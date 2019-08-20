/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUiMode } from '../actions/actions';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <li className="uk-active"><a>{children}</a></li>;
  }

  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}

      </a>
    </li>
  );
};
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.mode === state.uimode
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setUiMode(ownProps.mode));
  }
});

const TabLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default TabLink;
