"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const color_hash_1 = require("color-hash");
const FormUtils_1 = require("Utils/FormUtils");
const colorHash = new color_hash_1.default();
const DashboardPagesLink = ({ id, url, title, cover, favicon, onLinksDelete, onLinkOpen }) => (<div className="wrap-card">
    <div className="card link" onClick={onLinkOpen(url)}>
      <div className="cover" style={{ [cover ? 'background-image' : 'background-color']: cover ? `url(${cover})` : colorHash.hex(title) }}>
        <div className="favicon">
          {favicon ? <img src={favicon} alt=""/> : null}
        </div>
      </div>
      <div className="title" title={title}>{title}</div>
      <div className="url" title={url}>{url}</div>
      <div className="controls" onClick={FormUtils_1.default.stopPropagation}>
        <i className="material-icons" title="Delete link" onClick={onLinksDelete(id)}>delete</i>
      </div>
    </div>
  </div>);
DashboardPagesLink.propTypes = {
    id: prop_types_1.default.string,
    url: prop_types_1.default.string,
    title: prop_types_1.default.string,
    favicon: prop_types_1.default.string,
    cover: prop_types_1.default.string,
    onLinksDelete: prop_types_1.default.func,
    onLinkOpen: prop_types_1.default.func
};
exports.default = DashboardPagesLink;
