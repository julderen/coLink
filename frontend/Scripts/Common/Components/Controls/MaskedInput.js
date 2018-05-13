"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_input_mask_1 = require("react-input-mask");
const MaskedInput = props => (<react_input_mask_1.default {...props} maskChar={null} className={classnames_1.default('form-control', props.className)} type="text"/>);
MaskedInput.propTypes = {
    className: prop_types_1.default.string
};
exports.default = MaskedInput;
