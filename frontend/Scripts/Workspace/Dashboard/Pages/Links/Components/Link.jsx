import React from 'react';
import PropTypes from 'prop-types';
import ColorHash from 'color-hash';
import FormUtils from 'Utils/FormUtils';

const colorHash = new ColorHash();

const DashboardPagesLink = ({ id, url, title, cover, favicon, onLinksDelete, onLinkOpen }) => (
  <div className="wrap-card">
    <div className="card link" onClick={onLinkOpen(url)}>
      <div
        className="cover"
        style={{ [cover ? 'background-image' : 'background-color']: cover ? `url(${cover})` : colorHash.hex(title) }}
      >
        <div className="favicon">
          {favicon ? <img src={favicon} alt="" /> : null}
        </div>
      </div>
      <div className="title" title={title}>{title}</div>
      <div className="url" title={url}>{url}</div>
      <div className="controls" onClick={FormUtils.stopPropagation}>
        <i className="material-icons" title="Delete link" onClick={onLinksDelete(id)}>delete</i>
      </div>
    </div>
  </div>
);

DashboardPagesLink.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  favicon: PropTypes.string,
  cover: PropTypes.string,
  onLinksDelete: PropTypes.func,
  onLinkOpen: PropTypes.func
};

export default DashboardPagesLink;
