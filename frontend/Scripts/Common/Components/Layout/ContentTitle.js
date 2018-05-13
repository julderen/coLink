"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const LayoutContentTitle = ({ children, className }) => (<div className={classnames_1.default('layout-content-title', className)}>{children}</div>);
LayoutContentTitle.propTypes = {
    children: prop_types_1.default.string.isRequired,
    className: prop_types_1.default.string
};
exports.default = LayoutContentTitle;
