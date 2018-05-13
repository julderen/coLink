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
const SignInConstants_1 = require("../Constants/SignInConstants");
const RegistrationForm = (_a) => {
    var { status } = _a, props = __rest(_a, ["status"]);
    return (<Form_1.Form {...props}>
    <Form_1.Input name="email" label="Email*" icon="email" maxLength={SignInConstants_1.FIELD_MAX_LENGTH}/>
    <Form_1.Input name="displayName" label="Login" icon="face" maxLength={SignInConstants_1.FIELD_MAX_LENGTH}/>
    <Form_1.Input name="password" label="Password*" icon="lock" maxLength={SignInConstants_1.FIELD_MAX_LENGTH}/>
    <Controls_1.ButtonsGroup>
      <Controls_1.ButtonLoader status={status} bsSize="lg">registration</Controls_1.ButtonLoader>
    </Controls_1.ButtonsGroup>
  </Form_1.Form>);
};
RegistrationForm.propTypes = {
    status: prop_types_1.default.string
};
exports.default = RegistrationForm;
