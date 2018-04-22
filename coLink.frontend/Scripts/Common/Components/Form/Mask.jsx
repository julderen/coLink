import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Mask } from 'Components/Controls';
import FormUtils from 'Utils/FormUtils';

const FormMask = ({ name, label, placeholder, ...props }) => (
  <Field
    name={name}
    props={{
      ...props,
      label,
      placeholder: FormUtils.definePlaceholderField(label, placeholder)
    }}
    component={Mask}
  />
);

FormMask.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

FormMask.defaultProps = {
  errorsDisplayType: 'tooltip',
};

export default FormMask;
