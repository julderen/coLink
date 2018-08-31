import React from 'react';
import { Loading, Error, Success } from 'constants/StatusConstatns';
import PropTypes from 'prop-types';

const defineClassName = (status) => {
  switch (status) {
    case Loading:
      return 'status-helper_loading';
    case Success:
      return 'status-helper_success';
    case Error:
      return 'status-helper_error';
    default:
      return '';
  }
};

const ErrorControl = ({ status, children }) => (
  <div className={`status-helper ${defineClassName(status)}`}>
    <div className={status === Loading
      ? 'status-helper__message status-helper__message_active'
      : 'status-helper__message'}
    >
       Загрузка...
    </div>
    {children}
  </div>
);

ErrorControl.propTypes = {
  status: PropTypes.string,
  children: PropTypes.node,
};

export default ErrorControl;
