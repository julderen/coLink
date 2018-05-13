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
const redux_form_1 = require("redux-form");
const Controls_1 = require("Components/Controls");
const FormControlsCheckbox = (_a) => {
    var { name } = _a, props = __rest(_a, ["name"]);
    return (<redux_form_1.Field name={name} props={props} component={Controls_1.Checkbox}/>);
};
FormControlsCheckbox.propTypes = {
    required: prop_types_1.default.bool,
    errorsDisplayType: prop_types_1.default.string,
    name: prop_types_1.default.string.isRequired,
    label: prop_types_1.default.string
};
FormControlsCheckbox.defaultProps = {
    errorsDisplayType: 'tooltip',
};
exports.default = FormControlsCheckbox;
