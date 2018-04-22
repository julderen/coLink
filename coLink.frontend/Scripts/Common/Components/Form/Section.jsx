import React from 'react';
import PropTypes from 'prop-types';
import { FormSection } from 'redux-form';

const FormSectionBlock = ({ title, children, ...props }) => (
  <FormSection
    {...props}
  >
    {title && <div className="form-section-title">{title}</div>}
    {children}
  </FormSection>
);

FormSectionBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default FormSectionBlock;
