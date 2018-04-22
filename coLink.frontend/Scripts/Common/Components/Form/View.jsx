import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ValidationAlert } from 'Components/Helpers';

class BaseFormContainer extends Component {
  render() {
    const { handleSubmit, onSubmit, children, errors, className } = this.props;

    return (
      <div className={className}>
        <ReactCSSTransitionGroup
          transitionName="alert-validation"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {errors && <ValidationAlert errors={errors} />}
        </ReactCSSTransitionGroup>
        <form onSubmit={onSubmit && handleSubmit ? handleSubmit(onSubmit) : null}>
          {children}
        </form>
      </div>
    );
  }
}

BaseFormContainer.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  handleSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  onSubmit: PropTypes.func,
};

export default BaseFormContainer;
