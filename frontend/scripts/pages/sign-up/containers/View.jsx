import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { Link, StatusHelper } from 'components/controls';

import Form from '../components/Form';
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
      <div className="authorization-container">
        <section className="sign-up-container">
          <StatusHelper status={status}>
            <div className="sign-up-form">
              <header className="authorization-header">
                <h1>Регистрация</h1>
              </header>
              <main className="sign-up-form__main">
                <Form
                  error={error}
                  status={status}
                  onSubmit={submitForm}
                  validate={validation}
                />
              </main>
              <footer className="sign-up-form__footer">
                Заергистрированны? <Link to="/Login">Войти...</Link>
              </footer>
            </div>
          </StatusHelper>
        </section>
      </div>
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
