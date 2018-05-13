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
const lodash_1 = require("lodash");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const ModalsActions_1 = require("Actions/ModalsActions");
const Controls_1 = require("Components/Controls");
class ModalContainer extends react_1.Component {
    constructor(props) {
        super(props);
        const { type, actions: { modalToggle, modalInit, modalClear } } = props;
        this.componentDidMount = () => modalInit(type);
        this.componentWillUnmount = () => modalClear(type);
        this.onToggle = () => modalToggle(type);
    }
    render() {
        const _a = this.props, { actions, children } = _a, props = __rest(_a, ["actions", "children"]);
        return (<Controls_1.Modal {...props} onToggle={this.onToggle}>
        {children}
      </Controls_1.Modal>);
    }
}
ModalContainer.propTypes = {
    children: prop_types_1.default.node.isRequired,
    actions: prop_types_1.default.object.isRequired,
    type: prop_types_1.default.string.isRequired
};
exports.default = ConnectDecorators_1.connectToStore({
    mapStateToProps: ({ modal }, props) => (Object.assign({}, lodash_1.default.get(modal, props.type))),
    actions: ModalsActions_1.default
})(ModalContainer);
