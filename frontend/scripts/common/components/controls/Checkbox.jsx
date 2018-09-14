import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'antd/lib/checkbox';

import FormGroup from './FormGroup';
import Label from './Label';

const ControlCheckbox = ({ input: { input: { checked, onChange }, meta }, label }) => (
  <FormGroup error={meta.error} touched={meta.touched} value={checked}>
    <Checkbox
      checked={checked}
      className={classNames({
        checkbox_error: meta.touched && meta.error,
        checkbox_checked: checked,
      }, 'checkbox')}
      onChange={onChange}
    />
    <Label>
      {label}
    </Label>
  </FormGroup>
);

ControlCheckbox.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.shape({
      meta: PropTypes.object,
      input: PropTypes.object,
    }),
  ),
  label: PropTypes.node,
};

export default ControlCheckbox;
