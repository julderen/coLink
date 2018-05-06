import React from 'react';
import PropTypes from 'prop-types';

import TooltipError from './TooltipError';
import AlertError from './AlertError';
import Regular from './Regular';

const BaseField = ({ meta, children, errorsDisplayType, ...props }) => {
  switch (errorsDisplayType) {
    case 'tooltip':
      return (
        <TooltipError {...meta} {...props}>
          {children}
        </TooltipError>
      );
    case 'alert':
      return (
        <AlertError {...meta} {...props}>
          {children}
        </AlertError>
      );
    default:
      return (
        <Regular {...meta} {...props}>
          {children}
        </Regular>
      );
  }
};

BaseField.propTypes = {
  required: PropTypes.bool,
  meta: PropTypes.object,
  errorsDisplayType: PropTypes.oneOf(['tooltip', 'alert']),
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};

export default BaseField;
