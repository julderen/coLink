import React from 'react';
import PropTypes from 'prop-types';
import defineClassName from 'utils/defineClassName';
import defineMessage from 'utils/defineMessage';

import { STATE_DEFAULT } from 'constants/StateConstatns';

const StatusHelper = ({ status, message, children }) => (
  <div className={status === STATE_DEFAULT ? 'status-helper' : 'status-helper status-helper_hidden'}>
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
