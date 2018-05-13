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
const FormRadioSet = (_a) => {
    var { name } = _a, props = __rest(_a, ["name"]);
    return (<redux_form_1.Field name={name} props={props} component={Controls_1.RadioSet}/>);
};
FormRadioSet.propTypes = {
    disabled: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    vertical: prop_types_1.default.bool,
    name: prop_types_1.default.string.isRequired,
    label: prop_types_1.default.string,
    errorsDisplayType: prop_types_1.default.string,
    className: prop_types_1.default.string,
    input: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    data: prop_types_1.default.arrayOf(prop_types_1.default.object),
};
FormRadioSet.defaultProps = {
    errorsDisplayType: 'tooltip'
};
exports.default = FormRadioSet;
