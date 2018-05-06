import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'Components/Controls';
import { STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR } from 'Constants/StatusConstants';

const ControlsButton = ({
  className,
  status,
  children,
  ...others
}) => (
  <Button
    className={classNames({
      className,
      'btn-status-loader': status === STATUS_LOADING,
      'btn-status-error': status === STATUS_ERROR,
      'btn-status-success': status === STATUS_SUCCESS
    })}
    {...others}
  >
    <span>{children}</span>
  </Button>
);

ControlsButton.propTypes = {
  status: PropTypes.string,
  type: PropTypes.string,
  bsStyle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

ControlsButton.defaultProps = {
  type: 'submit',
  bsStyle: 'primary'
};

export default ControlsButton;
