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
const Regular_1 = require("./Regular");
const renderTooltip = (touched, error) => (<Controls_1.Popover id="tooltip-error" className={classnames_1.default({ hidden: !touched || !error })}>{error}</Controls_1.Popover>);
const BaseFieldTooltipError = (_a) => {
    var { touched, error, children } = _a, props = __rest(_a, ["touched", "error", "children"]);
    return (<Regular_1.default validationState={(touched && error) ? 'error' : null} {...props}>
    <Controls_1.OverlayTrigger trigger={['focus', 'hover']} placement="right" overlay={renderTooltip(touched, error)}>
      {children}
    </Controls_1.OverlayTrigger>
  </Regular_1.default>);
};
BaseFieldTooltipError.propTypes = {
    touched: prop_types_1.default.bool.isRequired,
    invalid: prop_types_1.default.bool.isRequired,
    required: prop_types_1.default.bool,
    error: prop_types_1.default.string,
    label: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
};
exports.default = BaseFieldTooltipError;
