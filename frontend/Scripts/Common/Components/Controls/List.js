"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ControlsList = ({ className, data, selected, keyField, noDataMessage, children, onSelect }) => {
    if (lodash_1.default.isEmpty(data))
        return <div className="no-data-message">{noDataMessage}</div>;
    return (<ul className={className}>
      {lodash_1.default.map(data, item => (<li key={item[keyField]} className={classnames_1.default({ 'is-selected': selected && selected[keyField] === item[keyField] })} onClick={onSelect(item)}>
          {children(item)}
        </li>))}
    </ul>);
};
ControlsList.propTypes = {
    className: prop_types_1.default.string,
    selected: prop_types_1.default.object,
    keyField: prop_types_1.default.string.isRequired,
    data: prop_types_1.default.oneOfType([
        prop_types_1.default.array,
        prop_types_1.default.object
    ]),
    noDataMessage: prop_types_1.default.string,
    children: prop_types_1.default.func,
    onSelect: prop_types_1.default.func
};
ControlsList.defaultProps = {
    noDataMessage: 'Нет данных'
};
exports.default = ControlsList;
