import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { Checkbox } from 'components/controls';

const FormCheckbox = ({ label, placeholder, name }) => (
  <Field
    type="checkbox"
    name={name}
    render={input => <Checkbox input={input} placeholder={placeholder} label={label} />}
  />
);

FormCheckbox.propTypes = {
  label: PropTypes.node,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default FormCheckbox;
