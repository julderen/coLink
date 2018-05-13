"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const LayoutSidebar = ({ className, children }) => (<aside className={classnames_1.default('layout-sidebar', className)}>
    {children}
  </aside>);
LayoutSidebar.propTypes = {
    className: prop_types_1.default.string,
    children: prop_types_1.default.node
};
exports.default = LayoutSidebar;
