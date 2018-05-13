"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
const Controls_1 = require("Components/Controls");
class ControlsSearchInput extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    componentWillReceiveProps({ value }) {
        const { value: prevValue } = this.props;
        if (value !== prevValue && value !== this.state.value)
            this.setState({ value });
    }
    onChange({ target: { value } }) {
        this.setState({ value });
        const { trigger, onChange } = this.props;
        if (trigger === 'search') {
            onChange(value);
        }
    }
    onSearch(event) {
        event.preventDefault();
        this.props.onChange(this.state.value);
    }
    render() {
        const { trigger, placeholder, searchLabel, className } = this.props;
        return (<form className={classnames_1.default('search-input', className)} onSubmit={this.onSearch}>
        <Controls_1.FormControl value={this.state.value} placeholder={placeholder} onChange={this.onChange}/>
        {trigger === 'click' ? (<Controls_1.Button bsStyle="primary" onClick={this.onSearch}>
            {searchLabel}
          </Controls_1.Button>) : null}
      </form>);
    }
}
ControlsSearchInput.propTypes = {
    trigger: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    searchLabel: prop_types_1.default.string,
    className: prop_types_1.default.string,
    value: prop_types_1.default.string,
    onChange: prop_types_1.default.func
};
ControlsSearchInput.defaultProps = {
    placeholder: 'Поиск...',
    searchLabel: 'Поиск',
    trigger: 'click'
};
exports.default = ControlsSearchInput;
