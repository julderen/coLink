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
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Controls_1 = require("Components/Controls");
const EditFormActions_1 = require("../Actions/EditFormActions");
const Form_1 = require("../Components/Form");
class DashboardPagesAlbumsCreateForm extends react_1.Component {
    constructor(props) {
        super();
        const { actions: { albumEdit, editCancel } } = props;
        this.onAlbumEdit = album => albumEdit(album);
        this.onEditCancel = () => editCancel();
    }
    render() {
        const _a = this.props, { status } = _a, props = __rest(_a, ["status"]);
        return (<div className="card">
        <Form_1.default {...props} onSubmit={this.onAlbumEdit} footer={<Controls_1.ButtonsGroup>
              <Controls_1.Button onClick={this.onEditCancel}>cancel</Controls_1.Button>
              <Controls_1.ButtonLoader status={status}>edit</Controls_1.ButtonLoader>
            </Controls_1.ButtonsGroup>}/>
      </div>);
    }
}
DashboardPagesAlbumsCreateForm.propTypes = {
    actions: prop_types_1.default.object,
    status: prop_types_1.default.string,
    reset: prop_types_1.default.func
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'albumEdit', actions: EditFormActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'albumEditForm', options: { destroyOnUnmount: false } }))(DashboardPagesAlbumsCreateForm);
