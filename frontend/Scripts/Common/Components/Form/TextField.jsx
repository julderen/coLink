import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup } from 'Components/Controls';

const FormTextField = ({ label, text }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <span className="form-text-field">{text}</span>
  </FormGroup>
);

FormTextField.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string
};

export default FormTextField;
