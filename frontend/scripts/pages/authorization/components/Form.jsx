import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/form';
import { Link } from 'components/controls';
import Button from 'components/controls/Button';

const Form = ({ handleSubmit, invalid, error, status }) => (
  <form onSubmit={handleSubmit} className="form">
    <h1 className="form-title">
      Вход
    </h1>
    {error !== undefined ? console.log('its an error: ', error) : console.log('There is no error: ', error)}
    <Input label="E-mail" name="email" placeholder="email" />
    <Input label="Логин" name="login" placeholder="login" />
    <Input label="Пароль" name="password" placeholder="password" type="password" />
    <Button text="Войти" status={status} />
    <Link path="/Registration" text="Регистрация" />
    <span className="form-error">
      {error}
    </span>
  </form>
);


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Form;
