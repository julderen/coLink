"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const realt_1 = require("realt");
const ModalsActions_1 = require("Actions/ModalsActions");
const ModalsConstants_1 = require("Constants/ModalsConstants");
class ConfirmModalActions {
    modalToggle() {
        return dispatch => dispatch(ModalsActions_1.default.modalToggle(ModalsConstants_1.MODAL_TYPES.confirm));
    }
    modalOpen(params) {
        return dispatch => {
            dispatch(this.modalToggle());
            return params;
        };
    }
}
exports.default = realt_1.createActions(ConfirmModalActions, 'confirmModal');
