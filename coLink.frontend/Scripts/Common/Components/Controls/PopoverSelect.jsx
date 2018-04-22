import _ from 'lodash';
import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Popover, Button } from 'Components/Controls';

class PopoverSelect extends Component {
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
    if (event) event.stopPropagation();

    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  onCancel() {
    const { onCancel } = this.props;

    if (_.isFunction(onCancel)) setTimeout(this.props.onCancel(), 500);

    this.onToggle();
  }

  onApply() {
    this.props.onApply();

    this.onToggle();
  }

  renderPopover() {
    const { className, children } = this.props;

    return (
      <Popover className={classNames(className, 'popover-select')} id="popover-select">
        {children}
        <div className="buttons">
          <Button onClick={this.onCancel}>Отмена</Button>
          <Button bsStyle="primary" onClick={this.onApply}>Выбрать</Button>
        </div>
      </Popover>
    );
  }

  render() {
    const { isOpen } = this.state;
    const { containerClassName, placement, target, onDataFetch } = this.props;

    const targetNode = React.cloneElement(target, {
      ref: this.setTargetNode,
      className: isOpen && 'is-open',
      onClick: this.onToggle
    });

    return (
      <div className={containerClassName}>
        {targetNode}
        <Overlay
          rootClose
          placement={placement}
          show={isOpen}
          target={this.targetNode}
          onEnter={onDataFetch}
          onHide={this.onCancel}
        >
          {this.renderPopover()}
        </Overlay>
      </div>
    );
  }
}

PopoverSelect.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  placement: PropTypes.string,
  target: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onApply: PropTypes.func.isRequired,
  onDataFetch: PropTypes.func,
  onCancel: PropTypes.func
};

PopoverSelect.defaultProps = {
  placement: 'right'
};

export default PopoverSelect;
