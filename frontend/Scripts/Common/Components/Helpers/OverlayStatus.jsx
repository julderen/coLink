import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HelpersUtils from 'Utils/HelpersUtils';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

const HelpersOverlayStatus = ({ status, message, className, children }) => {
  if (!status) return (<div>{children}</div>);

  const statusMessage = HelpersUtils.defineStatusMessage(status, message);
  const statusClassName = HelpersUtils.defineStatusClassName(status);

  return (
    <div className={classNames('overlay-status', className)} data-status={status}>
      {children}
      <div className="message">
        <div className="icon">
          {<span className={statusClassName} />}
        </div>
        {statusMessage}
      </div>
    </div>
  );
};

HelpersOverlayStatus.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

HelpersOverlayStatus.defaultProps = {
  status: STATUS_DEFAULT,
  className: ''
};

export default HelpersOverlayStatus;
