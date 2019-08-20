import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  name, value, checked = false, onChange, disabled
}) => (
  <input
    type="checkbox"
    name={name}
    checked={checked}
    disabled={disabled}
    onChange={() => {
      if (!checked) { onChange(name, value); } else { onChange(name, false); }
    }}
  />
);
Checkbox.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Checkbox;
