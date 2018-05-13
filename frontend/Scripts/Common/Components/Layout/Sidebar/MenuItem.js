"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const react_router_dom_1 = require("react-router-dom");
const SidebarMenuItem = props => {
    const { link, path, className, children } = props;
    return (<react_router_dom_1.Route path={path} children={({ match }) => (<li className={classnames_1.default(className, { active: match })}>
          {!link ? children : <react_router_dom_1.Link to={path}>{children}</react_router_dom_1.Link>}
        </li>)}/>);
};
SidebarMenuItem.propTypes = {
    link: prop_types_1.default.bool,
    path: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node
};
SidebarMenuItem.defaultProps = {
    link: false,
    className: ''
};
exports.default = SidebarMenuItem;
