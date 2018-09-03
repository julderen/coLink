import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { Link } from 'components/controls';

import { Form } from 'components/form';
import FormComponent from '../components/Form';
import validation from '../utils/Validation';

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

    return (
      <body className="registration-container">
        <header>
        <h1 className="form-title">Регистрация</h1>
        </header>
        <main>
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
        </main>
        <footer>
          <div className="form-linkContainer">
            Есть аккаунт?
            <Link path="/Login" text=" Войти..." />
          </div>
        </footer>
      </body>
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
