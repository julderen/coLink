import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'Components/Form';
import { ButtonLoader, ButtonsGroup, Button } from 'Components/Controls';

const DashboardPagesLinksCreateForm = ({ status, onCreateCancel, ...props }) => (
  <Form {...props} className="card-form">
    <Input name="url" label="Url*" />
    <ButtonsGroup>
      <Button onClick={onCreateCancel}>cancel</Button>
      <ButtonLoader status={status}>create</ButtonLoader>
    </ButtonsGroup>
  </Form>
);

DashboardPagesLinksCreateForm.propTypes = {
  status: PropTypes.string,
  onCreateCancel: PropTypes.func
};

export default DashboardPagesLinksCreateForm;
