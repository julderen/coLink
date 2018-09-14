import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, className }) => (
  <label className={classNames('label', className)}>
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Label;
