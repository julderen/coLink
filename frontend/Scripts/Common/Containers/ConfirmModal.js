"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Controls_1 = require("Components/Controls");
const Modal_1 = require("Containers/Modal");
const ConfirmModalActions_1 = require("../Actions/ConfirmModalActions");
class ConfirmModal extends react_1.Component {
    constructor(props) {
        super(props);
        const { modalToggle } = props.actions;
        this.onCancel = () => modalToggle();
        this.onSubmit = () => {
            modalToggle();
            this.props.onConfirm();
        };
    }
    render() {
        const { title, message } = this.props;
        return (<Modal_1.default type={'confirm'} center className="confirm-modal" title={title}>
        <div className="confirm-message">{message}</div>
        <Controls_1.ButtonsGroup>
          <Controls_1.Button onClick={this.onCancel}>Отмена</Controls_1.Button>
          <Controls_1.Button autoFocus bsStyle="primary" onClick={this.onSubmit}>Да</Controls_1.Button>
        </Controls_1.ButtonsGroup>
      </Modal_1.default>);
    }
}
ConfirmModal.propTypes = {
    actions: prop_types_1.default.object,
    title: prop_types_1.default.string,
    message: prop_types_1.default.string,
    onConfirm: prop_types_1.default.func
};
exports.default = ConnectDecorators_1.connectToStore({
    mapStateToProps: ({ confirmModal }) => confirmModal,
    actions: ConfirmModalActions_1.default
})(ConfirmModal);
