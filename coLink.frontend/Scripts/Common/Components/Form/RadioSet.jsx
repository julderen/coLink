import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { RadioSet } from 'Components/Controls';

const FormRadioSet = ({ name, ...props }) => (<Field name={name} props={props} component={RadioSet} />);

FormRadioSet.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  vertical: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
};

FormRadioSet.defaultProps = {
  errorsDisplayType: 'tooltip'
};

export default FormRadioSet;
