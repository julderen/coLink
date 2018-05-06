import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'Components/Controls';
import classNames from 'classnames';

const Radio = ({ name, label, checked, disabled, onChange }) => {
  const classes = classNames('radio', { 'is-checked': checked, 'is-disabled': disabled });

  return (
    <div className={classes}>
      <ControlLabel>
        <input
          type="radio"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        {label}
      </ControlLabel>
    </div>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  onChange: PropTypes.func
};

Radio.defaultProps = {
  checked: false,
  disabled: false
};

export default Radio;
