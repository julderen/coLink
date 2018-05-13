"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Multiselect_1 = require("react-widgets/lib/Multiselect");
const BaseField_1 = require("Components/Form/BaseField");
const BaseInitialStates_1 = require("Constants/BaseInitialStates");
const SEARCH_TIMEOUT = 500;
const DEFAULT_MESSAGES = {
    createNew: 'создать новый элемент.',
    emptyFilter: 'Ничего не найдено',
    emptyValue: 'Ничего не выбрано',
    emptyList: 'Ничего не найдено',
};
class ControlsMultiSelect extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        };
        this.onSearch = lodash_1.default.debounce(value => this.dataFetch(value), SEARCH_TIMEOUT);
        this.onToggle = this.onToggle.bind(this);
        this.dataFetch = this.dataFetch.bind(this);
    }
    onToggle(isOpen) {
        const { onBlur } = this.props.input;
        if (lodash_1.default.isFunction(onBlur) && !isOpen)
            onBlur();
        if (isOpen)
            this.dataFetch();
    }
    dataFetch(value) {
        const { dataFetch, queryParams } = this.props;
        dataFetch(Object.assign({}, BaseInitialStates_1.DATA_DEFAULT_SAMPLE, queryParams, { search: value }))
            .loading(() => this.setState({ loading: true }))
            .then(({ response }) => {
            this.setState({ data: response.data || response, loading: false });
        })
            .catch(() => this.setState({ loading: false }));
    }
    render() {
        const { disabled, required, hidden, inline, label, className, placeholder, errorsDisplayType, valueField, textField, meta, messages, input: { value, onChange, onFocus } } = this.props;
        const { data, loading } = this.state;
        return (<BaseField_1.default required={required} inline={inline} hidden={hidden} label={label} className={className} errorsDisplayType={errorsDisplayType} meta={meta}>
        <div className="multi-select rw-widget-wrap">
          <Multiselect_1.default disabled={disabled} busy={loading} placeholder={placeholder} valueField={valueField} textField={textField} data={data} value={value || []} messages={messages || DEFAULT_MESSAGES} onFocus={onFocus} onChange={onChange} onToggle={this.onToggle} onSearch={this.onSearch}/>
        </div>
      </BaseField_1.default>);
    }
}
ControlsMultiSelect.propTypes = {
    disabled: prop_types_1.default.bool,
    inline: prop_types_1.default.bool,
    hidden: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    messages: prop_types_1.default.object,
    input: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    queryParams: prop_types_1.default.object,
    label: prop_types_1.default.string,
    valueField: prop_types_1.default.string,
    errorsDisplayType: prop_types_1.default.string,
    className: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    textField: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    dataFetch: prop_types_1.default.func
};
exports.default = ControlsMultiSelect;
