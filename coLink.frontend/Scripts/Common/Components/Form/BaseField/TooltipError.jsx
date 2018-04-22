import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger, Popover } from 'Components/Controls';
import BaseField from './Regular';

const renderTooltip = (touched, error) => (
  <Popover id="tooltip-error" className={classNames({ hidden: !touched || !error })}>{error}</Popover>
);

const BaseFieldTooltipError = ({ touched, error, children, ...props }) => (
  <BaseField
    validationState={(touched && error) ? 'error' : null}
    {...props}
  >
    <OverlayTrigger trigger={['focus', 'hover']} placement="right" overlay={renderTooltip(touched, error)}>
      {children}
    </OverlayTrigger>
  </BaseField>
);

BaseFieldTooltipError.propTypes = {
  touched: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default BaseFieldTooltipError;
