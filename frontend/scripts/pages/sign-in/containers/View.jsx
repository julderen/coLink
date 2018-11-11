import StatusHelper from 'components/controls/StatusHelper';
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'components/controls';

import Form from '../components/Form';
import validation from '../utils/Validation';

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
    return (
      <div className="authorization-container">
        <section className="sign-in-container">
          <StatusHelper status={status}>
            <div className="sign-in-form">
              <header className="authorization-header">
                <h1>Вход</h1>
              </header>
              <main className="sign-in-form__main">
                <Form
                  error={error}
                  status={status}
                  onSubmit={submitForm}
                  validate={validation}
                />
              </main>
              <footer className="sign-in-form__footer">
                <div className="sign-in-form__link-container">
                  <Link to="/PasswordReset">Восстановить аккаунт</Link>
                </div>
                Нет аккаунта?<Link to="/Registration"> Регистрация...</Link>
              </footer>
            </div>
          </StatusHelper>
        </section>
      </div>
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
