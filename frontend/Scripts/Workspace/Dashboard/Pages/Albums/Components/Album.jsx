import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FormUtils from 'Utils/FormUtils';

import EditForm from '../Containers/EditForm';
import { ALBUM_TYPE } from '../Constants/AlbumsConstants';

const DashboardPagesAlbum = ({
  isEditing,
  description,
  type,
  title,
  id,
  onAlbumOpen,
  onAlbumEditFormOpen,
  onAlbumTypeToggle,
  onAlbumDelete
}) => (
  <div className="wrap-card">
    <ReactCSSTransitionGroup
      transitionName="card"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {isEditing && <EditForm />}
      {!isEditing &&
      <div className="card album" onClick={onAlbumOpen(id, title)}>
        <div className="header">{title}</div>
        <div className="description">{description}</div>
        <div className="controls" onClick={FormUtils.stopPropagation}>
          <i className="material-icons" title="Delete album" onClick={onAlbumDelete(id)}>delete</i>
          <i className="material-icons" title="Edit album" onClick={onAlbumEditFormOpen({ id, title, description })}>mode_edit</i>
          {ALBUM_TYPE.private === type ?
            <i className="material-icons" title="Make album published" onClick={onAlbumTypeToggle(id, ALBUM_TYPE.public)}>lock_outline</i> :
            <i className="material-icons" title="Make alum private" onClick={onAlbumTypeToggle(id, ALBUM_TYPE.private)}>lock_open</i>
          }
        </div>
      </div>
      }
    </ReactCSSTransitionGroup>
  </div>
);

DashboardPagesAlbum.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onAlbumOpen: PropTypes.func,
  onAlbumEditFormOpen: PropTypes.func,
  onAlbumTypeToggle: PropTypes.func,
  onAlbumDelete: PropTypes.func
};

export default DashboardPagesAlbum;
