import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore, compose, connectToForm } from 'Decorators/ConnectDecorators';
import { ButtonLoader, ButtonsGroup, Button } from 'Components/Controls';

import EditFormActions from '../Actions/EditFormActions';
import Form from '../Components/Form';

class DashboardPagesAlbumsCreateForm extends Component {
  constructor(props) {
    super();

    const {
      actions: { albumEdit, editCancel }
    } = props;

    this.onAlbumEdit = album => albumEdit(album);
    this.onEditCancel = () => editCancel();
  }

  render() {
    const { status, ...props } = this.props;

    return (
      <div className="card">
        <Form
          {...props}
          onSubmit={this.onAlbumEdit}
          footer={
            <ButtonsGroup>
              <Button onClick={this.onEditCancel}>cancel</Button>
              <ButtonLoader status={status}>edit</ButtonLoader>
            </ButtonsGroup>
          }
        />
      </div>
    );
  }
}

DashboardPagesAlbumsCreateForm.propTypes = {
  actions: PropTypes.object,
  status: PropTypes.string,
  reset: PropTypes.func
};

export default compose(
  connectToStore({ name: 'albumEdit', actions: EditFormActions }),
  connectToForm({ name: 'albumEditForm', options: { destroyOnUnmount: false } })
)(DashboardPagesAlbumsCreateForm);
