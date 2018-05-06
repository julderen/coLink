import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Link } from 'react-router-dom';

const SidebarMenuItem = props => {
  const { link, path, className, children } = props;

  return (
    <Route
      path={path}
      children={({ match }) => (
        <li className={classNames(className, { active: match })}>
          {!link ? children : <Link to={path}>{children}</Link>}
        </li>
      )}
    />
  );
};

SidebarMenuItem.propTypes = {
  link: PropTypes.bool,
  path: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

SidebarMenuItem.defaultProps = {
  link: false,
  className: ''
};

export default SidebarMenuItem;
