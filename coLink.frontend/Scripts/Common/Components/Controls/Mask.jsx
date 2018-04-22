import React from 'react';
import PropTypes from 'prop-types';
import { MaskedInput } from 'Components/Controls';
import BaseField from '../Form/BaseField';

const FormMaskInput = ({ input, meta, errorsDisplayType, label, className, required, ...others }) => (
  <BaseField errorsDisplayType={errorsDisplayType} meta={meta} label={label} required={required} className={className}>
    <MaskedInput {...input} {...others} />
  </BaseField>
);

FormMaskInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};

export default FormMaskInput;
