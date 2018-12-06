import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Menu from './Menu';

const Layout = ({ className, children }) => {
  return (
    <div className="layout">
      <Menu />
      <main className={classNames('layout__content', className)}>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
