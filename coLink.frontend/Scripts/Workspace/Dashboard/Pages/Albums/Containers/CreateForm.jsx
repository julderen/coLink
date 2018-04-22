import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connectToStore, compose, connectToForm } from 'Decorators/ConnectDecorators';
import { Button, ButtonLoader, ButtonsGroup } from 'Components/Controls';

import CreateFormActions from '../Actions/CreateFormActions';
import Form from '../Components/Form';

class DashboardPagesAlbumsCreateForm extends Component {
  constructor(props) {
    super();

    const {
      reset,
      actions: { albumCreate, formReset }
    } = props;

    this.state = {
      isOpen: false
    };

    this.openToggle = () => {
      reset();
      formReset()
      this.setState({ isOpen: !this.state.isOpen });
    };
    this.onAlbumCreate = album => albumCreate({ ...album, userId: this.props.userId }, this.openToggle);
  }

  render() {
    const { status, ...props } = this.props;

    return (
      <div className="wrap-card">
        <ReactCSSTransitionGroup
          transitionName="card"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.isOpen &&
            <div className="card">
              <Form
                {...props}
                onSubmit={this.onAlbumCreate}
                footer={
                  <ButtonsGroup>
                    <Button status={status} onClick={this.openToggle}>cancel</Button>
                    <ButtonLoader status={status}>create</ButtonLoader>
                  </ButtonsGroup>
                }
              />
            </div>}
          {!this.state.isOpen &&
            <div className="card new-card">
              <Button onClick={this.openToggle}><i className="material-icons">add</i></Button>
            </div>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

DashboardPagesAlbumsCreateForm.propTypes = {
  actions: PropTypes.object,
  userId: PropTypes.string,
  status: PropTypes.string,
  reset: PropTypes.func
};

export default compose(
  connectToStore({ name: 'albumCreate', actions: CreateFormActions }),
  connectToForm({ name: 'albumCreateForm' })
)(DashboardPagesAlbumsCreateForm);
