import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';

import FormGroup from './FormGroup';

const ControlInput = ({ input: { input, meta }, label, type }) => (
  <FormGroup label={label} error={meta.error} touched={meta.touched} value={input.value}>
    <Input
      {...input}
      className={classNames({
        'input_not-empty': input.value,
        input_error: meta.touched && meta.error,
      }, 'input')}
      type={type}
    />
  </FormGroup>
);

ControlInput.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.shape({
      meta: PropTypes.object,
      input: PropTypes.object,
    }),
  ),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default ControlInput;
