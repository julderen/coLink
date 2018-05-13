"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_router_dom_1 = require("react-router-dom");
const WindowService_1 = require("Services/WindowService");
const SessionService_1 = require("Services/SessionService");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Controls_1 = require("Components/Controls");
const Searcher_1 = require("./Searcher");
class DashboardHeader extends react_1.Component {
    constructor() {
        super();
        this.onLogout = () => {
            SessionService_1.default.signOut();
            WindowService_1.default.redirect('/');
        };
    }
    render() {
        const { displayName, albumName } = this.props;
        console.log(this.props);
        return (<div className="dashboard-header">
        <div className="album-title">
          {albumName ? `Album - ${albumName}` : 'Albums'}
        </div>
        <Searcher_1.default />
        <div className="user-info">
          <Controls_1.DropdownButton id="user-info-dropdown" title={<span title={displayName}>{displayName}</span>} pullRight>
            <Controls_1.MenuItem key="exit" onSelect={this.onLogout}>Выход</Controls_1.MenuItem>
          </Controls_1.DropdownButton>
        </div>
      </div>);
    }
}
DashboardHeader.propTypes = {
    albumName: prop_types_1.default.string,
    displayName: prop_types_1.default.string,
};
const mapStateToProps = ({ links, user }) => ({
    albumName: links.albumName,
    displayName: user.displayName
});
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ mapStateToProps }), react_router_dom_1.withRouter)(DashboardHeader);
