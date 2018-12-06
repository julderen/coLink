import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'components/form';
import { Button, Col, Row } from 'components/controls';

const LoginForm = ({ onSubmit, error, status }) => (
  <Form onSubmit={onSubmit} error={error} status={status}>
    <Input label="Эл. почта" name="email" placeholder="email" />
    <Input label="Пароль" name="password" placeholder="password" type="password" />
    <Button>Войти</Button>
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default LoginForm;
