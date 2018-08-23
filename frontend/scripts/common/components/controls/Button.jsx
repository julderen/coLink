import React from 'react';
import PropTypes from 'prop-types';

import utils from 'utils/statusButtonUtlis';

const Button = ({ text, status }) => (
  <button className={`status-button`} id={utils.getClassName(status)}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Button;
