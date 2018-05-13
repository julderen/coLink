"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Controls_1 = require("Components/Controls");
const BaseField_1 = require("Components/Form/BaseField");
const BaseInitialStates_1 = require("Constants/BaseInitialStates");
const DEFAULT_MESSAGES = {
    open: 'Открыть поиск',
    emptyList: 'Ничего не найдено',
    emptyFilter: 'Ничего не найдено',
    emptyValue: 'Ничего не выбрано',
    filterPlaceholder: 'Начните вводить название для поиска..'
};
const SEARCH_TIMEOUT = 500;
class ControlsSearcher extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialized: false,
            loading: false,
            isOpen: false,
            data: []
        };
        const { isSearcher, input: { onChange } } = props;
        this.onSearch = lodash_1.default.debounce(value => this.state.isOpen && this.dataFetch(value), SEARCH_TIMEOUT);
        this.reset = () => onChange(null);
        this.initialValueExists = () => this.props.input.value;
        this.initializeActive = () => this.setState({ initialized: true });
        this.filter = isSearcher ? () => true : null;
        this.onChange = () => { };
        this.onToggle = this.onToggle.bind(this);
        this.singleFetch = this.singleFetch.bind(this);
        this.defaultFetch = this.defaultFetch.bind(this);
        this.dataFetch = this.dataFetch.bind(this);
        this.isReadyToUpdate = (prevQueryParams, queryParams) => !lodash_1.default.some(queryParams, lodash_1.default.isEmpty) && !lodash_1.default.isEqual(prevQueryParams, queryParams);
        this.isReadyToReset = (prevQueryParams, queryParams) => !lodash_1.default.isEqual(prevQueryParams, queryParams);
    }
    componentDidMount() {
        const { defaultSelect, singleFetch } = this.props;
        if (this.initialValueExists())
            return;
        if (lodash_1.default.isFunction(singleFetch)) {
            this.singleFetch();
        }
        else if (defaultSelect) {
            this.defaultFetch();
        }
    }
    componentDidUpdate({ queryParams: prevQueryParams }) {
        const { defaultSelect, queryParams } = this.props;
        if (this.initialValueExists() && !this.state.initialized) {
            this.initializeActive();
        }
        else if (defaultSelect && this.isReadyToUpdate(prevQueryParams, queryParams)) {
            this.defaultFetch();
        }
        else if (this.isReadyToReset(prevQueryParams, queryParams)) {
            this.reset();
        }
    }
    onToggle(isOpen) {
        const { onBlur } = this.props.input;
        this.setState({ isOpen });
        if (lodash_1.default.isFunction(onBlur) && !isOpen)
            onBlur();
        if (isOpen)
            this.dataFetch();
    }
    singleFetch() {
        const { singleFetch, input: { onChange } } = this.props;
        singleFetch()
            .loading(() => this.setState({ loading: true }))
            .then(({ response }) => {
            onChange(response);
            this.setState({ loading: false });
        })
            .catch(() => this.setState({ loading: false }));
    }
    defaultFetch() {
        const { dataFetch, queryParams, input: { onChange } } = this.props;
        if (!lodash_1.default.isFunction(dataFetch))
            return;
        dataFetch(Object.assign({}, BaseInitialStates_1.DATA_DEFAULT_SAMPLE, queryParams))
            .loading(() => this.setState({ loading: true }))
            .then(({ response }) => {
            this.setState({ data: response.data || response, loading: false });
            onChange((response.data || response)[0] || null);
        })
            .catch(() => this.setState({ loading: false }));
    }
    dataFetch(value) {
        const { dataFetch, queryParams } = this.props;
        if (!lodash_1.default.isFunction(dataFetch))
            return;
        dataFetch(Object.assign({}, BaseInitialStates_1.DATA_DEFAULT_SAMPLE, queryParams, { search: value }))
            .loading(() => this.setState({ loading: true }))
            .then(({ response }) => {
            this.setState({ data: response.data || response, loading: false });
        })
            .catch(() => this.setState({ loading: false }));
    }
    render() {
        const { disabled, required, hidden, inline, label, className, placeholder, errorsDisplayType, valueField, textField, tabIndex, meta, defaultValue, messages, itemComponent, input: { value, onChange, onFocus }, data: propsData } = this.props;
        const { data, loading } = this.state;
        return (<BaseField_1.default required={required} inline={inline} hidden={hidden} label={label} className={className} errorsDisplayType={errorsDisplayType} meta={meta}>
        <div className="searcher rw-widget-wrap">
          <Controls_1.DropdownList title={value && lodash_1.default.isFunction(textField) ? textField(value) : lodash_1.default.get(value, textField)} disabled={disabled} valueField={valueField} textField={textField} busy={loading} data={propsData || data} value={lodash_1.default.isEmpty(value) ? null : value} defaultValue={defaultValue || DEFAULT_MESSAGES.emptyValue} messages={messages || DEFAULT_MESSAGES} placeholder={placeholder} tabIndex={tabIndex} filter={this.filter} itemComponent={itemComponent} onChange={this.onChange} onFocus={onFocus} onSelect={onChange} onSearch={this.onSearch} onToggle={this.onToggle}/>
          {!disabled && value && <div className="reset" title="Очистить" onClick={this.reset}/>}
        </div>
      </BaseField_1.default>);
    }
}
ControlsSearcher.propTypes = {
    data: prop_types_1.default.array,
    disabled: prop_types_1.default.bool,
    inline: prop_types_1.default.bool,
    hidden: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    defaultSelect: prop_types_1.default.bool,
    isSearcher: prop_types_1.default.bool,
    messages: prop_types_1.default.object,
    input: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    queryParams: prop_types_1.default.object,
    label: prop_types_1.default.string,
    valueField: prop_types_1.default.string,
    errorsDisplayType: prop_types_1.default.string,
    className: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    tabIndex: prop_types_1.default.number,
    textField: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    singleFetch: prop_types_1.default.func,
    itemComponent: prop_types_1.default.func,
    dataFetch: prop_types_1.default.func
};
exports.default = ControlsSearcher;
