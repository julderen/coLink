import React from 'react';
import PropTypes from 'prop-types';
import defineClassName from 'utils/defineClassName';
import defineMessage from 'utils/defineMessage';

import { DEFAULT_STATUS } from 'constants/StatusConstatns';

const StatusHelper = ({ status, message, children }) => (
  <div className={status === DEFAULT_STATUS ? 'status-helper' : 'status-helper status-helper_hidden'}>
    <div className={`status-helper__message ${defineClassName(status)}`}>
      {defineMessage(status, message)}
    </div>
    {children}
  </div>
);

StatusHelper.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
};

export default StatusHelper;
