import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormLink = ({ path, text }) => (
  <Link to={path} className="form__link">
    {text}
  </Link>
);

FormLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormLink;
