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
const FormUtils_1 = require("Utils/FormUtils");
const FormSearcher = (_a) => {
    var { name, label, placeholder } = _a, props = __rest(_a, ["name", "label", "placeholder"]);
    return (<redux_form_1.Field name={name} props={Object.assign({}, props, { label, placeholder: FormUtils_1.default.definePlaceholderField(label, placeholder) })} component={Controls_1.MultiSelect}/>);
};
FormSearcher.propTypes = {
    required: prop_types_1.default.bool,
    name: prop_types_1.default.string.isRequired,
    label: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    singleFetch: prop_types_1.default.string,
    dataFetch: prop_types_1.default.func,
    valueField: prop_types_1.default.string,
};
FormSearcher.defaultProps = {
    errorsDisplayType: 'tooltip',
    valueField: 'code',
    textField: 'name',
};
exports.default = FormSearcher;
