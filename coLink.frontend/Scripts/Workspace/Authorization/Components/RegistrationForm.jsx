import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'Components/Form';
import { ButtonLoader, ButtonsGroup } from 'Components/Controls';

import { FIELD_MAX_LENGTH } from '../Constants/SignInConstants';

const RegistrationForm = ({ status, ...props }) => (
  <Form {...props}>
    <Input name="email" label="Email*" icon="email" maxLength={FIELD_MAX_LENGTH} />
    <Input name="displayName" label="Login" icon="face" maxLength={FIELD_MAX_LENGTH} />
    <Input name="password" label="Password*" icon="lock" maxLength={FIELD_MAX_LENGTH} />
    <ButtonsGroup>
      <ButtonLoader status={status} bsSize="lg">registration</ButtonLoader>
    </ButtonsGroup>
  </Form>
);

RegistrationForm.propTypes = {
  status: PropTypes.string
};

export default RegistrationForm;
