import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { AlertError } from 'components/controls';

const FormView = ({ error, className, onSubmit, validation, children }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form className={className} onSubmit={handleSubmit}>
        <AlertError error={error} />
        {children}
      </form>
    )}
    validate={validation}
  />
);

FormView.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  validation: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default FormView;
