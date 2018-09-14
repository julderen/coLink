import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';

const FormGroup = ({ label, error, touched, children, value }) => (
  <div className="form-group">
    {children}
    {label && (
      <Label
        className={classNames({
          'form-group__label_focused': value,
          'form-group__label_error': value && error },
        'form-group__label')}
      >
        {label}
      </Label>)
    }
    {error && touched && (
      <span className="form-group__error-message">
        {error}
      </span>
    )}
  </div>
);

FormGroup.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  children: PropTypes.node.isRequired,
};
export default FormGroup;
