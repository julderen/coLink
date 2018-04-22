import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseField from './Regular';

const BaseFieldAlertError = ({ touched, invalid, error, children, ...props }) => (
  <BaseField
    validationState={(touched && error) ? 'error' : null}
    {...props}
  >
    {children}
    <div className={classNames({ hidden: !touched || !invalid }, 'alert-error')}>
      {error}
    </div>
  </BaseField>
);

BaseFieldAlertError.propTypes = {
  touched: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default BaseFieldAlertError;
