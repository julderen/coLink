import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Form } from 'components/form';
import FormComponent from 'registration/components/Form';
import { notEmpty, minLength, equalPassword, validEmail } from 'validation';

const validation = values => ({
  email: notEmpty(values.email)('email') || validEmail(values.email),
  login: notEmpty(values.login)('логин'),
  password: minLength(8)(values.password) || notEmpty(values.password)('пароль'),
  repeat: equalPassword(values.password)(values.repeat),
});

@inject(['registration'])
@observer
class RegistrationView extends Component {
  render() {
    return (this.props.registration.status === 'ok') ? <Redirect to="/" />
      : (
        <Form
          onSubmit={(values) => {
            const { fetchData } = this.props.registration;
            fetchData(values);
          }
        }
          component={FormComponent}
          validate={validation}
        />
      );
  }
}

RegistrationView.propTypes = {
  registration: PropTypes.objectOf(
    PropTypes.shape({
      fetchData: PropTypes.func.isRequired,
    }),
  ),
};

export default RegistrationView;
