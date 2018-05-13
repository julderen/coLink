"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const Controls_1 = require("Components/Controls");
const StatusConstants_1 = require("Constants/StatusConstants");
const ControlsButton = (_a) => {
    var { className, status, children } = _a, others = __rest(_a, ["className", "status", "children"]);
    return (<Controls_1.Button className={classnames_1.default({
        className,
        'btn-status-loader': status === StatusConstants_1.STATUS_LOADING,
        'btn-status-error': status === StatusConstants_1.STATUS_ERROR,
        'btn-status-success': status === StatusConstants_1.STATUS_SUCCESS
    })} {...others}>
    <span>{children}</span>
  </Controls_1.Button>);
};
ControlsButton.propTypes = {
    status: prop_types_1.default.string,
    type: prop_types_1.default.string,
    bsStyle: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
};
ControlsButton.defaultProps = {
    type: 'submit',
    bsStyle: 'primary'
};
exports.default = ControlsButton;
