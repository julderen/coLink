import _ from 'lodash';
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button } from 'Components/Controls';

import SignIn from '../Containers/SignIn';
import Registration from '../Containers/Registration';


class AuthorizationLayout extends Component {
  constructor() {
    super();

    this.state = {
      isSignIn: true
    };

    this.onToggleView = () => _.debounce(this.setState({ isSignIn: !this.state.isSignIn }), 700);
  }

  render() {
    const { isSignIn } = this.state;

    return (
      <div className="authorization-layout">
        <div className="authorization-content-wrap">
          <img alt="sorry..." src="http://localhost:8090/contents/sign-in.png" />
          <Button bsStyle="primary" className="toggled-view" onClick={this.onToggleView}>
            {
              isSignIn ?
                [<i className="material-icons" key="reqistration">person_add</i>, <span>Registration</span>] :
                [<i className="material-icons" key="signIn">person</i>, <span>Sign in</span>]
            }
          </Button>
          <ReactCSSTransitionGroup
            transitionName="authorization"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
          >
            {isSignIn && <SignIn />}
            {!isSignIn && <Registration />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default AuthorizationLayout;
