import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'Components/Controls';
import BaseField from '../Form/BaseField';

const FormInput = ({ input, inline, meta, errorsDisplayType, label, className, required, icon, ...others }) => (
  <BaseField
    errorsDisplayType={errorsDisplayType}
    inline={inline}
    meta={meta}
    label={label}
    className={className}
    icon={icon}
    required={required}
    value={input.value}
  >
    <FormControl {...input} {...others} />
  </BaseField>
);

FormInput.propTypes = {
  inline: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};

export default FormInput;
