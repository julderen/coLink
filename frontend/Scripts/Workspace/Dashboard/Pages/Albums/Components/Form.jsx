import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'Components/Form';

const DashboardPagesAlbumsCreateForm = ({ footer, ...props }) => (
  <Form {...props} className="card-form">
    <Input name="title" label="Title*" />
    <Input name="description" label="Description" />
    {footer}
  </Form>
);

DashboardPagesAlbumsCreateForm.propTypes = {
  footer: PropTypes.node
};

export default DashboardPagesAlbumsCreateForm;
