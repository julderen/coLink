import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ path, text }) => (
  <Link to={path} className="form__button form__button_redirect">
    {text}
  </Link>
);

Button.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Button;
