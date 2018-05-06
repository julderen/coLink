import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import WindowService from 'Services/WindowService';
import SessionService from 'Services/SessionService';
import { connectToStore, compose } from 'Decorators/ConnectDecorators';
import { DropdownButton, MenuItem } from 'Components/Controls';

import Searcher from './Searcher';

class DashboardHeader extends Component {
  constructor() {
    super();

    this.onLogout = () => {
      SessionService.signOut();

      WindowService.redirect('/');
    };
  }
  render() {
    const { displayName, albumName } = this.props;
    console.log(this.props);
    return (
      <div className="dashboard-header">
        <div className="album-title">
          {albumName ? `Album - ${albumName}` : 'Albums'}
        </div>
        <Searcher />
        <div className="user-info">
          <DropdownButton
            id="user-info-dropdown"
            title={<span title={displayName}>{displayName}</span>}
            pullRight
          >
            <MenuItem key="exit" onSelect={this.onLogout}>Выход</MenuItem>
          </DropdownButton>
        </div>
      </div>
    );
  }
}


DashboardHeader.propTypes = {
  albumName: PropTypes.string,
  displayName: PropTypes.string,
};

const mapStateToProps = ({ links, user }) => ({
  albumName: links.albumName,
  displayName: user.displayName
});

export default compose(connectToStore({ mapStateToProps }), withRouter)(DashboardHeader);
