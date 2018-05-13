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
const Form_1 = require("Components/Form");
const DashboardPagesAlbumsCreateForm = (_a) => {
    var { footer } = _a, props = __rest(_a, ["footer"]);
    return (<Form_1.Form {...props} className="card-form">
    <Form_1.Input name="title" label="Title*"/>
    <Form_1.Input name="description" label="Description"/>
    {footer}
  </Form_1.Form>);
};
DashboardPagesAlbumsCreateForm.propTypes = {
    footer: prop_types_1.default.node
};
exports.default = DashboardPagesAlbumsCreateForm;
