"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ControlsButtonsGroup = ({ children }) => (<div className="buttons-group">
    {children}
  </div>);
ControlsButtonsGroup.propTypes = {
    children: prop_types_1.default.node.isRequired
};
exports.default = ControlsButtonsGroup;
