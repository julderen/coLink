import React from 'react';
import PropTypes from 'prop-types';

import License from './License';
import Button from 'components/controls/Button';
import { Input } from 'components/form';
import utils from 'utils/statusFormUtlis';
import { Default, Success, Error, RegistrationError, RegistrationSuccess } from 'constants/Constants';

const Form = ({ handleSubmit, invalid, error, status }) => (
  <form onSubmit={handleSubmit} className={`form ${utils.getClassName(status)}`}>
    <span className={status === Success || status === Error ? 'form-status form-status_visible' : 'form-status'}>
      {status === Error ? RegistrationError : `${status === Success ? RegistrationSuccess : ''}`}
    </span>
    <span className={status === Success || status === Error ? 'form-info form-info_visible' : 'form-info'}>
      {status === Error ? RegistrationError : `${status === Success ? RegistrationSuccess : ''}`}
    </span>
    <div className={status === Default ? 'state' : 'state_hidden'}>
      <h1 className="form-title">
        Регистрация
      </h1>
      <span className="form-line" />
      <span className="form-error">
        {error}
      </span>
      <Input label="E-mail" name="email" placeholder="email" />
      <Input label="Логин" name="login" placeholder="login" />
      <Input label="Пароль" name="password" placeholder="password" type="password" />
      <Input label="Подт. пароль" name="repeat" placeholder="repeat" type="password" />
      <License />
      <Button text="Регистрация" status={status} />
    </div>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Form;
