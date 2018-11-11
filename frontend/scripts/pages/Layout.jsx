import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => (
  <Fragment>
    { children }
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
