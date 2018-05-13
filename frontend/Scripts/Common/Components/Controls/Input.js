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
const Controls_1 = require("Components/Controls");
const BaseField_1 = require("../Form/BaseField");
const FormInput = (_a) => {
    var { input, inline, meta, errorsDisplayType, label, className, required, icon } = _a, others = __rest(_a, ["input", "inline", "meta", "errorsDisplayType", "label", "className", "required", "icon"]);
    return (<BaseField_1.default errorsDisplayType={errorsDisplayType} inline={inline} meta={meta} label={label} className={className} icon={icon} required={required} value={input.value}>
    <Controls_1.FormControl {...input} {...others}/>
  </BaseField_1.default>);
};
FormInput.propTypes = {
    inline: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    errorsDisplayType: prop_types_1.default.string,
    className: prop_types_1.default.string,
    icon: prop_types_1.default.string,
    type: prop_types_1.default.string,
    input: prop_types_1.default.object,
    meta: prop_types_1.default.object
};
exports.default = FormInput;
