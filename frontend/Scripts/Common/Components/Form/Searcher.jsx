import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Searcher } from 'Components/Controls';
import FormUtils from 'Utils/FormUtils';

const FormSearcher = ({ name, label, placeholder, ...props }) => (
  <Field
    name={name}
    props={{
      ...props,
      label,
      isSearcher: true,
      placeholder: FormUtils.definePlaceholderField(label, placeholder)
    }}
    component={Searcher}
  />
);

FormSearcher.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  singleFetch: PropTypes.func,
  dataFetch: PropTypes.func,
  valueField: PropTypes.string,
};

FormSearcher.defaultProps = {
  errorsDisplayType: 'tooltip',
  valueField: 'code',
  textField: 'name',
};

export default FormSearcher;
