import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { Link, StatusHelper } from 'components/controls';

import Form from '../components/Form';
import FormHeader from '../components/FormHeader';
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
      <section className="registration-container">
        <StatusHelper status={status}>
          <FormHeader title="Регистрация" />
          <main>
            <Form
              error={error}
              status={status}
              onSubmit={submitForm}
              validate={validation}
            />
          </main>
          <footer>
            <div className="form-link">Есть аккаунт?<Link path="/Login" text=" Войти..." /></div>
          </footer>
        </StatusHelper>
      </section>
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
