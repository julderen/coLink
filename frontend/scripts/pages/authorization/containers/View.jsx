import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Form } from 'components/form';
import FormComponent from 'authorization/components/Form';
import validation from 'authorization/utils/Validation';
import { Redirect } from 'react-router-dom';

@inject(['authorization'])
@observer
class AuthorizationView extends Component {
  submitForm = (values) => {
    const { authorization: { fetchData } } = this.props;
    fetchData(values);
  };

  render() {
    const { authorization: { error, status } } = this.props;
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


AuthorizationView.propTypes = {
  authorization: PropTypes.objectOf(
    PropTypes.shape({
      fetchData: PropTypes.func.isRequired,
      status: PropTypes.string.isRequired,
      error: PropTypes.string,
      resetError: PropTypes.func,
    }),
  ),
};

export default AuthorizationView;
