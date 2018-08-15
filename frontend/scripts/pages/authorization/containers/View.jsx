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

  resetError = () => {
    const { authorization: { resetError } } = this.props;
    resetError();
  };

  render() {
    const { authorization: { error, status } } = this.props;
    const { submitForm, resetError } = this;
    return (status === 'success' || localStorage.token !== undefined) ? <Redirect to="/Album" />
      : (
        <div className="registration">
          <Form
            onSubmit={submitForm}
            component={FormComponent}
            validate={validation}
          />
          <div className={error === undefined ? 'registration-error' : 'registration-error registration-error_active'}>
            { error }
            <button onClick={resetError} className="registration-error__button">
            Понятно
            </button>
          </div>
        </div>);
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
