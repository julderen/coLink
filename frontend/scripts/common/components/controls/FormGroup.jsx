import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';

const FormGroup = ({ label, error, touched, children, value }) => (
  <div className="form-group">
    {children}
    <Label label={label} value={value} />
    {error && touched
      && (
      <span className={error !== '' ? 'error-control' : ''}>
        {error}
      </span>
      )
    }
  </div>
);

FormGroup.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default FormGroup;
