import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'Components/Controls';
import { BaseField } from 'Components/Form';

const Checkbox = ({
    input: { value, onChange },
    inline,
    meta,
    errorsDisplayType,
    className,
    checkboxClassName,
    required,
    label,
    name,
    white,
    material,
    custom,
    disabled,
    ...others
  }) => {
  const classes = classNames(checkboxClassName, {
    'is-checked': value,
    'is-disabled': disabled,
    checkbox: !custom && !material,
    'checkbox-white': white,
    'checkbox-material': material
  });

  return (
    <BaseField errorsDisplayType={errorsDisplayType} inline={inline} className={className} meta={meta} required={required}>
      <div className={classes}>
        <ControlLabel>
          <input
            {...others}
            type="checkbox"
            name={name}
            checked={Boolean(value)}
            disabled={disabled}
            onChange={onChange}
          />
          {label}
        </ControlLabel>
      </div>
    </BaseField>
  );
};

Checkbox.propTypes = {
  custom: PropTypes.bool,
  disabled: PropTypes.bool,
  white: PropTypes.bool,
  material: PropTypes.bool,
  inline: PropTypes.bool,
  required: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  checkboxClassName: PropTypes.string,
  label: PropTypes.node,
};

Checkbox.defaultProps = {
  custom: false,
  checked: false,
  disabled: false,
  white: false,
  material: false
};

export default Checkbox;
