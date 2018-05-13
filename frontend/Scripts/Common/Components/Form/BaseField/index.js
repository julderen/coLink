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
const TooltipError_1 = require("./TooltipError");
const AlertError_1 = require("./AlertError");
const Regular_1 = require("./Regular");
const BaseField = (_a) => {
    var { meta, children, errorsDisplayType } = _a, props = __rest(_a, ["meta", "children", "errorsDisplayType"]);
    switch (errorsDisplayType) {
        case 'tooltip':
            return (<TooltipError_1.default {...meta} {...props}>
          {children}
        </TooltipError_1.default>);
        case 'alert':
            return (<AlertError_1.default {...meta} {...props}>
          {children}
        </AlertError_1.default>);
        default:
            return (<Regular_1.default {...meta} {...props}>
          {children}
        </Regular_1.default>);
    }
};
BaseField.propTypes = {
    required: prop_types_1.default.bool,
    meta: prop_types_1.default.object,
    errorsDisplayType: prop_types_1.default.oneOf(['tooltip', 'alert']),
    label: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.array
    ])
};
exports.default = BaseField;
