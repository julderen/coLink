import React from 'react';
import PropTypes from 'prop-types';

import { Success, Error, InfoError, InfoSuccess } from 'constants/StateConstatns';

const InfoControl = ({ status }) => (
  <span className={status === Success || status === Error
    ? 'form-info form-info_visible'
    : 'form-info'}
  >
    {status === Error
      ? InfoError
      : `${status === Success ? InfoSuccess : ''}`}
  </span>
);

InfoControl.propTypes = {
  status: PropTypes.string,
};

export default InfoControl;
