import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/form';
import Button from 'components/controls/Button';
import utils from 'utils/statusFormUtlis';
import { Default, Error, AuthorizationError, Success, SuccessMessage } from 'constants/StatusConstatns';
import Link from 'components/controls/Link';

const Form = ({ handleSubmit, invalid, error, status }) => (
  <form onSubmit={handleSubmit} className={`form ${utils.getClassName(status)}`}>
    <span className={status === Success || status === Error ? 'form-status form-status_visible' : 'form-status'}>
      {status === Error ? AuthorizationError : `${status === Success ? SuccessMessage : ''}`}
    </span>
    <div className={status === Default ? 'state' : 'state_hidden'}>
      <h1 className="form-title">
        Вход
      </h1>
      <span className="form-line" />
      <span className="form-error">
        {error}
      </span>
      <Input label="E-mail" name="email" placeholder="email" />
      <Input label="Пароль" name="password" placeholder="password" type="password" />
      <Button text="Войти" />
      <Link path="/" text="Восстановить аккаунт..." />
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

/*
const Form = ({ handleSubmit, invalid, error, status }) => (
  <div className={`state ${utils.getClassName(status)}`}>
    <form onSubmit={handleSubmit} className={status === 'default' ? 'form' : 'form form-state_visibled'}>
      <h1 className="form-title">
        Вход
      </h1>
      <span className="form-line" />
      <Input label="E-mail" name="email" placeholder="email" />
      <Input label="Логин" name="login" placeholder="login" />
      <Input label="Пароль" name="password" placeholder="password" type="password" />
      <Button text="Войти" status={status} />
      <span className="form-error">
        {error}
      </span>
    </form>
  </div>
);
 */
