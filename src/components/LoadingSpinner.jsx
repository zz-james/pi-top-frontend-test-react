import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ height, width }) => (
  <div className="uk-icon uk-spinner">
    <svg
      width={width} height={height}
      viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
      data-svg="spinner"
    >
      <circle
        fill="none" stroke="#000"
        cx="15" cy="15"
        r="14"
      />
    </svg>
  </div>
);
LoadingSpinner.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default LoadingSpinner;
