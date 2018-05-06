import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, connectToForm, connectToStore } from 'Decorators/ConnectDecorators';

import SigInForm from '../Components/SigInForm';
import { signInValidation } from '../Constants/ValidationConstants';
import Actions from '../Actions/SignInActions';

class SignIn extends Component {
  constructor(props) {
    super();

    this.signIn = data => props.actions.signIn(data);
  }

  render() {
    return (
      <div className="authorization-form sign-in-form">
        <SigInForm
          {...this.props}
          onSubmit={this.signIn}
        />
      </div>
    );
  }
}

SignIn.propTypes = {
  actions: PropTypes.object
};

export default compose(
  connectToStore({ name: 'signIn', actions: Actions }),
  connectToForm({ name: 'signIn', validation: signInValidation })
)(SignIn);
