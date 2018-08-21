import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/form';
import { Button } from 'components/controls';

const Form = ({ handleSubmit, invalid, error }) => {
  const state = ['form-container_error', 'form-container_success'];
  let curState = 0;
  const handleState = (e) => {
    curState = error !== undefined ? 0 : 1;
    const { classList } = e.currentTarget;
    if (invalid) {
      handleSubmit();
    } else {
      handleSubmit();
      if (classList.contains('form-container_loading')) {
        classList.remove('form-container_loading');
      } else if (classList.contains('form-container_error')) {
        classList.remove('form-container_error');
      } else if (classList.contains('form-container_success')) {
        classList.remove('form-container_success');
      } else {
        classList.add('form-container_loading');
        window.setTimeout(() => {
          classList.remove('form-container_loading');
          classList.add(state[curState]);
        }, 2000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error !== undefined ? console.log('its an error: ', error) : console.log('There is no error: ', error)}
      <Input label="E-mail" name="email" placeholder="email" />
      <Input label="Логин" name="login" placeholder="login" />
      <Input label="Пароль" name="password" placeholder="password" type="password" />
      <div
        className={error === undefined ? 'form-container' : `form-container ${state[curState]}`}
        onClick={handleState}
        tabIndex={1}
      >
        <div className="form-container__button">
          Войти
        </div>
      </div>
      <Button path="/Registration" text="Регистрация" />
    </form>
  );
};


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Form;
