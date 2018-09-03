import React from 'react';
import PropTypes from 'prop-types';

import { InfoControl, StatusHelper } from 'components/controls';
import Button from 'components/controls/Button';
import { Input } from 'components/form';
import License from './License';

const Form = ({ handleSubmit, invalid, error, status }) => (
  <form onSubmit={handleSubmit} className="form">
    <StatusHelper status={status}>
      <InfoControl status={status} />
      <span className="form-line" />
      <span className="form-error">{error}</span>
      <Input label="Эл. почта" name="email" placeholder="email"/>
      <Input label="Логин" name="login" placeholder="login"/>
      <Input label="Пароль" name="password" placeholder="password" type="password"/>
      <Input label="Подт. пароль" name="repeat" placeholder="repeat" type="password"/>
      <License/>
      <Button text="Регистрация" status={status}/>
    </StatusHelper>

  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Form;
