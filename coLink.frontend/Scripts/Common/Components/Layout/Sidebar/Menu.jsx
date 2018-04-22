import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Components/Helpers';

import MenuItem from './MenuItem';

class LayoutSidebarMenu extends Component {
  constructor() {
    super();

    this.state = {
      activeMenuItem: ''
    };

    this.onMenuItemToggle = this.onMenuItemToggle.bind(this);
  }

  onMenuItemToggle(menuItem) {
    return () => {
      this.setState(state => ({ activeMenuItem: state.activeMenuItem === menuItem ? '' : menuItem }));
    };
  }

  renderSecondLevel(items) {
    if (!items) return null;

    return (
      <ul className="menu-level-two">
        {items.map(({ children, to, name, icon }) => (
          <MenuItem
            key={name}
            link={!children}
            path={to}
            className={classNames({ 'has-sub': children })}
          >
            {children
              ? <a title={name}><Icon {...icon} />{name}</a>
              : <span title={name}><Icon {...icon} />{name}</span>
            }
            {this.renderThirdLevel(children)}
          </MenuItem>
        ))}
      </ul>
    );
  }

  renderThirdLevel(items) {
    if (!items) return null;

    return (
      <ul className="menu-level-three">
        {items.map(({ to, name }) => (
          <MenuItem key={name} link path={to}>{name}</MenuItem>
        ))}
      </ul>
    );
  }

  render() {
    const { items } = this.props;
    const { activeMenuItem } = this.state;

    return (
      <nav>
        <ul className="menu-level-one">
          {items.map(({ children, to, name }, index) => (
            <MenuItem
              link={!children}
              key={index}
              path={to}
              className={
                classNames({
                  expand: !name || activeMenuItem === name,
                  'has-sub': children
                })}
            >
              {name && children
                ? <a title={name} onClick={this.onMenuItemToggle(name)}>{name}</a>
                : <span title={name}>{name}</span>
              }
              {this.renderSecondLevel(children)}
            </MenuItem>
          ))}
        </ul>
      </nav>
    );
  }
}

LayoutSidebarMenu.propTypes = {
  items: PropTypes.array.isRequired
};

export default LayoutSidebarMenu;
