"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Header_1 = require("../Containers/Header");
const DashboardLayout = ({ children }) => (<div className="dashboard-layout">
    <Header_1.default />
    <div className="dashboard-content">
      {children}
    </div>
  </div>);
DashboardLayout.propTypes = {
    children: prop_types_1.default.node
};
exports.default = DashboardLayout;
