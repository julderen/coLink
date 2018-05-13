"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Controls_1 = require("Components/Controls");
const Form_1 = require("Components/Form");
class RadioSet extends react_1.Component {
    constructor() {
        super();
        this.onChange = (item, onChange) => () => onChange(item);
    }
    render() {
        const _a = this.props, { disabled, vertical, data, input } = _a, props = __rest(_a, ["disabled", "vertical", "data", "input"]);
        const xs = vertical ? 12 : (12 / data.length);
        const md = xs;
        return (<Form_1.BaseField {...props}>
        <Controls_1.Row className={classnames_1.default('radio-set', { vertical })}>
          {data.map(({ name, label, value }) => (<Controls_1.Col key={name} xs={xs} md={md}>
              <Controls_1.Radio disabled={disabled} checked={lodash_1.default.isEqual(input.value, value)} name={name} label={label} onChange={this.onChange(value, input.onChange)}/>
            </Controls_1.Col>))}
        </Controls_1.Row>
      </Form_1.BaseField>);
    }
}
RadioSet.propTypes = {
    disabled: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    vertical: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    className: prop_types_1.default.string,
    input: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    data: prop_types_1.default.arrayOf(prop_types_1.default.object),
};
RadioSet.defaultProps = {
    disabled: false,
    vertical: false,
};
exports.default = RadioSet;
