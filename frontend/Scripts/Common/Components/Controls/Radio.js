"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Controls_1 = require("Components/Controls");
const classnames_1 = require("classnames");
const Radio = ({ name, label, checked, disabled, onChange }) => {
    const classes = classnames_1.default('radio', { 'is-checked': checked, 'is-disabled': disabled });
    return (<div className={classes}>
      <Controls_1.ControlLabel>
        <input type="radio" name={name} checked={checked} disabled={disabled} onChange={onChange}/>
        {label}
      </Controls_1.ControlLabel>
    </div>);
};
Radio.propTypes = {
    checked: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    name: prop_types_1.default.string.isRequired,
    label: prop_types_1.default.node.isRequired,
    onChange: prop_types_1.default.func
};
Radio.defaultProps = {
    checked: false,
    disabled: false
};
exports.default = Radio;
