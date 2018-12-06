import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LayoutMenu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li><NavLink to="/Album" className="menu__item" activeClassName="menu__item--active">Альбомы</NavLink></li>
        <li><NavLink to="/Profile" className="menu__item" activeClassName="menu__item--active">Твой профиль</NavLink></li>
      </ul>
    </nav>
  );
};

export default LayoutMenu;
