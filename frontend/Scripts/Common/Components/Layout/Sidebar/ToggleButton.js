"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Helpers_1 = require("Components/Helpers");
const DEFAULT_TOGGLE_ICON = {
    section: 'admin',
    name: 'menu'
};
const LayoutSidebarToggleButton = (Header, icon = DEFAULT_TOGGLE_ICON) => class extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { showSidebar: true };
        this.onSidebarToggle = () => this.setState(state => ({ showSidebar: !state.showSidebar }));
    }
    render() {
        const { showSidebar } = this.state;
        return (<Header {...this.props} showSidebar={showSidebar} toggleBtn={(<Helpers_1.Icon {...icon} className="sidebar-toggle-btn" color={showSidebar ? 'blue' : 'gray'} onClick={this.onSidebarToggle}/>)}/>);
    }
};
exports.default = LayoutSidebarToggleButton;
