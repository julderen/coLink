import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/controls/Button';
import { Input, Checkbox, Form } from 'components/form';
import License from './License';

const RegistrationForm = ({ onSubmit, error, status }) => (
  <Form onSubmit={onSubmit} error={error} status={status} className="registration-form">
    <Input label="Эл. почта" name="email" placeholder="email" />
    <Input label="Логин" name="login" placeholder="login" />
    <Input label="Пароль" name="password" placeholder="password" type="password" />
    <Input label="Подт. пароль" name="repeat" placeholder="repeat" type="password" />
    <Checkbox name="license" label={<License />} />
    <Button text="Регистрация" />
  </Form>
);

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default RegistrationForm;
