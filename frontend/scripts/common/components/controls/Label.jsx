import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label, value }) => (
  <span className={value === '' ? 'form-label' : 'form-label form-label__focused'}>
    {label}
  </span>
);

Label.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Label;
