import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label, value, error }) => (
  <label className={value === ''
    ? 'form-label'
    : `form-label form-label_focused ${!error ? '' : 'form-label_error'}`}
  >
    {label}
  </label>
);

Label.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default Label;
