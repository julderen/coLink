import React from 'react';
import PropTypes from 'prop-types';

import utils from 'utils/statusFormUtlis';

const Button = ({ text, status }) => (
  <button className="status-button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
};

export default Button;
