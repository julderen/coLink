import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = ({ title }) => (
  <header className="registration-header">
    <h1>{title}</h1>
  </header>
);

FormHeader.propTypes = {
  title: PropTypes.string,
};

export default FormHeader;
