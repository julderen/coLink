import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Containers/Header';

const DashboardLayout = ({ children }) => (
  <div className="dashboard-layout">
    <Header />
    <div className="dashboard-content">
      {children}
    </div>
  </div>
);


DashboardLayout.propTypes = {
  children: PropTypes.node
};


export default DashboardLayout;
