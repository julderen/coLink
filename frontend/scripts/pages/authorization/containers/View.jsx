import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { Form } from 'components/form';
import FormComponent from '../components/Form';
import validation from '../utils/Validation';
import { Default } from '../constants/Constants';

@inject(['authorization'])
@observer
class AuthorizationView extends Component {
  submitForm = (values) => {
    const { authorization: { fetchData, status, resetStatus } } = this.props;
    if (status === Default) {
      fetchData(values);
    } else {
      resetStatus();
    }
  };

  render() {
    const { authorization: { error, status } } = this.props;
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
