import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { ContentStatus } from 'Components/Helpers';

import UserActions from '../Actions/UserActions';

class SignIn extends Component {
  constructor(props) {
    super();

    this.componentWillMount = () => props.actions.userGet();
  }

  render() {
    const { children, status } = this.props;

    return (
      <ContentStatus status={status}>
        {children}
      </ContentStatus>
    );
  }
}

SignIn.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  status: PropTypes.string
};

export default connectToStore({ name: 'user', actions: UserActions })(SignIn);

