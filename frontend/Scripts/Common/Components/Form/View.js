"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_addons_css_transition_group_1 = require("react-addons-css-transition-group");
const Helpers_1 = require("Components/Helpers");
class BaseFormContainer extends react_1.Component {
    render() {
        const { handleSubmit, onSubmit, children, errors, className } = this.props;
        return (<div className={className}>
        <react_addons_css_transition_group_1.default transitionName="alert-validation" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {errors && <Helpers_1.ValidationAlert errors={errors}/>}
        </react_addons_css_transition_group_1.default>
        <form onSubmit={onSubmit && handleSubmit ? handleSubmit(onSubmit) : null}>
          {children}
        </form>
      </div>);
    }
}
BaseFormContainer.propTypes = {
    className: prop_types_1.default.string,
    errors: prop_types_1.default.oneOfType([
        prop_types_1.default.object,
        prop_types_1.default.string
    ]),
    handleSubmit: prop_types_1.default.func,
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.array
    ]),
    onSubmit: prop_types_1.default.func,
};
exports.default = BaseFormContainer;
