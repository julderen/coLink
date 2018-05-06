import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, ControlLabel } from 'Components/Controls';

const BaseFieldRegular = ({ inline, hidden, required, validationState, value, label, asyncValidating, children, className, icon }) => (
  <FormGroup
    validationState={validationState}
    className={classNames(className, {
      inline: inline || icon,
      'has-icon': icon,
      hidden,
      'has-loading': asyncValidating,
      'has-not-empty': value
    })}
  >
    {icon && <i className="material-icons">{icon}</i>}
    {children}
    {label && <ControlLabel className={classNames({ required })}>{label}</ControlLabel>}
  </FormGroup>
);

BaseFieldRegular.propTypes = {
  inline: PropTypes.bool,
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  asyncValidating: PropTypes.bool,
  label: PropTypes.string,
  validationState: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.namber,
    PropTypes.boll,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};

export default BaseFieldRegular;
