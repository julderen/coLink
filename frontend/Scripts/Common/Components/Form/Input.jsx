import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from 'Components/Controls';
import FormUtils from 'Utils/FormUtils';

const FormInput = ({ name, label, placeholder, normalize, maxLength, ...props }) => (
  <Field
    name={name}
    normalize={normalize || (maxLength && FormUtils.normalize(maxLength))}
    props={{
      ...props,
      label,
    }}
    component={Input}
  />
);

FormInput.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  normalize: PropTypes.func
};

FormInput.defaultProps = {
  errorsDisplayType: 'tooltip',
  type: 'text'
};

export default FormInput;
