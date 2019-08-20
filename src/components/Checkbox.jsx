import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  name, value, checked = false, onChange
}) => (
  <input
    type="checkbox" name={name}
    checked={checked} onChange={() => {
      if (!checked) { onChange(name, value); } else { onChange(name, false); }
    }}
  />
);
Checkbox.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
