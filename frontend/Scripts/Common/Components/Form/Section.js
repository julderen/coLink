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
const redux_form_1 = require("redux-form");
const FormSectionBlock = (_a) => {
    var { title, children } = _a, props = __rest(_a, ["title", "children"]);
    return (<redux_form_1.FormSection {...props}>
    {title && <div className="form-section-title">{title}</div>}
    {children}
  </redux_form_1.FormSection>);
};
FormSectionBlock.propTypes = {
    title: prop_types_1.default.string,
    children: prop_types_1.default.node.isRequired
};
exports.default = FormSectionBlock;
