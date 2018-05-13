"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const RegistrationForm_1 = require("../Components/RegistrationForm");
const ValidationConstants_1 = require("../Constants/ValidationConstants");
const RegistrationActions_1 = require("../Actions/RegistrationActions");
class SignIn extends react_1.Component {
    constructor(props) {
        super();
        this.registration = data => props.actions.registration(data);
    }
    render() {
        console.log(this.props);
        return (<div className="authorization-form registration-form">
        <RegistrationForm_1.default {...this.props} onSubmit={this.registration}/>
      </div>);
    }
}
SignIn.propTypes = {
    actions: prop_types_1.default.object
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'registration', actions: RegistrationActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'registration', validation: ValidationConstants_1.registrationValidation }))(SignIn);
