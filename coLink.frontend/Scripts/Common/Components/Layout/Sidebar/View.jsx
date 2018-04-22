import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const LayoutSidebar = ({ className, children }) => (
  <aside className={classNames('layout-sidebar', className)}>
    {children}
  </aside>
);

LayoutSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default LayoutSidebar;
