import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { Button, ButtonsGroup } from 'Components/Controls';
import Modal from 'Containers/Modal';

import ConfirmModalActions from '../Actions/ConfirmModalActions';

class ConfirmModal extends Component {
  constructor(props) {
    super(props);

    const { modalToggle } = props.actions;

    this.onCancel = () => modalToggle();
    this.onSubmit = () => {
      modalToggle();
      this.props.onConfirm();
    };
  }

  render() {
    const { title, message } = this.props;

    return (
      <Modal
        type={'confirm'}
        center
        className="confirm-modal"
        title={title}
      >
        <div className="confirm-message">{message}</div>
        <ButtonsGroup>
          <Button onClick={this.onCancel}>Отмена</Button>
          <Button autoFocus bsStyle="primary" onClick={this.onSubmit}>Да</Button>
        </ButtonsGroup>
      </Modal>
    );
  }
}

ConfirmModal.propTypes = {
  actions: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func
};


export default connectToStore({
  mapStateToProps: ({ confirmModal }) => confirmModal,
  actions: ConfirmModalActions
})(ConfirmModal);
