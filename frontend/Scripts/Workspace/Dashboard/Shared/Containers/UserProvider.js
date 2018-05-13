"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Helpers_1 = require("Components/Helpers");
const UserActions_1 = require("../Actions/UserActions");
class SignIn extends react_1.Component {
    constructor(props) {
        super();
        this.componentWillMount = () => props.actions.userGet();
    }
    render() {
        const { children, status } = this.props;
        return (<Helpers_1.ContentStatus status={status}>
        {children}
      </Helpers_1.ContentStatus>);
    }
}
SignIn.propTypes = {
    children: prop_types_1.default.node,
    actions: prop_types_1.default.object,
    status: prop_types_1.default.string
};
exports.default = ConnectDecorators_1.connectToStore({ name: 'user', actions: UserActions_1.default })(SignIn);
