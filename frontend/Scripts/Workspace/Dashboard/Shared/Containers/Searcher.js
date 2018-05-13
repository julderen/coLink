"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Controls_1 = require("Components/Controls");
const SearcherActions_1 = require("../Actions/SearcherActions");
class DashboardHeader extends react_1.Component {
    constructor() {
        super();
        this.onValueChange = value => this.props.actions.changeValue(value);
    }
    render() {
        return (<Controls_1.SearchInput onChange={this.onValueChange} value={this.props.value}/>);
    }
}
DashboardHeader.propTypes = {
    value: prop_types_1.default.string,
    actions: prop_types_1.default.object,
};
exports.default = ConnectDecorators_1.connectToStore({ name: 'searcher', actions: SearcherActions_1.default })(DashboardHeader);
