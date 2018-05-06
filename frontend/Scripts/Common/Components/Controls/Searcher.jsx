import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownList } from 'Components/Controls';
import BaseField from 'Components/Form/BaseField';
import { DATA_DEFAULT_SAMPLE } from 'Constants/BaseInitialStates';

const DEFAULT_MESSAGES = {
  open: 'Открыть поиск',
  emptyList: 'Ничего не найдено',
  emptyFilter: 'Ничего не найдено',
  emptyValue: 'Ничего не выбрано',
  filterPlaceholder: 'Начните вводить название для поиска..'
};

const SEARCH_TIMEOUT = 500;

class ControlsSearcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
      loading: false,
      isOpen: false,
      data: []
    };
    const { isSearcher, input: { onChange } } = props;

    this.onSearch = _.debounce(value => this.state.isOpen && this.dataFetch(value), SEARCH_TIMEOUT);
    this.reset = () => onChange(null);
    this.initialValueExists = () => this.props.input.value;
    this.initializeActive = () => this.setState({ initialized: true });
    this.filter = isSearcher ? () => true : null;
    this.onChange = () => {};

    this.onToggle = this.onToggle.bind(this);
    this.singleFetch = this.singleFetch.bind(this);
    this.defaultFetch = this.defaultFetch.bind(this);
    this.dataFetch = this.dataFetch.bind(this);

    this.isReadyToUpdate = (prevQueryParams, queryParams) =>
      !_.some(queryParams, _.isEmpty) && !_.isEqual(prevQueryParams, queryParams);
    this.isReadyToReset = (prevQueryParams, queryParams) => !_.isEqual(prevQueryParams, queryParams);
  }

  componentDidMount() {
    const { defaultSelect, singleFetch } = this.props;

    if (this.initialValueExists()) return;

    if (_.isFunction(singleFetch)) {
      this.singleFetch();
    } else if (defaultSelect) {
      this.defaultFetch();
    }
  }

  componentDidUpdate({ queryParams: prevQueryParams }) {
    const { defaultSelect, queryParams } = this.props;

    if (this.initialValueExists() && !this.state.initialized) {
      this.initializeActive();
    } else if (defaultSelect && this.isReadyToUpdate(prevQueryParams, queryParams)) {
      this.defaultFetch();
    } else if (this.isReadyToReset(prevQueryParams, queryParams)) {
      this.reset();
    }
  }

  onToggle(isOpen) {
    const { onBlur } = this.props.input;

    this.setState({ isOpen });

    if (_.isFunction(onBlur) && !isOpen) onBlur();
    if (isOpen) this.dataFetch();
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

    if (!_.isFunction(dataFetch)) return;

    dataFetch({ ...DATA_DEFAULT_SAMPLE, ...queryParams })
      .loading(() => this.setState({ loading: true }))
      .then(({ response }) => {
        this.setState({ data: response.data || response, loading: false });

        onChange((response.data || response)[0] || null);
      })
      .catch(() => this.setState({ loading: false }));
  }

  dataFetch(value) {
    const { dataFetch, queryParams } = this.props;

    if (!_.isFunction(dataFetch)) return;

    dataFetch({ ...DATA_DEFAULT_SAMPLE, ...queryParams, search: value })
      .loading(() => this.setState({ loading: true }))
      .then(({ response }) => {
        this.setState({ data: response.data || response, loading: false });
      })
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    const {
      disabled,
      required,
      hidden,
      inline,
      label,
      className,
      placeholder,
      errorsDisplayType,
      valueField,
      textField,
      tabIndex,
      meta,
      defaultValue,
      messages,
      itemComponent,
      input: { value, onChange, onFocus },
      data: propsData
    } = this.props;
    const { data, loading } = this.state;

    return (
      <BaseField
        required={required}
        inline={inline}
        hidden={hidden}
        label={label}
        className={className}
        errorsDisplayType={errorsDisplayType}
        meta={meta}
      >
        <div className="searcher rw-widget-wrap">
          <DropdownList
            title={value && _.isFunction(textField) ? textField(value) : _.get(value, textField)}
            disabled={disabled}
            valueField={valueField}
            textField={textField}
            busy={loading}
            data={propsData || data}
            value={_.isEmpty(value) ? null : value}
            defaultValue={defaultValue || DEFAULT_MESSAGES.emptyValue}
            messages={messages || DEFAULT_MESSAGES}
            placeholder={placeholder}
            tabIndex={tabIndex}
            filter={this.filter}
            itemComponent={itemComponent}
            onChange={this.onChange}
            onFocus={onFocus}
            onSelect={onChange}
            onSearch={this.onSearch}
            onToggle={this.onToggle}
          />
          {!disabled && value && <div className="reset" title="Очистить" onClick={this.reset} />}
        </div>
      </BaseField>
    );
  }
}

ControlsSearcher.propTypes = {
  data: PropTypes.array,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  hidden: PropTypes.bool,
  required: PropTypes.bool,
  defaultSelect: PropTypes.bool,
  isSearcher: PropTypes.bool,
  messages: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  queryParams: PropTypes.object,
  label: PropTypes.string,
  valueField: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  singleFetch: PropTypes.func,
  itemComponent: PropTypes.func,
  dataFetch: PropTypes.func
};

export default ControlsSearcher;
