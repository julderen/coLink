import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/form';

const Form = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Input label="Email" name="email" placeholder="email" />
    <Input label="Login" name="login" placeholder="login" />
    <Input label="Password" name="password" placeholder="password" type="password" />
    <Input label="Repeat" name="repeat" placeholder="repeat" type="password" />
    <button disabled={submitting}>
      Click
    </button>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default Form;
