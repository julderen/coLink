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
const classnames_1 = require("classnames");
const Modal_1 = require("react-bootstrap/lib/Modal");
const Modal = (_a) => {
    var { center, hiddenClose, hiddenHeader, isOpen, title, className, children, footer, onToggle } = _a, others = __rest(_a, ["center", "hiddenClose", "hiddenHeader", "isOpen", "title", "className", "children", "footer", "onToggle"]);
    return (<Modal_1.default {...others} show={isOpen} className={classnames_1.default(className, { center })} onHide={onToggle}>
    {hiddenHeader ? null : (<Modal_1.Header closeButton={!hiddenClose}>
        {title ? <Modal_1.Title>{title}</Modal_1.Title> : null}
      </Modal_1.Header>)}
    <Modal_1.Body>
      {children}
    </Modal_1.Body>
    {footer ? <Modal_1.Footer>{footer}</Modal_1.Footer> : null}
  </Modal_1.default>);
};
Modal.propTypes = {
    center: prop_types_1.default.bool,
    isOpen: prop_types_1.default.bool,
    hiddenClose: prop_types_1.default.bool,
    hiddenHeader: prop_types_1.default.bool,
    className: prop_types_1.default.string,
    title: prop_types_1.default.string,
    children: prop_types_1.default.node,
    footer: prop_types_1.default.element,
    onToggle: prop_types_1.default.func
};
Modal.defaultProps = {
    center: false,
    hiddenClose: false,
    hiddenHeader: false
};
exports.default = Modal;
