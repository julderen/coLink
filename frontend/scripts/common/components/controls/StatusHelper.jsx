import React from 'react';
import PropTypes from 'prop-types';
import defineClassName from 'utils/defineClassName';
import defineMessage from 'utils/defineMessage';

import { Default } from 'constants/StatusConstatns';

const StatusHelper = ({ status, isAuthorization, children }) => (
  <div className={status === Default ? 'status-helper' : 'status-helper status-helper_hidden'}>
    <div className={`status-helper__message ${defineClassName(status)}`}>
      {defineMessage(status, isAuthorization)}
    </div>
    {children}
  </div>
);

StatusHelper.propTypes = {
  status: PropTypes.string,
  isAuthorization: PropTypes.bool,
  children: PropTypes.node,
};

export default StatusHelper;
