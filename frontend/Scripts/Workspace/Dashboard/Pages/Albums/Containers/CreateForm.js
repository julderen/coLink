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
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_addons_css_transition_group_1 = require("react-addons-css-transition-group");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Controls_1 = require("Components/Controls");
const CreateFormActions_1 = require("../Actions/CreateFormActions");
const Form_1 = require("../Components/Form");
class DashboardPagesAlbumsCreateForm extends react_1.Component {
    constructor(props) {
        super();
        const { reset, actions: { albumCreate, formReset } } = props;
        this.state = {
            isOpen: false
        };
        this.openToggle = () => {
            reset();
            formReset();
            this.setState({ isOpen: !this.state.isOpen });
        };
        this.onAlbumCreate = album => albumCreate(Object.assign({}, album, { userId: this.props.userId }), this.openToggle);
    }
    render() {
        const _a = this.props, { status } = _a, props = __rest(_a, ["status"]);
        return (<div className="wrap-card">
        <react_addons_css_transition_group_1.default transitionName="card" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.state.isOpen &&
            <div className="card">
              <Form_1.default {...props} onSubmit={this.onAlbumCreate} footer={<Controls_1.ButtonsGroup>
                    <Controls_1.Button status={status} onClick={this.openToggle}>cancel</Controls_1.Button>
                    <Controls_1.ButtonLoader status={status}>create</Controls_1.ButtonLoader>
                  </Controls_1.ButtonsGroup>}/>
            </div>}
          {!this.state.isOpen &&
            <div className="card new-card">
              <Controls_1.Button onClick={this.openToggle}><i className="material-icons">add</i></Controls_1.Button>
            </div>}
        </react_addons_css_transition_group_1.default>
      </div>);
    }
}
DashboardPagesAlbumsCreateForm.propTypes = {
    actions: prop_types_1.default.object,
    userId: prop_types_1.default.string,
    status: prop_types_1.default.string,
    reset: prop_types_1.default.func
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'albumCreate', actions: CreateFormActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'albumCreateForm' }))(DashboardPagesAlbumsCreateForm);
