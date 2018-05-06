import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connectToStore, compose, connectToForm } from 'Decorators/ConnectDecorators';
import { Button } from 'Components/Controls';

import CreateFormActions from '../Actions/CreateFormActions';
import Form from '../Components/Form';

class DashboardPagesLinkCreateForm extends Component {
  constructor(props) {
    super();

    const {
      reset,
      actions: { linkCreate, formReset },
    } = props;

    this.state = {
      isOpen: false
    };

    this.openToggle = () => {
      reset();
      formReset();
      this.setState({ isOpen: !this.state.isOpen });
    };
    this.onLinkCreate = link => linkCreate({ ...link, albumId: this.props.albumId }, this.openToggle);
    this.onCreateCancel = () => this.openToggle();
  }

  render() {
    return (
      <div className="wrap-card">
        <ReactCSSTransitionGroup
          transitionName="card"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.isOpen &&
            <div className="card">
              <Form onSubmit={this.onLinkCreate} onCreateCancel={this.onCreateCancel} {...this.props} />
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

DashboardPagesLinkCreateForm.propTypes = {
  albumId: PropTypes.string,
  actions: PropTypes.object,
  reset: PropTypes.func
};

export default compose(
  connectToStore({ name: 'linkCreate', actions: CreateFormActions }),
  connectToForm({ name: 'linkCreateForm' })
)(DashboardPagesLinkCreateForm);
