import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button className="form-button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
