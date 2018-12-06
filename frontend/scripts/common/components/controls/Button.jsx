import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => (
  <button className={classNames('button', className)}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
