import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'Components/Helpers';
import HelpersUtils from 'Utils/HelpersUtils';
import { STATUS_DEFAULT, STATUS_SUCCESS, STATUS_LOADING } from 'Constants/StatusConstants';

const HelpersContentStatus = ({ status, noMessage, message, className, children }) => {
  if (status === STATUS_SUCCESS || status === STATUS_DEFAULT) {
    return children ? <div>{children}</div> : null;
  }

  const statusMessage = HelpersUtils.defineStatusMessage(status, message);
  const statusClassName = HelpersUtils.defineStatusClassName(status);

  return (
    <div className={classNames('content-status', className)} data-status={status}>
      <div className="icon">
        {<div className={statusClassName} />}
      </div>
      {noMessage ? null : <div className="message">{statusMessage}</div>}
    </div>
  );
};

HelpersContentStatus.propTypes = {
  noMessage: PropTypes.bool,
  status: PropTypes.string.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

HelpersContentStatus.defaultProps = {
  noMessage: false,
  status: STATUS_DEFAULT
};

export default HelpersContentStatus;
