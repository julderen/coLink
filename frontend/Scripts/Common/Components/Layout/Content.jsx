import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const LayoutContent = ({ className, children }) => (
  <main className={classNames('layout-content-wrap', className)}>
    <div className="layout-content">{children}</div>
  </main>
);

LayoutContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default LayoutContent;
