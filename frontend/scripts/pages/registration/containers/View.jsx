import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { Form } from 'components/form';
import FormComponent from '../components/Form';
import validation from '../utils/Validation';

@inject(['registration'])
@observer
class RegistrationView extends Component {
  submitForm = (values) => {
    const { registration: { fetchData, status, resetStatus } } = this.props;
    if (status === 'default') {
      fetchData(values);
    } else {
      resetStatus();
    }
  };

  render() {
    const { registration: { status, error } } = this.props;
    const { submitForm } = this;

    return (
      <Form
        onSubmit={submitForm}
        render={({ handleSubmit, invalid }) => (
          <FormComponent
            handleSubmit={handleSubmit}
            invalid={invalid}
            error={error}
            status={status}
          />
        )}
        validate={validation}
      />
    );
  }
}

RegistrationView.propTypes = {
  registration: PropTypes.objectOf(
    PropTypes.shape({
      fetchData: PropTypes.func.isRequired,
      status: PropTypes.string.isRequired,
      error: PropTypes.string,
      resetStatus: PropTypes.func,
    }),
  ),
};

export default RegistrationView;
