"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Controls_1 = require("Components/Controls");
class PopoverSelect extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.targetNode = null;
        this.setTargetNode = node => { this.targetNode = node; };
        this.onToggle = this.onToggle.bind(this);
        this.onApply = this.onApply.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }
    onToggle(event) {
        if (event)
            event.stopPropagation();
        this.setState(state => ({ isOpen: !state.isOpen }));
    }
    onCancel() {
        const { onCancel } = this.props;
        if (lodash_1.default.isFunction(onCancel))
            setTimeout(this.props.onCancel(), 500);
        this.onToggle();
    }
    onApply() {
        this.props.onApply();
        this.onToggle();
    }
    renderPopover() {
        const { className, children } = this.props;
        return (<Controls_1.Popover className={classnames_1.default(className, 'popover-select')} id="popover-select">
        {children}
        <div className="buttons">
          <Controls_1.Button onClick={this.onCancel}>Отмена</Controls_1.Button>
          <Controls_1.Button bsStyle="primary" onClick={this.onApply}>Выбрать</Controls_1.Button>
        </div>
      </Controls_1.Popover>);
    }
    render() {
        const { isOpen } = this.state;
        const { containerClassName, placement, target, onDataFetch } = this.props;
        const targetNode = react_1.default.cloneElement(target, {
            ref: this.setTargetNode,
            className: isOpen && 'is-open',
            onClick: this.onToggle
        });
        return (<div className={containerClassName}>
        {targetNode}
        <Controls_1.Overlay rootClose placement={placement} show={isOpen} target={this.targetNode} onEnter={onDataFetch} onHide={this.onCancel}>
          {this.renderPopover()}
        </Controls_1.Overlay>
      </div>);
    }
}
PopoverSelect.propTypes = {
    containerClassName: prop_types_1.default.string,
    className: prop_types_1.default.string,
    placement: prop_types_1.default.string,
    target: prop_types_1.default.node.isRequired,
    children: prop_types_1.default.node.isRequired,
    onApply: prop_types_1.default.func.isRequired,
    onDataFetch: prop_types_1.default.func,
    onCancel: prop_types_1.default.func
};
PopoverSelect.defaultProps = {
    placement: 'right'
};
exports.default = PopoverSelect;
