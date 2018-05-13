"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_addons_css_transition_group_1 = require("react-addons-css-transition-group");
const FormUtils_1 = require("Utils/FormUtils");
const EditForm_1 = require("../Containers/EditForm");
const AlbumsConstants_1 = require("../Constants/AlbumsConstants");
const DashboardPagesAlbum = ({ isEditing, description, type, title, id, onAlbumOpen, onAlbumEditFormOpen, onAlbumTypeToggle, onAlbumDelete }) => (<div className="wrap-card">
    <react_addons_css_transition_group_1.default transitionName="card" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
      {isEditing && <EditForm_1.default />}
      {!isEditing &&
    <div className="card album" onClick={onAlbumOpen(id, title)}>
        <div className="header">{title}</div>
        <div className="description">{description}</div>
        <div className="controls" onClick={FormUtils_1.default.stopPropagation}>
          <i className="material-icons" title="Delete album" onClick={onAlbumDelete(id)}>delete</i>
          <i className="material-icons" title="Edit album" onClick={onAlbumEditFormOpen({ id, title, description })}>mode_edit</i>
          {AlbumsConstants_1.ALBUM_TYPE.private === type ?
        <i className="material-icons" title="Make album published" onClick={onAlbumTypeToggle(id, AlbumsConstants_1.ALBUM_TYPE.public)}>lock_outline</i> :
        <i className="material-icons" title="Make alum private" onClick={onAlbumTypeToggle(id, AlbumsConstants_1.ALBUM_TYPE.private)}>lock_open</i>}
        </div>
      </div>}
    </react_addons_css_transition_group_1.default>
  </div>);
DashboardPagesAlbum.propTypes = {
    isEditing: prop_types_1.default.bool,
    id: prop_types_1.default.string,
    type: prop_types_1.default.string,
    title: prop_types_1.default.string,
    description: prop_types_1.default.string,
    onAlbumOpen: prop_types_1.default.func,
    onAlbumEditFormOpen: prop_types_1.default.func,
    onAlbumTypeToggle: prop_types_1.default.func,
    onAlbumDelete: prop_types_1.default.func
};
exports.default = DashboardPagesAlbum;
