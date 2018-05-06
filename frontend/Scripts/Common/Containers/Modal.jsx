import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import ModalsActions from 'Actions/ModalsActions';
import { Modal } from 'Components/Controls';

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    const { type, actions: { modalToggle, modalInit, modalClear } } = props;

    this.componentDidMount = () => modalInit(type);
    this.componentWillUnmount = () => modalClear(type);

    this.onToggle = () => modalToggle(type);
  }

  render() {
    const { actions, children, ...props } = this.props;

    return (
      <Modal
        {...props}
        onToggle={this.onToggle}
      >
        {children}
      </Modal>
    );
  }
}

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default connectToStore({
  mapStateToProps: ({ modal }, props) => ({ ..._.get(modal, props.type) }),
  actions: ModalsActions
})(ModalContainer);
