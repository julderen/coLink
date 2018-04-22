import React, { Component } from 'react';
import { Icon } from 'Components/Helpers';

const DEFAULT_TOGGLE_ICON = {
  section: 'admin',
  name: 'menu'
};

const LayoutSidebarToggleButton = (Header, icon = DEFAULT_TOGGLE_ICON) => class extends Component {
  constructor(props) {
    super(props);

    this.state = { showSidebar: true };

    this.onSidebarToggle = () => this.setState(state => ({ showSidebar: !state.showSidebar }));
  }

  render() {
    const { showSidebar } = this.state;

    return (
      <Header
        {...this.props}
        showSidebar={showSidebar}
        toggleBtn={(
          <Icon
            {...icon}
            className="sidebar-toggle-btn"
            color={showSidebar ? 'blue' : 'gray'}
            onClick={this.onSidebarToggle}
          />
        )}
      />
    );
  }
};

export default LayoutSidebarToggleButton;
