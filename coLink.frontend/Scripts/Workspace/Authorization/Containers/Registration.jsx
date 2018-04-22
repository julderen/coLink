import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, connectToForm, connectToStore } from 'Decorators/ConnectDecorators';

import RegistrationForm from '../Components/RegistrationForm';
import { registrationValidation } from '../Constants/ValidationConstants';
import Actions from '../Actions/RegistrationActions';

class SignIn extends Component {
  constructor(props) {
    super();

    this.registration = data => props.actions.registration(data);
  }

  render() {
    console.log(this.props);
    return (
      <div className="authorization-form registration-form">
        <RegistrationForm
          {...this.props}
          onSubmit={this.registration}
        />
      </div>
    );
  }
}

SignIn.propTypes = {
  actions: PropTypes.object
};

export default compose(
  connectToStore({ name: 'registration', actions: Actions }),
  connectToForm({ name: 'registration', validation: registrationValidation })
)(SignIn);
