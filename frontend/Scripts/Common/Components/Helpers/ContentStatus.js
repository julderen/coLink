"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const HelpersUtils_1 = require("Utils/HelpersUtils");
const StatusConstants_1 = require("Constants/StatusConstants");
const HelpersContentStatus = ({ status, noMessage, message, className, children }) => {
    if (status === StatusConstants_1.STATUS_SUCCESS || status === StatusConstants_1.STATUS_DEFAULT) {
        return children ? <div>{children}</div> : null;
    }
    const statusMessage = HelpersUtils_1.default.defineStatusMessage(status, message);
    const statusClassName = HelpersUtils_1.default.defineStatusClassName(status);
    return (<div className={classnames_1.default('content-status', className)} data-status={status}>
      <div className="icon">
        {<div className={statusClassName}/>}
      </div>
      {noMessage ? null : <div className="message">{statusMessage}</div>}
    </div>);
};
HelpersContentStatus.propTypes = {
    noMessage: prop_types_1.default.bool,
    status: prop_types_1.default.string.isRequired,
    message: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node
};
HelpersContentStatus.defaultProps = {
    noMessage: false,
    status: StatusConstants_1.STATUS_DEFAULT
};
exports.default = HelpersContentStatus;
