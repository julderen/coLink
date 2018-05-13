"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ValidationAlert = ({ errors, className }) => {
    if (lodash_1.default.isEmpty(errors))
        return <span />;
    const unwrapErrors = lodash_1.default.isString(errors) ? [errors] : errors;
    console.log('asffasfas');
    return (<div className={classnames_1.default('alert-validation-errors', className)}>
        {unwrapErrors.map((value, key) => <div key={key}>{value}</div>)}
      </div>);
};
ValidationAlert.propTypes = {
    errors: prop_types_1.default.oneOfType([
        prop_types_1.default.object,
        prop_types_1.default.string
    ]),
    className: prop_types_1.default.string
};
exports.default = ValidationAlert;
