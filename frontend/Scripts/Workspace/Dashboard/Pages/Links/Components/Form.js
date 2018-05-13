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
const Controls_1 = require("Components/Controls");
const DashboardPagesLinksCreateForm = (_a) => {
    var { status, onCreateCancel } = _a, props = __rest(_a, ["status", "onCreateCancel"]);
    return (<Form_1.Form {...props} className="card-form">
    <Form_1.Input name="url" label="Url*"/>
    <Controls_1.ButtonsGroup>
      <Controls_1.Button onClick={onCreateCancel}>cancel</Controls_1.Button>
      <Controls_1.ButtonLoader status={status}>create</Controls_1.ButtonLoader>
    </Controls_1.ButtonsGroup>
  </Form_1.Form>);
};
DashboardPagesLinksCreateForm.propTypes = {
    status: prop_types_1.default.string,
    onCreateCancel: prop_types_1.default.func
};
exports.default = DashboardPagesLinksCreateForm;
