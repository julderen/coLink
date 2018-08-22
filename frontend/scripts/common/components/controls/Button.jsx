import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, status }) => {
  const getClassName = () => {
    switch (status) {
      case 'loading':
        return 'form-status_loading';
      case 'success':
        return 'form-status_success';
      case 'error':
        return 'form-status_error';
      default:
        return '';
    }
  };

  return (
    <div className={`form-status ${getClassName()}`}>
      {console.log('status: ', status)}
      <button className="status-button">
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Button;
