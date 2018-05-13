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
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Controls_1 = require("Components/Controls");
const Form_1 = require("Components/Form");
const Checkbox = (_a) => {
    var { input: { value, onChange }, inline, meta, errorsDisplayType, className, checkboxClassName, required, label, name, white, material, custom, disabled } = _a, others = __rest(_a, ["input", "inline", "meta", "errorsDisplayType", "className", "checkboxClassName", "required", "label", "name", "white", "material", "custom", "disabled"]);
    const classes = classnames_1.default(checkboxClassName, {
        'is-checked': value,
        'is-disabled': disabled,
        checkbox: !custom && !material,
        'checkbox-white': white,
        'checkbox-material': material
    });
    return (<Form_1.BaseField errorsDisplayType={errorsDisplayType} inline={inline} className={className} meta={meta} required={required}>
      <div className={classes}>
        <Controls_1.ControlLabel>
          <input {...others} type="checkbox" name={name} checked={Boolean(value)} disabled={disabled} onChange={onChange}/>
          {label}
        </Controls_1.ControlLabel>
      </div>
    </Form_1.BaseField>);
};
Checkbox.propTypes = {
    custom: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    white: prop_types_1.default.bool,
    material: prop_types_1.default.bool,
    inline: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    input: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    className: prop_types_1.default.string,
    name: prop_types_1.default.string,
    errorsDisplayType: prop_types_1.default.string,
    checkboxClassName: prop_types_1.default.string,
    label: prop_types_1.default.node,
};
Checkbox.defaultProps = {
    custom: false,
    checked: false,
    disabled: false,
    white: false,
    material: false
};
exports.default = Checkbox;
