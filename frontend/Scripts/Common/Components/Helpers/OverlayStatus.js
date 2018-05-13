"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const HelpersUtils_1 = require("Utils/HelpersUtils");
const StatusConstants_1 = require("Constants/StatusConstants");
const HelpersOverlayStatus = ({ status, message, className, children }) => {
    if (!status)
        return (<div>{children}</div>);
    const statusMessage = HelpersUtils_1.default.defineStatusMessage(status, message);
    const statusClassName = HelpersUtils_1.default.defineStatusClassName(status);
    return (<div className={classnames_1.default('overlay-status', className)} data-status={status}>
      {children}
      <div className="message">
        <div className="icon">
          {<span className={statusClassName}/>}
        </div>
        {statusMessage}
      </div>
    </div>);
};
HelpersOverlayStatus.propTypes = {
    status: prop_types_1.default.string,
    message: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node.isRequired
};
HelpersOverlayStatus.defaultProps = {
    status: StatusConstants_1.STATUS_DEFAULT,
    className: ''
};
exports.default = HelpersOverlayStatus;
