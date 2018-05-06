import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Checkbox } from 'Components/Controls';

const FormControlsCheckbox = ({ name, ...props }) => (
  <Field
    name={name}
    props={props}
    component={Checkbox}
  />
);

FormControlsCheckbox.propTypes = {
  required: PropTypes.bool,
  errorsDisplayType: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

FormControlsCheckbox.defaultProps = {
  errorsDisplayType: 'tooltip',
};

export default FormControlsCheckbox;
