import React from 'react';
import PropTypes from 'prop-types';

import { Button, Col, Row } from 'components/controls';
import { Input, Checkbox, Form } from 'components/form';
import License from './License';

const RegistrationForm = ({ onSubmit, error, status }) => (
  <Form onSubmit={onSubmit} error={error} status={status}>
    <Row gutter={{ xs: 0, md: 56, xl: 0 }}>
      <Col xs={24} md={12} xl={24}><Input label="Эл. почта" name="email" placeholder="email" /></Col>
      <Col xs={24} md={12} xl={24}><Input label="Логин" name="login" placeholder="login" /></Col>
      <Col xs={24} md={12} xl={24}><Input label="Пароль" name="password" placeholder="password" type="password" /></Col>
      <Col xs={24} md={12} xl={24}><Input label="Подт. пароль" name="repeat" placeholder="repeat" type="password" /></Col>
      <Col xs={24} md={12} xl={24}><Checkbox name="license" label={<License />} /></Col>
      <Col xs={24} md={12} xl={24}><Button>Регистрация</Button></Col>
    </Row>
  </Form>
);

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default RegistrationForm;
