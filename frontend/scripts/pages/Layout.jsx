import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => (
  <Fragment>
    { children }
  </Fragment>
);

Header.propTypes = {
  children: PropTypes.object,
};

export default Layout;
