import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { Input } from 'components/controls';

const FormInput = ({ label, placeholder, name, type }) => (
  <Field
    name={name}
    render={input => (
      <Input input={input} placeholder={placeholder} label={label} type={type} />)}
  />
);

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
