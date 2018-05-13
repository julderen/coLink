"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const SigInForm_1 = require("../Components/SigInForm");
const ValidationConstants_1 = require("../Constants/ValidationConstants");
const SignInActions_1 = require("../Actions/SignInActions");
class SignIn extends react_1.Component {
    constructor(props) {
        super();
        this.signIn = data => props.actions.signIn(data);
    }
    render() {
        return (<div className="authorization-form sign-in-form">
        <SigInForm_1.default {...this.props} onSubmit={this.signIn}/>
      </div>);
    }
}
SignIn.propTypes = {
    actions: prop_types_1.default.object
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'signIn', actions: SignInActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'signIn', validation: ValidationConstants_1.signInValidation }))(SignIn);
