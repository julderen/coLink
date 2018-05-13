"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const Controls_1 = require("Components/Controls");
const BaseFieldRegular = ({ inline, hidden, required, validationState, value, label, asyncValidating, children, className, icon }) => (<Controls_1.FormGroup validationState={validationState} className={classnames_1.default(className, {
    inline: inline || icon,
    'has-icon': icon,
    hidden,
    'has-loading': asyncValidating,
    'has-not-empty': value
})}>
    {icon && <i className="material-icons">{icon}</i>}
    {children}
    {label && <Controls_1.ControlLabel className={classnames_1.default({ required })}>{label}</Controls_1.ControlLabel>}
  </Controls_1.FormGroup>);
BaseFieldRegular.propTypes = {
    inline: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    hidden: prop_types_1.default.bool,
    asyncValidating: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    validationState: prop_types_1.default.string,
    icon: prop_types_1.default.string,
    className: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.namber,
        prop_types_1.default.boll,
        prop_types_1.default.object,
        prop_types_1.default.array,
    ]),
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.array
    ])
};
exports.default = BaseFieldRegular;
