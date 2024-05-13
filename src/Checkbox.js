import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, onChange, label, className }) => {
  return (
    <div className={`checkbox ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="checkbox"
        className="checkbox-input"
      />
      <label htmlFor="checkbox" className="checkbox-label">{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
