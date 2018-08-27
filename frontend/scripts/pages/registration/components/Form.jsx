import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/controls/Button';
import { Input } from 'components/form';
import utils from 'utils/statusFormUtlis';
import { Success, Error, ErrorMessage, SuccessMessage } from 'constants/Constants';

const Form = ({ handleSubmit, invalid, error, status }) => (
  <form onSubmit={handleSubmit} className="form">
    <div className={`state ${utils.getClassName(status)}`}>
      <span className={status === Success || status === Error ? 'state-text state-text_visible' : 'state-text'}>
        {status === 'error' ? ErrorMessage : `${status === Success ? SuccessMessage : ''}`}
      </span>
      <div className={status === 'default' ? 'form-content' : 'form-content form-content_hidden'}>
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
        <Input label="Подтвердите пароль" name="repeat" placeholder="repeat" type="password" />
        <Button text="Регистрация" status={status} />
      </div>
    </div>
  </form>
);

// <Link path="/Login" text="Войти" />
/*
<div
        className={error === undefined ? 'form-container' : `form-container ${state[curState]}`}
        onClick={handleState}
        tabIndex={0}
      >
        <div className="status-button">
          Регистрация
        </div>
      </div>
 if (e.currentTarget.classList.contains('loading')) {
        e.currentTarget.classList.remove('loading');
      } else if (e.currentTarget.classList.contains('success')) {
        e.currentTarget.classList.remove('success');
      } else if (e.currentTarget.classList.contains('error')) {
        e.currentTarget.classList.remove('error');
      } else {
        e.currentTarget.classList.add('loading');
      }
*/

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Form;
