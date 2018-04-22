import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'Components/Form';
import { ButtonLoader, ButtonsGroup } from 'Components/Controls';

import { FIELD_MAX_LENGTH } from '../Constants/SignInConstants';

const SignInForm = ({ status, ...props }) => (
  <Form {...props}>
    <Input name="email" label="Email" icon="email" maxLength={FIELD_MAX_LENGTH} />
    <Input name="password" label="Password" type="password" icon="lock" maxLength={FIELD_MAX_LENGTH} />
    <ButtonsGroup>
      <ButtonLoader status={status}>sign in</ButtonLoader>
    </ButtonsGroup>
  </Form>
);

SignInForm.propTypes = {
  status: PropTypes.string
};

export default SignInForm;
