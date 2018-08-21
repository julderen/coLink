import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form } from 'components/form';
import FormComponent from 'registration/components/Form';
import validation from 'registration/utils/Validation';

@inject(['registration'])
@observer
class RegistrationView extends Component {
  submitForm = (values) => {
    const { registration: { fetchData } } = this.props;
    fetchData(values);
  };

  render() {
    const { registration: { status, error } } = this.props;
    const { submitForm } = this;

    return (status === 'success' || localStorage.token !== undefined) ? <Redirect to="/Album" />
      : (
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, invalid }) => (
            <FormComponent
              handleSubmit={handleSubmit}
              invalid={invalid}
              error={error}
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
      resetError: PropTypes.func,
    }),
  ),
};

export default RegistrationView;
