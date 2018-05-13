"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Controls_1 = require("Components/Controls");
const FormTextField = ({ label, text }) => (<Controls_1.FormGroup>
    <Controls_1.ControlLabel>{label}</Controls_1.ControlLabel>
    <span className="form-text-field">{text}</span>
  </Controls_1.FormGroup>);
FormTextField.propTypes = {
    label: prop_types_1.default.string,
    text: prop_types_1.default.string
};
exports.default = FormTextField;
