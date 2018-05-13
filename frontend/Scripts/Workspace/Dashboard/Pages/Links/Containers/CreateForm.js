"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_addons_css_transition_group_1 = require("react-addons-css-transition-group");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Controls_1 = require("Components/Controls");
const CreateFormActions_1 = require("../Actions/CreateFormActions");
const Form_1 = require("../Components/Form");
class DashboardPagesLinkCreateForm extends react_1.Component {
    constructor(props) {
        super();
        const { reset, actions: { linkCreate, formReset }, } = props;
        this.state = {
            isOpen: false
        };
        this.openToggle = () => {
            reset();
            formReset();
            this.setState({ isOpen: !this.state.isOpen });
        };
        this.onLinkCreate = link => linkCreate(Object.assign({}, link, { albumId: this.props.albumId }), this.openToggle);
        this.onCreateCancel = () => this.openToggle();
    }
    render() {
        return (<div className="wrap-card">
        <react_addons_css_transition_group_1.default transitionName="card" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.state.isOpen &&
            <div className="card">
              <Form_1.default onSubmit={this.onLinkCreate} onCreateCancel={this.onCreateCancel} {...this.props}/>
            </div>}
          {!this.state.isOpen &&
            <div className="card new-card">
              <Controls_1.Button onClick={this.openToggle}><i className="material-icons">add</i></Controls_1.Button>
            </div>}
        </react_addons_css_transition_group_1.default>
      </div>);
    }
}
DashboardPagesLinkCreateForm.propTypes = {
    albumId: prop_types_1.default.string,
    actions: prop_types_1.default.object,
    reset: prop_types_1.default.func
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'linkCreate', actions: CreateFormActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'linkCreateForm' }))(DashboardPagesLinkCreateForm);
