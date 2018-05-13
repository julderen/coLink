"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const react_1 = require("react");
const react_addons_css_transition_group_1 = require("react-addons-css-transition-group");
const Controls_1 = require("Components/Controls");
const SignIn_1 = require("../Containers/SignIn");
const Registration_1 = require("../Containers/Registration");
class AuthorizationLayout extends react_1.Component {
    constructor() {
        super();
        this.state = {
            isSignIn: true
        };
        this.onToggleView = () => lodash_1.default.debounce(this.setState({ isSignIn: !this.state.isSignIn }), 700);
    }
    render() {
        const { isSignIn } = this.state;
        return (<div className="authorization-layout">
        <div className="authorization-content-wrap">
          <img alt="sorry..." src="http://localhost:8090/contents/sign-in.png"/>
          <Controls_1.Button bsStyle="primary" className="toggled-view" onClick={this.onToggleView}>
            {isSignIn ?
            [<i className="material-icons" key="reqistration">person_add</i>, <span>Registration</span>] :
            [<i className="material-icons" key="signIn">person</i>, <span>Sign in</span>]}
          </Controls_1.Button>
          <react_addons_css_transition_group_1.default transitionName="authorization" transitionEnterTimeout={400} transitionLeaveTimeout={300}>
            {isSignIn && <SignIn_1.default />}
            {!isSignIn && <Registration_1.default />}
          </react_addons_css_transition_group_1.default>
        </div>
      </div>);
    }
}
exports.default = AuthorizationLayout;
