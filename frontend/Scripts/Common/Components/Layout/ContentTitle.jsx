import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LayoutContentTitle = ({ children, className }) => (
  <div className={classNames('layout-content-title', className)}>{children}</div>
);


LayoutContentTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default LayoutContentTitle;
